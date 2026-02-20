"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { detectBrowserLanguage, isSupportedLanguage, languageOptions, type Language } from "@/lang/core";
import { ldapSettingsTranslations } from "@/lang/ldap-settings";
import type { UserRole } from "@/lib/auth/types";

type AuthSessionResponse = {
  authenticated?: boolean;
  user?: {
    email?: string;
    displayName?: string;
    role?: UserRole;
  };
};

type LdapConfigResponse = {
  config?: {
    url?: string;
    baseDn?: string;
    userFilter?: string;
    bindDn?: string;
    bindPassword?: string;
    timeoutMs?: number;
    adminEmails?: string;
  } | null;
  error?: string;
};

type LdapTestResponse = {
  ok?: boolean;
  message?: string;
  error?: string;
};

export default function LdapSettingsPage() {
  const router = useRouter();
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [language, setLanguage] = useState<Language>("es");
  const [isThemeInitialized, setIsThemeInitialized] = useState(false);
  const [isSessionReady, setIsSessionReady] = useState(false);
  const [isSettingsMenuOpen, setIsSettingsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userDisplayName, setUserDisplayName] = useState("");
  const [userRole, setUserRole] = useState<UserRole | "">("");

  const [url, setUrl] = useState("");
  const [baseDn, setBaseDn] = useState("");
  const [userFilter, setUserFilter] = useState("(mail={{email}})");
  const [bindDn, setBindDn] = useState("");
  const [bindPassword, setBindPassword] = useState("");
  const [timeoutMs, setTimeoutMs] = useState("5000");
  const [adminEmails, setAdminEmails] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const settingsMenuRef = useRef<HTMLDivElement | null>(null);
  const userMenuRef = useRef<HTMLDivElement | null>(null);
  const t = ldapSettingsTranslations[language];

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const savedLanguage = window.localStorage.getItem("dashboard-language");
    if (savedLanguage && isSupportedLanguage(savedLanguage)) {
      setLanguage(savedLanguage);
    } else {
      const browserLanguage = detectBrowserLanguage([
        ...(window.navigator.languages ?? []),
        window.navigator.language,
      ]);
      setLanguage(browserLanguage);
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

    window.localStorage.setItem("dashboard-language", language);
  }, [language]);

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
    const loadAll = async () => {
      try {
        const sessionResponse = await fetch("/api/auth/session", { cache: "no-store" });
        if (!sessionResponse.ok) {
          setIsSessionReady(true);
          router.replace("/login");
          return;
        }

        const sessionPayload = (await sessionResponse.json()) as AuthSessionResponse;
        const role = sessionPayload.user?.role;
        if (!sessionPayload.authenticated || role !== "administrativo") {
          setIsSessionReady(true);
          router.replace("/");
          return;
        }

        setUserRole(role);
        setUserEmail(sessionPayload.user?.email?.trim() ?? "");
        setUserDisplayName(sessionPayload.user?.displayName?.trim() ?? "");

        const configResponse = await fetch("/api/auth/ldap-config", { cache: "no-store" });
        const configPayload = (await configResponse.json()) as LdapConfigResponse;

        if (!configResponse.ok) {
          setError(configPayload.error ?? t.loadError);
          setIsSessionReady(true);
          return;
        }

        if (configPayload.config) {
          setUrl(configPayload.config.url?.trim() ?? "");
          setBaseDn(configPayload.config.baseDn?.trim() ?? "");
          setUserFilter(configPayload.config.userFilter?.trim() || "(mail={{email}})");
          setBindDn(configPayload.config.bindDn?.trim() ?? "");
          setBindPassword(configPayload.config.bindPassword ?? "");
          setTimeoutMs(String(configPayload.config.timeoutMs ?? 5000));
          setAdminEmails(configPayload.config.adminEmails ?? "");
        }

        setIsSessionReady(true);
      } catch {
        setError(t.loadError);
        setIsSessionReady(true);
      }
    };

    void loadAll();
  }, [router, t.loadError]);

  const handleSave = async () => {
    setIsLoading(true);
    setError("");
    setMessage("");

    try {
      const response = await fetch("/api/auth/ldap-config", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          url,
          baseDn,
          userFilter,
          bindDn,
          bindPassword,
          timeoutMs: Number(timeoutMs),
          adminEmails,
        }),
      });

      const payload = (await response.json()) as { ok?: boolean; error?: string };
      if (!response.ok || !payload.ok) {
        setError(payload.error ?? t.saveError);
        return;
      }

      setMessage(t.saveSuccess);
    } catch {
      setError(t.saveError);
    } finally {
      setIsLoading(false);
    }
  };

  const handleTest = async () => {
    setIsLoading(true);
    setError("");
    setMessage("");

    try {
      const response = await fetch("/api/auth/ldap-config/test", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          url,
          baseDn,
          userFilter,
          bindDn,
          bindPassword,
          timeoutMs: Number(timeoutMs),
          adminEmails,
        }),
      });

      const payload = (await response.json()) as LdapTestResponse;
      if (!response.ok || !payload.ok) {
        setError(payload.error ?? payload.message ?? t.testError);
        return;
      }

      setMessage(payload.message ?? t.testSuccess);
    } catch {
      setError(t.testError);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      router.replace("/login");
      router.refresh();
    } catch {
      setError(t.signOutError);
    }
  };

  const panelClass =
    theme === "dark"
      ? "rounded-xl border border-white/15 bg-white/5 p-4 shadow-[0_8px_24px_-16px_rgba(59,130,246,0.35)] backdrop-blur-2xl sm:rounded-2xl sm:p-5"
      : "rounded-xl border border-zinc-200 bg-white p-4 shadow-[0_8px_24px_-16px_rgba(15,23,42,0.2)] sm:rounded-2xl sm:p-5";

  const mainClass =
    theme === "dark"
      ? "min-h-[100dvh] bg-zinc-950 text-zinc-100 sm:min-h-screen"
      : "min-h-[100dvh] bg-zinc-50 text-zinc-900 sm:min-h-screen";

  const topLabelClass = theme === "dark" ? "text-zinc-400" : "text-zinc-500";
  const subtitleClass = theme === "dark" ? "text-zinc-300" : "text-zinc-600";
  const titleClass =
    theme === "dark"
      ? "bg-gradient-to-r from-white via-zinc-100 to-zinc-300 bg-clip-text text-2xl font-semibold tracking-tight text-transparent sm:text-4xl"
      : "bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-500 bg-clip-text text-2xl font-semibold tracking-tight text-transparent sm:text-4xl";

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

  const languageSelectWrapperClass = "relative w-24 sm:w-28";
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

  const inputClass =
    theme === "dark"
      ? "w-full rounded-lg border border-white/15 bg-zinc-900/70 px-3 py-2 text-sm text-zinc-100 outline-none ring-sky-400 transition focus:ring"
      : "w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-800 outline-none ring-sky-500 transition focus:ring";

  const userName = userDisplayName || (userEmail ? userEmail.split("@")[0] : t.unknownUser);
  const isAdmin = userRole === "administrativo";

  if (!isThemeInitialized || !isSessionReady || !isAdmin) {
    return null;
  }

  return (
    <main className={mainClass}>
      <div className="mx-auto flex min-h-[100dvh] w-full max-w-4xl flex-col justify-start gap-2 px-3 py-2 sm:min-h-screen sm:justify-start sm:gap-6 sm:px-6 sm:py-10">
        <header className={`sticky top-0 z-30 space-y-2 border-b px-1 py-2 backdrop-blur sm:space-y-3 ${theme === "dark" ? "border-white/10 bg-zinc-950/80" : "border-zinc-200 bg-zinc-50/90"}`}>
          <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-3">
            <Link
              href="/"
              className={
                theme === "dark"
                  ? "inline-flex h-8 items-center rounded-full border border-white/20 bg-white/5 px-2 text-xs font-semibold tracking-wider text-zinc-200"
                  : "inline-flex h-8 items-center rounded-full border border-zinc-300 bg-white px-2 text-xs font-semibold tracking-wider text-zinc-700"
              }
            >
              <Image src="/logo.png" alt={t.logoAlt} width={28} height={28} className="h-5 w-auto object-contain" priority />
            </Link>

            <div className="flex flex-wrap items-center justify-end gap-1.5 sm:gap-2">
              <label className="sr-only" htmlFor="language-select-ldap">{t.languageSelectAria}</label>
              <div className={languageSelectWrapperClass}>
                <select
                  id="language-select-ldap"
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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={languageSelectChevronClass} aria-hidden="true">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.171l3.71-3.94a.75.75 0 1 1 1.08 1.04l-4.24 4.5a.75.75 0 0 1-1.08 0l-4.24-4.5a.75.75 0 0 1 .02-1.06z" clipRule="evenodd" />
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
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33h.01a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h.01a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.01a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                  </svg>
                </button>
                {isSettingsMenuOpen ? (
                  <div className={menuPanelClass}>
                    <Link href="/" className={menuItemClass} onClick={() => setIsSettingsMenuOpen(false)}>{t.menuGoApp}</Link>
                    <Link href="/users" className={menuItemClass} onClick={() => setIsSettingsMenuOpen(false)}>{t.menuUsers}</Link>
                    <Link href="/settings/ldap" className={menuItemClass} onClick={() => setIsSettingsMenuOpen(false)}>{t.menuLdapSettings}</Link>
                    <Link href="/settings/ansible" className={menuItemClass} onClick={() => setIsSettingsMenuOpen(false)}>{t.menuAnsibleSettings}</Link>
                    <Link href="/settings/whisper" className={menuItemClass} onClick={() => setIsSettingsMenuOpen(false)}>{t.menuWhisperSettings}</Link>
                  </div>
                ) : null}
              </div>

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
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
                    <path d="M20 21a8 8 0 0 0-16 0" />
                    <circle cx="12" cy="8" r="4" />
                  </svg>
                  <span className="max-w-20 truncate sm:max-w-24">{userName}</span>
                </button>
                {isUserMenuOpen ? (
                  <div className={menuPanelClass}>
                    <p className={`${menuItemClass} cursor-default`}>{t.currentUserLabel}: {userName}</p>
                    <button type="button" onClick={() => { setIsUserMenuOpen(false); void handleSignOut(); }} className={`${menuItemClass} w-full`}>
                      {t.signOut}
                    </button>
                  </div>
                ) : null}
              </div>
            </div>
          </div>

          <p className={`hidden text-center text-sm uppercase tracking-[0.2em] sm:block ${topLabelClass}`}>{t.headerTag}</p>
          <h1 className={`${titleClass} text-center`}>{t.headerTitle}</h1>
          <p className={`mx-auto max-w-2xl text-center text-xs sm:text-sm ${subtitleClass}`}>{t.headerDescription}</p>
        </header>

        <section className={panelClass}>
          <h2 className={`text-xs font-semibold uppercase tracking-wider ${topLabelClass}`}>{t.sectionConfig}</h2>

          <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
            <label className="text-xs sm:text-sm">
              <span className={`mb-1 block ${topLabelClass}`}>{t.ldapUrlLabel}</span>
              <input value={url} onChange={(event) => setUrl(event.target.value)} className={inputClass} />
            </label>
            <label className="text-xs sm:text-sm">
              <span className={`mb-1 block ${topLabelClass}`}>{t.baseDnLabel}</span>
              <input value={baseDn} onChange={(event) => setBaseDn(event.target.value)} className={inputClass} />
            </label>
            <label className="text-xs sm:text-sm md:col-span-2">
              <span className={`mb-1 block ${topLabelClass}`}>{t.userFilterLabel}</span>
              <input value={userFilter} onChange={(event) => setUserFilter(event.target.value)} className={inputClass} />
            </label>
            <label className="text-xs sm:text-sm">
              <span className={`mb-1 block ${topLabelClass}`}>{t.bindDnLabel}</span>
              <input value={bindDn} onChange={(event) => setBindDn(event.target.value)} className={inputClass} />
            </label>
            <label className="text-xs sm:text-sm">
              <span className={`mb-1 block ${topLabelClass}`}>{t.bindPasswordLabel}</span>
              <input type="password" value={bindPassword} onChange={(event) => setBindPassword(event.target.value)} className={inputClass} />
            </label>
            <label className="text-xs sm:text-sm">
              <span className={`mb-1 block ${topLabelClass}`}>{t.timeoutLabel}</span>
              <input type="number" min={1000} max={20000} step={100} value={timeoutMs} onChange={(event) => setTimeoutMs(event.target.value)} className={inputClass} />
            </label>
            <label className="text-xs sm:text-sm">
              <span className={`mb-1 block ${topLabelClass}`}>{t.adminEmailsLabel}</span>
              <input value={adminEmails} onChange={(event) => setAdminEmails(event.target.value)} className={inputClass} />
            </label>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => void handleSave()}
              disabled={isLoading}
              className="inline-flex h-10 items-center justify-center rounded-lg bg-gradient-to-br from-sky-400 via-cyan-400 to-blue-500 px-4 text-sm font-semibold text-zinc-950 transition hover:from-sky-300 hover:to-blue-400 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isLoading ? t.loading : t.save}
            </button>
            <button
              type="button"
              onClick={() => void handleTest()}
              disabled={isLoading}
              className={
                theme === "dark"
                  ? "inline-flex h-10 items-center justify-center rounded-lg border border-white/20 bg-white/10 px-4 text-sm font-medium text-zinc-100 transition hover:bg-white/15 disabled:cursor-not-allowed disabled:opacity-60"
                  : "inline-flex h-10 items-center justify-center rounded-lg border border-zinc-300 bg-white px-4 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-60"
              }
            >
              {t.testConnection}
            </button>
          </div>

          {error ? (
            <p className="mt-3 rounded-lg border border-red-500/40 bg-red-500/10 px-3 py-2 text-xs text-red-300 sm:text-sm">{error}</p>
          ) : null}

          {message ? (
            <p className="mt-3 rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-3 py-2 text-xs text-emerald-300 sm:text-sm">{message}</p>
          ) : null}
        </section>
      </div>
    </main>
  );
}
