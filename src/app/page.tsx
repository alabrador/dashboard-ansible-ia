"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { detectBrowserLanguage, isSupportedLanguage, languageOptions, type Language } from "@/lang/core";
import {
  homeTranslations,
  speechLocales,
} from "@/lang/home";
import type { UserRole } from "@/lib/auth/types";

type ExecuteResponse = {
  transcript?: string;
  matchedCommand?: string;
  templateId?: number;
  jobId?: number;
  awxUrl?: string;
  supportedCommands?: string[];
  error?: string;
};

type AuthSessionResponse = {
  authenticated?: boolean;
  user?: {
    email?: string;
    displayName?: string;
    role?: UserRole;
  };
};

type SpeechRecognitionAlternative = {
  transcript: string;
};

type SpeechRecognitionResult = {
  isFinal: boolean;
  0: SpeechRecognitionAlternative;
};

type SpeechRecognitionResultList = {
  length: number;
  [index: number]: SpeechRecognitionResult;
};

type SpeechRecognitionEvent = {
  resultIndex: number;
  results: SpeechRecognitionResultList;
};

type BrowserSpeechRecognition = {
  lang: string;
  interimResults: boolean;
  continuous: boolean;
  onresult: ((event: SpeechRecognitionEvent) => void) | null;
  onerror: ((event: { error?: string }) => void) | null;
  start: () => void;
  stop: () => void;
};

type BrowserSpeechRecognitionConstructor = new () => BrowserSpeechRecognition;

function getSpeechRecognitionConstructor(): BrowserSpeechRecognitionConstructor | null {
  if (typeof window === "undefined") {
    return null;
  }

  const browserWindow = window as Window & {
    SpeechRecognition?: BrowserSpeechRecognitionConstructor;
    webkitSpeechRecognition?: BrowserSpeechRecognitionConstructor;
  };

  return browserWindow.SpeechRecognition ?? browserWindow.webkitSpeechRecognition ?? null;
}

function formatError(error: unknown, fallback: string): string {
  if (typeof error === "string") {
    return error;
  }

  if (
    typeof error === "object" &&
    error !== null &&
    "message" in error &&
    typeof error.message === "string"
  ) {
    return error.message;
  }

  return fallback;
}

