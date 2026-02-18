"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

type Language = "es" | "en" | "it" | "pt";

const speechLocales: Record<Language, string> = {
  es: "es-ES",
  en: "en-US",
  it: "it-IT",
  pt: "pt-PT",
};

const languageOptions: Array<{ code: Language; label: string }> = [
  { code: "es", label: "ES" },
  { code: "en", label: "EN" },
  { code: "it", label: "IT" },
  { code: "pt", label: "PT" },
];

const translations: Record<
  Language,
  {
    themeLight: string;
    themeDark: string;
    themeToggleAria: string;
    languageLabel: string;
    languageSelectAria: string;
    headerSubtitle: string;
    pageDescription: string;
    buttonProcessing: string;
    buttonStop: string;
    buttonSpeak: string;
    statusProcessing: string;
    statusListening: string;
    statusCaptured: string;
    statusReady: string;
    sectionTranscript: string;
    transcriptPlaceholder: string;
    sectionResult: string;
    commandDetected: string;
    viewAwx: string;
    noExecution: string;
    availableCommands: string;
    micAccessError: string;
    unknownError: string;
    invalidAudioCommand: string;
    signOut: string;
    signOutError: string;
    localUsersTitle: string;
    localUsersDescription: string;
    localUsersEmail: string;
    localUsersPassword: string;
    localUsersSave: string;
    localUsersReload: string;
    localUsersEmpty: string;
    localUsersDelete: string;
    localUsersSaved: string;
    localUsersDeleted: string;
    localUsersLoadError: string;
    localUsersSaveError: string;
    localUsersDeleteError: string;
  }
