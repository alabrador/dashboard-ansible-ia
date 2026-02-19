"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { isSupportedLanguage, languageOptions, type Language } from "@/lang/core";
import { usersTranslations } from "@/lang/users";

type LocalUsersResponse = {
  users?: string[];
  error?: string;
};

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

export default function UsersPage() {
  const router = useRouter();
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [language, setLanguage] = useState<Language>("es");
  const [isThemeInitialized, setIsThemeInitialized] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [localUsers, setLocalUsers] = useState<string[]>([]);
  const [localUserEmail, setLocalUserEmail] = useState("");
  const [localUserPassword, setLocalUserPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const t = usersTranslations[language];

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const savedLanguage = window.localStorage.getItem("dashboard-language");
    if (savedLanguage && isSupportedLanguage(savedLanguage)) {
      setLanguage(savedLanguage);
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

  const loadLocalUsers = async () => {
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/auth/local-users");
      const payload = (await response.json()) as LocalUsersResponse;

      if (!response.ok) {
        throw new Error(payload.error ?? t.localUsersLoadError);
      }

      setLocalUsers(payload.users ?? []);
    } catch (loadError) {
      setError(formatError(loadError, t.localUsersLoadError));
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    void loadLocalUsers();
  }, []);

  const handleSaveLocalUser = async () => {
    if (!localUserEmail.trim() || !localUserPassword.trim()) {
      setError(t.requiredCredentials);
      return;
    }

    setIsLoading(true);
    setError("");
    setMessage("");

    try {
      const response = await fetch("/api/auth/local-users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: localUserEmail, password: localUserPassword }),
      });

      const payload = (await response.json()) as { error?: string };
      if (!response.ok) {
        throw new Error(payload.error ?? t.localUsersSaveError);
      }

      setMessage(t.localUsersSaved);
      setLocalUserPassword("");
      await loadLocalUsers();
    } catch (saveError) {
      setError(formatError(saveError, t.localUsersSaveError));
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteLocalUser = async (email: string) => {
    setIsLoading(true);
    setError("");
    setMessage("");

    try {
      const response = await fetch("/api/auth/local-users", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const payload = (await response.json()) as { error?: string };
      if (!response.ok) {
        throw new Error(payload.error ?? t.localUsersDeleteError);
      }

      setMessage(t.localUsersDeleted);
      await loadLocalUsers();
    } catch (deleteError) {
      setError(formatError(deleteError, t.localUsersDeleteError));
    } finally {
      setIsLoading(false);
    }
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

  const panelClass =
    theme === "dark"
      ? "rounded-2xl border border-white/15 bg-white/5 p-5 shadow-[0_8px_24px_-16px_rgba(59,130,246,0.35)] backdrop-blur-2xl"
      : "rounded-2xl border border-zinc-200 bg-white p-5 shadow-[0_8px_24px_-16px_rgba(15,23,42,0.2)]";

  const mainClass =
    theme === "dark" ? "min-h-screen bg-zinc-950 text-zinc-100" : "min-h-screen bg-zinc-50 text-zinc-900";

  const topLabelClass = theme === "dark" ? "text-zinc-400" : "text-zinc-500";
  const subtitleClass = theme === "dark" ? "text-zinc-300" : "text-zinc-600";
  const titleClass =
    theme === "dark"
      ? "bg-gradient-to-r from-white via-zinc-100 to-zinc-300 bg-clip-text text-3xl font-semibold tracking-tight text-transparent sm:text-4xl"
      : "bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-500 bg-clip-text text-3xl font-semibold tracking-tight text-transparent sm:text-4xl";

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
            <Link
              href="/"
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
            </Link>
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
                  aria-label={t.menuOpenAria}
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
                      href="/"
                      className={menuItemClass}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {t.menuGoApp}
                    </Link>
                    <Link
                      href="/users"
                      className={menuItemClass}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {t.menuUsers}
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
          <p className={`text-center text-sm uppercase tracking-[0.2em] ${topLabelClass}`}>{t.headerTag}</p>
          <h1 className={`${titleClass} text-center`}>{t.headerTitle}</h1>
          <p className={`mx-auto max-w-2xl text-center text-sm ${subtitleClass}`}>
            {t.headerDescription}
          </p>
        </header>

        <section className={panelClass}>
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className={`text-xs font-semibold uppercase tracking-wider ${topLabelClass}`}>{t.sectionUsers}</h2>
            <button
              type="button"
              onClick={() => void loadLocalUsers()}
              disabled={isLoading}
              className={
                theme === "dark"
                  ? "inline-flex h-8 items-center rounded-full border border-white/20 bg-white/10 px-3 text-xs font-medium text-zinc-200 transition hover:bg-white/15 disabled:cursor-not-allowed disabled:opacity-60"
                  : "inline-flex h-8 items-center rounded-full border border-zinc-300 bg-white px-3 text-xs font-medium text-zinc-700 transition hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-60"
              }
            >
              {t.reloadList}
            </button>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-3">
            <input
              type="email"
              value={localUserEmail}
              onChange={(event) => setLocalUserEmail(event.target.value)}
              placeholder={t.emailPlaceholder}
              className={
                theme === "dark"
                  ? "rounded-lg border border-white/15 bg-zinc-900/70 px-3 py-2 text-sm text-zinc-100 outline-none ring-sky-400 transition focus:ring"
                  : "rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-800 outline-none ring-sky-500 transition focus:ring"
              }
            />
            <input
              type="password"
              value={localUserPassword}
              onChange={(event) => setLocalUserPassword(event.target.value)}
              placeholder={t.passwordPlaceholder}
              className={
                theme === "dark"
                  ? "rounded-lg border border-white/15 bg-zinc-900/70 px-3 py-2 text-sm text-zinc-100 outline-none ring-sky-400 transition focus:ring"
                  : "rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-800 outline-none ring-sky-500 transition focus:ring"
              }
            />
            <button
              type="button"
              onClick={() => void handleSaveLocalUser()}
              disabled={isLoading}
              className="inline-flex h-10 items-center justify-center rounded-lg bg-gradient-to-br from-sky-400 via-cyan-400 to-blue-500 px-4 text-sm font-semibold text-zinc-950 transition hover:from-sky-300 hover:to-blue-400 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {t.saveUser}
            </button>
          </div>

          {error ? (
            <p className="mt-3 rounded-lg border border-red-500/40 bg-red-500/10 px-3 py-2 text-sm text-red-300">
              {error}
            </p>
          ) : null}

          {message ? (
            <p className="mt-3 rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-3 py-2 text-sm text-emerald-300">
              {message}
            </p>
          ) : null}

          <div className={hintBoxClass}>
            {localUsers.length ? (
              <div className="space-y-2">
                {localUsers.map((email) => (
                  <div key={email} className="flex items-center justify-between gap-3">
                    <span className="truncate">{email}</span>
                    <button
                      type="button"
                      onClick={() => void handleDeleteLocalUser(email)}
                      disabled={isLoading}
                      className="inline-flex h-8 items-center rounded-lg border border-red-500/40 bg-red-500/10 px-3 text-xs font-medium text-red-300 transition hover:bg-red-500/20 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {t.deleteUser}
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <p>{t.emptyUsers}</p>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