export default function Home() {
  const router = useRouter();
  const SILENCE_AUTOSTOP_MS = 1300;
  const MIN_RECORDING_MS = 900;
  const MAX_RECORDING_MS = 12000;

  const [isRecording, setIsRecording] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [transcript, setTranscript] = useState("");
  const [result, setResult] = useState<ExecuteResponse | null>(null);
  const [error, setError] = useState("");
  const [hints, setHints] = useState<string[]>([]);
  const [liveTranscript, setLiveTranscript] = useState("");
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [isThemeInitialized, setIsThemeInitialized] = useState(false);
  const [language, setLanguage] = useState<Language>("es");
  const [isSettingsMenuOpen, setIsSettingsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userDisplayName, setUserDisplayName] = useState("");
  const [userRole, setUserRole] = useState<UserRole | "">("");
  const [isSessionReady, setIsSessionReady] = useState(false);

  const t = homeTranslations[language];

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<BlobPart[]>([]);
  const speechRecognitionRef = useRef<BrowserSpeechRecognition | null>(null);
  const settingsMenuRef = useRef<HTMLDivElement | null>(null);
  const userMenuRef = useRef<HTMLDivElement | null>(null);
  const silenceTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const maxDurationTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const speechDetectedRef = useRef(false);
  const recordingStartedAtRef = useRef(0);
  const transcriptHintRef = useRef("");

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const savedTheme = window.localStorage.getItem("dashboard-theme");
    if (savedTheme === "dark" || savedTheme === "light") {
      setTheme(savedTheme);
    }

    setIsThemeInitialized(true);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (!isThemeInitialized) {
      return;
    }

    window.localStorage.setItem("dashboard-theme", theme);
  }, [isThemeInitialized, theme]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const savedLanguage = window.localStorage.getItem("dashboard-language");
    if (savedLanguage && isSupportedLanguage(savedLanguage)) {
      setLanguage(savedLanguage);
      return;
    }

    const browserLanguage = detectBrowserLanguage([
      ...(window.navigator.languages ?? []),
      window.navigator.language,
    ]);
    setLanguage(browserLanguage);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    window.localStorage.setItem("dashboard-language", language);
  }, [language]);

  useEffect(() => {
    const handleDocumentPointerDown = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Node)) {
        return;
      }

      const clickedSettingsMenu = settingsMenuRef.current?.contains(target) ?? false;
      const clickedUserMenu = userMenuRef.current?.contains(target) ?? false;

      if (!clickedSettingsMenu && !clickedUserMenu) {
        setIsSettingsMenuOpen(false);
        setIsUserMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleDocumentPointerDown);

    return () => {
      document.removeEventListener("mousedown", handleDocumentPointerDown);
    };
  }, []);

  useEffect(() => {
    const loadSession = async () => {
      try {
        const response = await fetch("/api/auth/session", {
          method: "GET",
          cache: "no-store",
        });

        if (!response.ok) {
          setUserEmail("");
          setUserDisplayName("");
          setUserRole("");
          setIsSessionReady(true);
          router.replace("/login");
          return;
        }

        const payload = (await response.json()) as AuthSessionResponse;
        if (!payload.authenticated) {
          setUserEmail("");
          setUserDisplayName("");
          setUserRole("");
          setIsSessionReady(true);
          router.replace("/login");
          return;
        }

        const displayName = payload.user?.displayName?.trim();
        if (displayName) {
          setUserDisplayName(displayName);
        }

        const role = payload.user?.role;
        if (role === "administrativo" || role === "tecnico") {
          setUserRole(role);
        }

        const email = payload.user?.email?.trim();
        if (email) {
          setUserEmail(email);
          setIsSessionReady(true);
          return;
        }

        setUserEmail("");
        setUserDisplayName("");
        setUserRole("");
        setIsSessionReady(true);
        router.replace("/login");
      } catch {
        setUserEmail("");
        setUserDisplayName("");
        setUserRole("");
        setIsSessionReady(true);
        router.replace("/login");
      }
    };

    void loadSession();
  }, [router]);

  const clearSilenceTimer = () => {
    if (silenceTimeoutRef.current) {
      clearTimeout(silenceTimeoutRef.current);
      silenceTimeoutRef.current = null;
    }
  };

  const clearMaxDurationTimer = () => {
    if (maxDurationTimeoutRef.current) {
      clearTimeout(maxDurationTimeoutRef.current);
      maxDurationTimeoutRef.current = null;
    }
  };

  const scheduleSilenceAutostop = () => {
    clearSilenceTimer();
    silenceTimeoutRef.current = setTimeout(() => {
      const elapsed = Date.now() - recordingStartedAtRef.current;
      if (
        speechDetectedRef.current &&
        elapsed >= MIN_RECORDING_MS &&
        mediaRecorderRef.current?.state === "recording"
      ) {
        stopRecording();
      }
    }, SILENCE_AUTOSTOP_MS);
  };

  const scheduleMaxDurationAutostop = () => {
    clearMaxDurationTimer();
    maxDurationTimeoutRef.current = setTimeout(() => {
      if (mediaRecorderRef.current?.state === "recording") {
        stopRecording();
      }
    }, MAX_RECORDING_MS);
  };

  const runExecution = async (audio: Blob, transcriptHint?: string) => {
    setIsLoading(true);
    setError("");
    setResult(null);
    setHints([]);

    try {
      const formData = new FormData();
      formData.append("audio", audio, "voice-command.webm");
      if (transcriptHint?.trim()) {
        formData.append("transcriptHint", transcriptHint.trim());
      }

      const response = await fetch("/api/execute", {
        method: "POST",
        body: formData,
      });

      const rawPayload = await response.text();
      let payload: ExecuteResponse = {};

      try {
        payload = JSON.parse(rawPayload) as ExecuteResponse;
      } catch {
        payload = {
          error: rawPayload.slice(0, 300) || t.unknownError,
        };
      }

      if (payload.transcript) {
        setTranscript(payload.transcript);
        setLiveTranscript("");
      }

      if (!response.ok) {
        if (payload.supportedCommands?.length) {
          setHints(payload.supportedCommands);
        }

        throw new Error(payload.error ?? t.invalidAudioCommand);
      }

      setResult(payload);
      setAudioBlob(null);
    } catch (executionError) {
      setError(formatError(executionError, t.unknownError));
    } finally {
      setIsLoading(false);
    }
  };

  const startRecording = async () => {
    setError("");
    setResult(null);
    setLiveTranscript("");
    setTranscript("");
    clearSilenceTimer();
    clearMaxDurationTimer();
    speechDetectedRef.current = false;
    recordingStartedAtRef.current = Date.now();
    transcriptHintRef.current = "";

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream, { mimeType: "audio/webm" });
      chunksRef.current = [];

      const SpeechRecognitionCtor = getSpeechRecognitionConstructor();
      if (SpeechRecognitionCtor) {
        const recognition = new SpeechRecognitionCtor();
        recognition.lang = speechLocales[language];
        recognition.interimResults = true;
        recognition.continuous = true;

        recognition.onresult = (event) => {
          const finalSegments: string[] = [];
          const interimSegments: string[] = [];

          for (let index = 0; index < event.results.length; index += 1) {
            const resultItem = event.results[index];
            const segment = resultItem[0]?.transcript ?? "";

            if (resultItem.isFinal) {
              finalSegments.push(segment);
            } else {
              interimSegments.push(segment);
            }
          }

          const mergedText = `${finalSegments.join(" ")} ${interimSegments.join(" ")}`
            .replace(/\s+/g, " ")
            .trim();

          if (mergedText) {
            speechDetectedRef.current = true;
            transcriptHintRef.current = mergedText;
            scheduleSilenceAutostop();
            setLiveTranscript(mergedText);
            setTranscript(mergedText);
          }
        };

        recognition.onerror = () => {
          setLiveTranscript("");
        };

        recognition.start();
        speechRecognitionRef.current = recognition;
      }

      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunksRef.current.push(event.data);
        }
      };

      recorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: "audio/webm" });
        setAudioBlob(blob);
        stream.getTracks().forEach((track) => track.stop());
        speechRecognitionRef.current?.stop();
        clearSilenceTimer();
        clearMaxDurationTimer();
        speechDetectedRef.current = false;
        const transcriptHint = transcriptHintRef.current;
        transcriptHintRef.current = "";
        void runExecution(blob, transcriptHint);
      };

      recorder.start();
      scheduleMaxDurationAutostop();
      mediaRecorderRef.current = recorder;
      setIsRecording(true);
    } catch {
      setError(t.micAccessError);
    }
  };

  const stopRecording = () => {
    clearSilenceTimer();
    clearMaxDurationTimer();
    if (mediaRecorderRef.current?.state === "recording") {
      mediaRecorderRef.current.stop();
    }
    speechRecognitionRef.current?.stop();
    setIsRecording(false);
  };

  const handleSignOut = async () => {
    try {
      await fetch("/api/auth/logout", {
        method: "POST",
      });
      router.replace("/login");
      router.refresh();
    } catch {
      setError(t.signOutError);
    }
  };

  const primaryButtonClass = isRecording
    ? "bg-red-500 text-white hover:bg-red-400"
    : "bg-gradient-to-br from-sky-400 via-cyan-400 to-blue-500 text-zinc-950 hover:from-sky-300 hover:to-blue-400";

  const primaryButtonLabel = isLoading
    ? t.buttonProcessing
    : isRecording
      ? t.buttonStop
      : t.buttonSpeak;

  const panelClass =
    theme === "dark"
      ? "rounded-xl border border-white/15 bg-white/5 p-4 shadow-[0_8px_24px_-16px_rgba(59,130,246,0.35)] backdrop-blur-2xl sm:rounded-2xl sm:p-5"
      : "rounded-xl border border-zinc-200 bg-white p-4 shadow-[0_8px_24px_-16px_rgba(15,23,42,0.2)] sm:rounded-2xl sm:p-5";

  const mainClass =
    theme === "dark"
      ? "min-h-[100dvh] bg-zinc-950 text-zinc-100 sm:min-h-screen"
      : "min-h-[100dvh] bg-zinc-50 text-zinc-900 sm:min-h-screen";

  const helperCardClass =
    theme === "dark"
      ? "rounded-xl border border-white/10 bg-zinc-950/70 px-4 py-2 text-xs text-zinc-300"
      : "rounded-xl border border-zinc-200 bg-zinc-100 px-4 py-2 text-xs text-zinc-700";

  const topPanelClass =
    theme === "dark"
      ? "rounded-xl border border-white/15 bg-white/5 p-4 shadow-[0_10px_28px_-18px_rgba(56,189,248,0.45)] backdrop-blur-2xl sm:rounded-3xl sm:p-6 md:min-h-[260px]"
      : "rounded-xl border border-zinc-200 bg-white p-4 shadow-[0_10px_28px_-18px_rgba(15,23,42,0.25)] sm:rounded-3xl sm:p-6 md:min-h-[260px]";

  const titleClass =
    theme === "dark"
      ? "bg-gradient-to-r from-white via-zinc-100 to-zinc-300 bg-clip-text text-2xl font-semibold tracking-tight text-transparent sm:text-4xl"
      : "bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-500 bg-clip-text text-2xl font-semibold tracking-tight text-transparent sm:text-4xl";

  const topLabelClass = theme === "dark" ? "text-zinc-400" : "text-zinc-500";

  const statusTextClass = theme === "dark" ? "text-zinc-200" : "text-zinc-700";

  const transcriptTextClass = theme === "dark" ? "text-zinc-100" : "text-zinc-800";

  const emptyTextClass = theme === "dark" ? "text-zinc-400" : "text-zinc-500";

  const linkClass =
    theme === "dark"
      ? "inline-flex items-center gap-1 font-medium text-sky-300 hover:text-sky-200"
      : "inline-flex items-center gap-1 font-medium text-sky-700 hover:text-sky-600";

  const menuButtonClass =
    theme === "dark"
      ? "inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-zinc-200 transition hover:bg-white/15 sm:h-10 sm:w-10"
      : "inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-300 bg-white text-zinc-700 transition hover:bg-zinc-100 sm:h-10 sm:w-10";

  const menuPanelClass =
    theme === "dark"
      ? "absolute right-0 top-12 z-20 w-56 rounded-xl border border-white/15 bg-zinc-900/95 p-2 shadow-xl"
      : "absolute right-0 top-12 z-20 w-56 rounded-xl border border-zinc-200 bg-white p-2 shadow-xl";

  const userButtonClass =
    theme === "dark"
      ? "inline-flex h-9 items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-2.5 text-xs font-medium text-zinc-100 transition hover:bg-white/15 sm:h-10 sm:px-3"
      : "inline-flex h-9 items-center gap-1.5 rounded-full border border-zinc-300 bg-white px-2.5 text-xs font-medium text-zinc-800 transition hover:bg-zinc-100 sm:h-10 sm:px-3";

  const languageSelectWrapperClass =
    theme === "dark"
      ? "relative w-24 sm:w-28"
      : "relative w-24 sm:w-28";

  const languageSelectClass =
    theme === "dark"
      ? "h-9 w-full appearance-none rounded-full border border-white/20 bg-zinc-900/75 pl-3 pr-8 text-xs font-semibold text-zinc-200 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-400/40 sm:h-10 sm:text-sm"
      : "h-9 w-full appearance-none rounded-full border border-zinc-300 bg-white pl-3 pr-8 text-xs font-semibold text-zinc-700 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/30 sm:h-10 sm:text-sm";

  const languageSelectChevronClass =
    theme === "dark"
      ? "pointer-events-none absolute right-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-zinc-400"
      : "pointer-events-none absolute right-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-zinc-500";

  const menuItemClass =
    theme === "dark"
      ? "flex h-9 items-center rounded-lg px-3 text-xs font-medium text-zinc-200 transition hover:bg-white/10"
      : "flex h-9 items-center rounded-lg px-3 text-xs font-medium text-zinc-700 transition hover:bg-zinc-100";

  const hintBoxClass =
    theme === "dark"
      ? "mt-4 rounded-lg border border-zinc-700 bg-zinc-950/70 p-3 text-xs text-zinc-300"
      : "mt-4 rounded-lg border border-zinc-200 bg-zinc-100 p-3 text-xs text-zinc-700";

  const userName = userDisplayName || (userEmail ? userEmail.split("@")[0] : t.unknownUser);
  const isAdmin = userRole === "administrativo";

  if (!isThemeInitialized || !isSessionReady) {
    return null;
  }

  return (
    <main className={mainClass}>
      {theme === "dark" ? (
        <div className="pointer-events-none fixed inset-0 -z-10 hidden md:block">
          <div className="absolute left-1/2 top-16 h-72 w-72 -translate-x-1/2 rounded-full bg-sky-500/10 blur-3xl" />
          <div className="absolute bottom-10 right-20 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />
        </div>
      ) : null}
      <div className="mx-auto flex min-h-[100dvh] w-full max-w-4xl flex-col justify-start gap-2 px-3 py-2 sm:min-h-screen sm:justify-start sm:gap-6 sm:px-6 sm:py-10">
        <header className={`sticky top-0 z-30 space-y-2 border-b px-1 py-2 backdrop-blur sm:space-y-3 ${theme === "dark" ? "border-white/10 bg-zinc-950/80" : "border-zinc-200 bg-zinc-50/90"}`}>
          <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-3">
            <div
              className={
                theme === "dark"
                  ? "inline-flex h-8 items-center rounded-full border border-white/20 bg-white/5 px-2 text-xs font-semibold tracking-wider text-zinc-200"
                  : "inline-flex h-8 items-center rounded-full border border-zinc-300 bg-white px-2 text-xs font-semibold tracking-wider text-zinc-700"
              }
            >
              <Image
                src="/logo.png"
                alt={t.logoAlt}
                width={28}
                height={28}
                className="h-5 w-auto object-contain"
                priority
              />
            </div>
            <div className="flex flex-wrap items-center justify-end gap-1.5 sm:gap-2">
              <label className="sr-only" htmlFor="language-select-home">{t.languageSelectAria}</label>
              <div className={languageSelectWrapperClass}>
                <select
                  id="language-select-home"
                  aria-label={t.languageSelectAria}
                  value={language}
                  onChange={(event) => {
                    const nextLanguage = event.target.value;
                    if (isSupportedLanguage(nextLanguage)) {
                      setLanguage(nextLanguage);
                    }
                  }}
                  className={languageSelectClass}
                >
                  {languageOptions.map((option) => (
                    <option key={option.code} value={option.code}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className={languageSelectChevronClass}
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.171l3.71-3.94a.75.75 0 1 1 1.08 1.04l-4.24 4.5a.75.75 0 0 1-1.08 0l-4.24-4.5a.75.75 0 0 1 .02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            <button
              type="button"
              onClick={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
              className={
                theme === "dark"
                  ? "inline-flex h-9 items-center rounded-full border border-white/20 bg-white/10 px-3 text-[11px] font-medium text-zinc-200 transition hover:bg-white/15 sm:h-10 sm:px-4 sm:text-xs"
                  : "inline-flex h-9 items-center rounded-full border border-zinc-300 bg-white px-3 text-[11px] font-medium text-zinc-700 transition hover:bg-zinc-100 sm:h-10 sm:px-4 sm:text-xs"
              }
              aria-label={t.themeToggleAria}
            >
              {theme === "dark" ? t.themeLight : t.themeDark}
            </button>
            {isAdmin ? (
            <div ref={settingsMenuRef} className="relative">
              <button
                type="button"
                onClick={() => {
                  setIsSettingsMenuOpen((current) => !current);
                  setIsUserMenuOpen(false);
                }}
                className={menuButtonClass}
                aria-label={t.settingsMenuAria}
                aria-expanded={isSettingsMenuOpen}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33h.01a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h.01a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.01a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                </svg>
              </button>
              {isSettingsMenuOpen ? (
                <div className={menuPanelClass}>
                  <Link
                    href="/users"
                    className={menuItemClass}
                    onClick={() => setIsSettingsMenuOpen(false)}
                  >
                    {t.menuUsers}
                  </Link>
                  <Link
                    href="/settings/ldap"
                    className={menuItemClass}
                    onClick={() => setIsSettingsMenuOpen(false)}
                  >
                    {t.menuLdapSettings}
                  </Link>
                  <Link
                    href="/settings/ansible"
                    className={menuItemClass}
                    onClick={() => setIsSettingsMenuOpen(false)}
                  >
                    {t.menuAnsibleSettings}
                  </Link>
                  <Link
                    href="/settings/whisper"
                    className={menuItemClass}
                    onClick={() => setIsSettingsMenuOpen(false)}
                  >
                    {t.menuWhisperSettings}
                  </Link>
                </div>
              ) : null}
            </div>
            ) : null}
            <div ref={userMenuRef} className="relative">
              <button
                type="button"
                onClick={() => {
                  setIsUserMenuOpen((current) => !current);
                  setIsSettingsMenuOpen(false);
                }}
                className={userButtonClass}
                aria-label={t.userMenuAria}
                aria-expanded={isUserMenuOpen}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="M20 21a8 8 0 0 0-16 0" />
                  <circle cx="12" cy="8" r="4" />
                </svg>
                <span className="max-w-20 truncate sm:max-w-24">{userName}</span>
              </button>
              {isUserMenuOpen ? (
                <div className={menuPanelClass}>
                  <p className={`${menuItemClass} cursor-default`}>
                    {t.currentUserLabel}: {userName}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsUserMenuOpen(false);
                      void handleSignOut();
                    }}
                    className={`${menuItemClass} w-full`}
                  >
                    {t.signOut}
                  </button>
                </div>
              ) : null}
            </div>
            </div>
          </div>
          <p className={`hidden text-center text-sm uppercase tracking-[0.2em] sm:block ${topLabelClass}`}>{t.headerSubtitle}</p>
          <h1 className={`${titleClass} text-center`}>
            {t.headerTitle}
          </h1>
        </header>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          <section className={topPanelClass}>
            <div className="flex h-full flex-col items-center justify-center gap-3 sm:gap-4">
              <button
                onClick={isRecording ? stopRecording : startRecording}
                className={`group relative flex h-16 w-16 items-center justify-center rounded-full border border-white/35 text-2xl font-semibold shadow-lg shadow-sky-500/20 ring-2 ring-white/15 transition-all duration-200 active:scale-95 disabled:cursor-not-allowed disabled:opacity-60 sm:h-20 sm:w-20 ${primaryButtonClass}`}
                disabled={isLoading}
              >
                <span
                  className={`absolute inset-0 rounded-full ${isRecording ? "animate-ping bg-red-500/30" : ""}`}
                />
                <span className="relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 sm:h-8 sm:w-8"
                    aria-hidden="true"
                  >
                    <rect x="9" y="3" width="6" height="12" rx="3" />
                    <path d="M5 11a7 7 0 0 0 14 0" />
                    <path d="M12 18v3" />
                    <path d="M8 21h8" />
                  </svg>
                </span>
              </button>

              <p className={`text-xs font-medium sm:text-sm ${statusTextClass}`}>{primaryButtonLabel}</p>

              <div className={helperCardClass}>
                {isLoading
                  ? t.statusProcessing
                  : liveTranscript
                    ? t.statusListening
                    : audioBlob
                      ? t.statusCaptured
                      : t.statusReady}
              </div>
            </div>
          </section>

          <section className={`${panelClass} h-full md:min-h-[260px]`}>
            <h2 className={`text-xs font-semibold uppercase tracking-wider ${topLabelClass}`}>{t.sectionTranscript}</h2>
            <p className={`mt-2 min-h-14 text-xs leading-relaxed sm:mt-3 sm:min-h-16 sm:text-sm ${transcriptTextClass}`}>
              {transcript || t.transcriptPlaceholder}
            </p>
          </section>
        </div>

        <section className={panelClass}>
          <h2 className={`text-xs font-semibold uppercase tracking-wider ${topLabelClass}`}>{t.sectionResult}</h2>

          {error ? (
            <p className="mt-2 rounded-lg border border-red-500/40 bg-red-500/10 px-3 py-2 text-xs text-red-300 sm:mt-3 sm:text-sm">
              {error}
            </p>
          ) : null}

          {result ? (
            <div className={`mt-2 space-y-1.5 text-xs sm:mt-3 sm:space-y-2 sm:text-sm ${transcriptTextClass}`}>
              <p>
                {t.commandDetected}: <strong>{result.matchedCommand}</strong>
              </p>
              <p>{t.templateIdLabel}: {result.templateId}</p>
              <p>{t.jobIdLabel}: {result.jobId}</p>
              <a
                href={result.awxUrl}
                target="_blank"
                rel="noreferrer"
                className={linkClass}
              >
                {t.viewAwx} <span>↗</span>
              </a>
            </div>
          ) : (
            <p className={`mt-2 text-xs sm:mt-3 sm:text-sm ${emptyTextClass}`}>{t.noExecution}</p>
          )}

          {hints.length ? (
            <div className={hintBoxClass}>
              <p className="font-semibold">{t.availableCommands}</p>
              <p>{hints.join(", ")}</p>
            </div>
          ) : null}
        </section>

      </div>
    </main>
  );
}