> = {
  es: {
    themeLight: "☀️ Claro",
    themeDark: "🌙 Oscuro",
    themeToggleAria: "Cambiar tema",
    languageLabel: "Idioma",
    languageSelectAria: "Cambiar idioma",
    headerSubtitle: "Dashboard Ansible - Whisper IA",
    pageDescription:
      "Presiona el botón, habla que tarea quieres ejecutar y se ejecutará automáticamente en AWX.",
    buttonProcessing: "Procesando...",
    buttonStop: "Detener grabación",
    buttonSpeak: "Hablar ahora",
    statusProcessing: "Procesando audio y ejecutando en AWX...",
    statusListening: "Escuchando y transcribiendo en vivo...",
    statusCaptured: "Audio capturado. Ejecutando comando...",
    statusReady: "Listo para escuchar tu orden",
    sectionTranscript: "Transcripción",
    transcriptPlaceholder: "Aquí aparecerá el texto reconocido por Whisper.",
    sectionResult: "Resultado AWX",
    commandDetected: "Comando detectado",
    viewAwx: "Ver ejecución en AWX",
    noExecution: "Aún no hay ejecución.",
    availableCommands: "Comandos disponibles:",
    micAccessError: "No se pudo acceder al micrófono.",
    unknownError: "Error inesperado.",
    invalidAudioCommand: "No se encontró un comando válido en el audio.",
    signOut: "Cerrar sesión",
    signOutError: "No se pudo cerrar sesión.",
    localUsersTitle: "Usuarios locales",
    localUsersDescription: "Crear, actualizar o eliminar accesos locales por correo y contraseña.",
    localUsersEmail: "Correo",
    localUsersPassword: "Contraseña",
    localUsersSave: "Guardar usuario",
    localUsersReload: "Actualizar lista",
    localUsersEmpty: "No hay usuarios locales guardados.",
    localUsersDelete: "Eliminar",
    localUsersSaved: "Usuario guardado correctamente.",
    localUsersDeleted: "Usuario eliminado correctamente.",
    localUsersLoadError: "No se pudo cargar la lista de usuarios locales.",
    localUsersSaveError: "No se pudo guardar el usuario local.",
    localUsersDeleteError: "No se pudo eliminar el usuario local.",
  },
  en: {
    themeLight: "☀️ Light",
    themeDark: "🌙 Dark",
    themeToggleAria: "Toggle theme",
    languageLabel: "Language",
    languageSelectAria: "Change language",
    headerSubtitle: "Ansible Dashboard - Whisper AI",
    pageDescription: "Press the button, say the task you want to run, and it will execute automatically in AWX.",
    buttonProcessing: "Processing...",
    buttonStop: "Stop recording",
    buttonSpeak: "Speak now",
    statusProcessing: "Processing audio and executing in AWX...",
    statusListening: "Listening and transcribing live...",
    statusCaptured: "Audio captured. Executing command...",
    statusReady: "Ready to listen to your command",
    sectionTranscript: "Transcript",
    transcriptPlaceholder: "Whisper transcript will appear here.",
    sectionResult: "AWX Result",
    commandDetected: "Detected command",
    viewAwx: "View execution in AWX",
    noExecution: "No execution yet.",
    availableCommands: "Available commands:",
    micAccessError: "Could not access the microphone.",
    unknownError: "Unexpected error.",
    invalidAudioCommand: "No valid command was found in the audio.",
    signOut: "Sign out",
    signOutError: "Could not sign out.",
    localUsersTitle: "Local users",
    localUsersDescription: "Create, update, or delete local credentials by email and password.",
    localUsersEmail: "Email",
    localUsersPassword: "Password",
    localUsersSave: "Save user",
    localUsersReload: "Refresh list",
    localUsersEmpty: "No local users saved yet.",
    localUsersDelete: "Delete",
    localUsersSaved: "User saved successfully.",
    localUsersDeleted: "User deleted successfully.",
    localUsersLoadError: "Could not load local users list.",
    localUsersSaveError: "Could not save local user.",
    localUsersDeleteError: "Could not delete local user.",
  },
  it: {
    themeLight: "☀️ Chiaro",
    themeDark: "🌙 Scuro",
    themeToggleAria: "Cambia tema",
    languageLabel: "Lingua",
    languageSelectAria: "Cambia lingua",
    headerSubtitle: "Dashboard Ansible - Whisper IA",
    pageDescription:
      "Premi il pulsante, pronuncia l'attività da eseguire e verrà avviata automaticamente in AWX.",
    buttonProcessing: "Elaborazione...",
    buttonStop: "Ferma registrazione",
    buttonSpeak: "Parla ora",
    statusProcessing: "Elaborazione audio ed esecuzione in AWX...",
    statusListening: "Ascolto e trascrizione in tempo reale...",
    statusCaptured: "Audio acquisito. Esecuzione comando...",
    statusReady: "Pronto ad ascoltare il tuo comando",
    sectionTranscript: "Trascrizione",
    transcriptPlaceholder: "Qui apparirà il testo riconosciuto da Whisper.",
    sectionResult: "Risultato AWX",
    commandDetected: "Comando rilevato",
    viewAwx: "Vedi esecuzione in AWX",
    noExecution: "Nessuna esecuzione ancora.",
    availableCommands: "Comandi disponibili:",
    micAccessError: "Impossibile accedere al microfono.",
    unknownError: "Errore imprevisto.",
    invalidAudioCommand: "Nessun comando valido trovato nell'audio.",
    signOut: "Esci",
    signOutError: "Impossibile uscire.",
    localUsersTitle: "Utenti locali",
    localUsersDescription: "Crea, aggiorna o elimina accessi locali con email e password.",
    localUsersEmail: "Email",
    localUsersPassword: "Password",
    localUsersSave: "Salva utente",
    localUsersReload: "Aggiorna elenco",
    localUsersEmpty: "Nessun utente locale salvato.",
    localUsersDelete: "Elimina",
    localUsersSaved: "Utente salvato correttamente.",
    localUsersDeleted: "Utente eliminato correttamente.",
    localUsersLoadError: "Impossibile caricare l'elenco utenti locali.",
    localUsersSaveError: "Impossibile salvare l'utente locale.",
    localUsersDeleteError: "Impossibile eliminare l'utente locale.",
  },
  pt: {
    themeLight: "☀️ Claro",
    themeDark: "🌙 Escuro",
    themeToggleAria: "Alternar tema",
    languageLabel: "Idioma",
    languageSelectAria: "Alterar idioma",
    headerSubtitle: "Dashboard Ansible - Whisper IA",
    pageDescription:
      "Pressione o botão, diga a tarefa que deseja executar e ela será executada automaticamente no AWX.",
    buttonProcessing: "Processando...",
    buttonStop: "Parar gravação",
    buttonSpeak: "Falar agora",
    statusProcessing: "Processando áudio e executando no AWX...",
    statusListening: "Ouvindo e transcrevendo ao vivo...",
    statusCaptured: "Áudio capturado. Executando comando...",
    statusReady: "Pronto para ouvir seu comando",
    sectionTranscript: "Transcrição",
    transcriptPlaceholder: "Aqui aparecerá o texto reconhecido pelo Whisper.",
    sectionResult: "Resultado AWX",
    commandDetected: "Comando detectado",
    viewAwx: "Ver execução no AWX",
    noExecution: "Ainda não há execução.",
    availableCommands: "Comandos disponíveis:",
    micAccessError: "Não foi possível acessar o microfone.",
    unknownError: "Erro inesperado.",
    invalidAudioCommand: "Nenhum comando válido foi encontrado no áudio.",
    signOut: "Sair",
    signOutError: "Não foi possível encerrar a sessão.",
    localUsersTitle: "Usuários locais",
    localUsersDescription: "Criar, atualizar ou remover acessos locais por e-mail e senha.",
    localUsersEmail: "E-mail",
    localUsersPassword: "Senha",
    localUsersSave: "Salvar usuário",
    localUsersReload: "Atualizar lista",
    localUsersEmpty: "Ainda não há usuários locais salvos.",
    localUsersDelete: "Excluir",
    localUsersSaved: "Usuário salvo com sucesso.",
    localUsersDeleted: "Usuário removido com sucesso.",
    localUsersLoadError: "Não foi possível carregar a lista de usuários locais.",
    localUsersSaveError: "Não foi possível salvar o usuário local.",
    localUsersDeleteError: "Não foi possível remover o usuário local.",
  },
};

type ExecuteResponse = {
  transcript?: string;
  matchedCommand?: string;
  templateId?: number;
  jobId?: number;
  awxUrl?: string;
  supportedCommands?: string[];
  error?: string;
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const t = translations[language];

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<BlobPart[]>([]);
  const speechRecognitionRef = useRef<BrowserSpeechRecognition | null>(null);
  const silenceTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const speechDetectedRef = useRef(false);
  const recordingStartedAtRef = useRef(0);

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
    if (savedLanguage === "es" || savedLanguage === "en" || savedLanguage === "it" || savedLanguage === "pt") {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    window.localStorage.setItem("dashboard-language", language);
  }, [language]);

  const clearSilenceTimer = () => {
    if (silenceTimeoutRef.current) {
      clearTimeout(silenceTimeoutRef.current);
      silenceTimeoutRef.current = null;
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

  const runExecution = async (audio: Blob) => {
    setIsLoading(true);
    setError("");
    setResult(null);
    setHints([]);

    try {
      const formData = new FormData();
      formData.append("audio", audio, "voice-command.webm");

      const response = await fetch("/api/execute", {
        method: "POST",
        body: formData,
      });

      const payload = (await response.json()) as ExecuteResponse;

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
    speechDetectedRef.current = false;
    recordingStartedAtRef.current = Date.now();

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
        speechDetectedRef.current = false;
        void runExecution(blob);
      };

      recorder.start();
      mediaRecorderRef.current = recorder;
      setIsRecording(true);
    } catch {
      setError(t.micAccessError);
    }
  };

  const stopRecording = () => {
    clearSilenceTimer();
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
      ? "rounded-2xl border border-white/15 bg-white/5 p-5 shadow-[0_8px_24px_-16px_rgba(59,130,246,0.35)] backdrop-blur-2xl"
      : "rounded-2xl border border-zinc-200 bg-white p-5 shadow-[0_8px_24px_-16px_rgba(15,23,42,0.2)]";

  const mainClass =
    theme === "dark" ? "min-h-screen bg-zinc-950 text-zinc-100" : "min-h-screen bg-zinc-50 text-zinc-900";

  const subtitleClass = theme === "dark" ? "text-zinc-300" : "text-zinc-600";

  const helperCardClass =
    theme === "dark"
      ? "rounded-xl border border-white/10 bg-zinc-950/70 px-4 py-2 text-xs text-zinc-300"
      : "rounded-xl border border-zinc-200 bg-zinc-100 px-4 py-2 text-xs text-zinc-700";

  const topPanelClass =
    theme === "dark"
      ? "rounded-3xl border border-white/15 bg-white/5 p-6 shadow-[0_10px_28px_-18px_rgba(56,189,248,0.45)] backdrop-blur-2xl md:min-h-[260px]"
      : "rounded-3xl border border-zinc-200 bg-white p-6 shadow-[0_10px_28px_-18px_rgba(15,23,42,0.25)] md:min-h-[260px]";

  const titleClass =
    theme === "dark"
      ? "bg-gradient-to-r from-white via-zinc-100 to-zinc-300 bg-clip-text text-3xl font-semibold tracking-tight text-transparent sm:text-4xl"
      : "bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-500 bg-clip-text text-3xl font-semibold tracking-tight text-transparent sm:text-4xl";

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
      ? "inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-zinc-200 transition hover:bg-white/15"
      : "inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 bg-white text-zinc-700 transition hover:bg-zinc-100";

  const menuPanelClass =
    theme === "dark"
      ? "absolute right-0 top-12 z-20 w-56 rounded-xl border border-white/15 bg-zinc-900/95 p-2 shadow-xl"
      : "absolute right-0 top-12 z-20 w-56 rounded-xl border border-zinc-200 bg-white p-2 shadow-xl";

  const menuItemClass =
    theme === "dark"
      ? "flex h-9 items-center rounded-lg px-3 text-xs font-medium text-zinc-200 transition hover:bg-white/10"
      : "flex h-9 items-center rounded-lg px-3 text-xs font-medium text-zinc-700 transition hover:bg-zinc-100";

  const hintBoxClass =
    theme === "dark"
      ? "mt-4 rounded-lg border border-zinc-700 bg-zinc-950/70 p-3 text-xs text-zinc-300"
      : "mt-4 rounded-lg border border-zinc-200 bg-zinc-100 p-3 text-xs text-zinc-700";

  if (!isThemeInitialized) {
    return null;
  }

  return (
    <main className={mainClass}>
      {theme === "dark" ? (
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute left-1/2 top-16 h-72 w-72 -translate-x-1/2 rounded-full bg-sky-500/10 blur-3xl" />
          <div className="absolute bottom-10 right-20 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />
        </div>
      ) : null}
      <div className="mx-auto flex min-h-screen w-full max-w-4xl flex-col justify-center gap-6 px-6 py-10">
        <header className="space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div
              className={
                theme === "dark"
                  ? "inline-flex h-10 items-center rounded-full border border-white/20 bg-white/5 px-4 text-xs font-semibold tracking-wider text-zinc-200"
                  : "inline-flex h-10 items-center rounded-full border border-zinc-300 bg-white px-4 text-xs font-semibold tracking-wider text-zinc-700"
              }
            >
              <div className="relative h-6 w-28">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  fill
                  sizes="112px"
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-end gap-2">
            <div
              className={
                theme === "dark"
                  ? "inline-flex h-10 items-center rounded-full border border-white/20 bg-white/5 px-2"
                  : "inline-flex h-10 items-center rounded-full border border-zinc-300 bg-white px-2"
              }
            >
              <div
                role="group"
                aria-label={t.languageSelectAria}
                className={
                  theme === "dark"
                    ? "inline-flex h-8 overflow-hidden rounded-full border border-white/15 bg-zinc-900/60"
                    : "inline-flex h-8 overflow-hidden rounded-full border border-zinc-300 bg-zinc-100"
                }
              >
                {languageOptions.map((option) => {
                  const isActive = language === option.code;

                  return (
                    <button
                      key={option.code}
                      type="button"
                      onClick={() => setLanguage(option.code)}
                      className={
                        isActive
                          ? theme === "dark"
                            ? "inline-flex h-8 items-center bg-sky-500/90 px-2.5 text-xs font-semibold text-white"
                            : "inline-flex h-8 items-center bg-sky-600 px-2.5 text-xs font-semibold text-white"
                          : theme === "dark"
                            ? "inline-flex h-8 items-center px-2.5 text-xs font-medium text-zinc-300 transition hover:bg-white/10"
                            : "inline-flex h-8 items-center px-2.5 text-xs font-medium text-zinc-700 transition hover:bg-zinc-200"
                      }
                      aria-pressed={isActive}
                    >
                      {option.label}
                    </button>
                  );
                })}
              </div>
            </div>
            <button
              type="button"
              onClick={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
              className={
                theme === "dark"
                  ? "inline-flex h-10 items-center rounded-full border border-white/20 bg-white/10 px-4 text-xs font-medium text-zinc-200 transition hover:bg-white/15"
                  : "inline-flex h-10 items-center rounded-full border border-zinc-300 bg-white px-4 text-xs font-medium text-zinc-700 transition hover:bg-zinc-100"
              }
              aria-label={t.themeToggleAria}
            >
              {theme === "dark" ? t.themeLight : t.themeDark}
            </button>
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsMenuOpen((current) => !current)}
                className={menuButtonClass}
                aria-label="Abrir menú"
                aria-expanded={isMenuOpen}
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
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              </button>
              {isMenuOpen ? (
                <div className={menuPanelClass}>
                  <Link
                    href="/users"
                    className={menuItemClass}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Gestión de usuarios
                  </Link>
                  <button
                    type="button"
                    onClick={() => {
                      setIsMenuOpen(false);
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
          <p className={`text-center text-sm uppercase tracking-[0.2em] ${topLabelClass}`}>{t.headerSubtitle}</p>
          <h1 className={`${titleClass} text-center`}>
            Whisper + AWX
          </h1>
          <p className={`mx-auto max-w-2xl text-center text-sm ${subtitleClass}`}>
            {t.pageDescription}
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <section className={topPanelClass}>
            <div className="flex h-full flex-col items-center justify-center gap-4">
              <button
                onClick={isRecording ? stopRecording : startRecording}
                className={`group relative flex h-20 w-20 items-center justify-center rounded-full border border-white/35 text-2xl font-semibold shadow-lg shadow-sky-500/20 ring-2 ring-white/15 transition-all duration-200 active:scale-95 disabled:cursor-not-allowed disabled:opacity-60 ${primaryButtonClass}`}
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
                    className="h-8 w-8"
                    aria-hidden="true"
                  >
                    <rect x="9" y="3" width="6" height="12" rx="3" />
                    <path d="M5 11a7 7 0 0 0 14 0" />
                    <path d="M12 18v3" />
                    <path d="M8 21h8" />
                  </svg>
                </span>
              </button>

              <p className={`text-sm font-medium ${statusTextClass}`}>{primaryButtonLabel}</p>

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
            <p className={`mt-3 min-h-16 text-sm leading-relaxed ${transcriptTextClass}`}>
              {transcript || t.transcriptPlaceholder}
            </p>
          </section>
        </div>

        <section className={panelClass}>
          <h2 className={`text-xs font-semibold uppercase tracking-wider ${topLabelClass}`}>{t.sectionResult}</h2>

          {error ? (
            <p className="mt-3 rounded-lg border border-red-500/40 bg-red-500/10 px-3 py-2 text-sm text-red-300">
              {error}
            </p>
          ) : null}

          {result ? (
            <div className={`mt-3 space-y-2 text-sm ${transcriptTextClass}`}>
              <p>
                {t.commandDetected}: <strong>{result.matchedCommand}</strong>
              </p>
              <p>Template ID: {result.templateId}</p>
              <p>Job ID: {result.jobId}</p>
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
            <p className={`mt-3 text-sm ${emptyTextClass}`}>{t.noExecution}</p>
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
