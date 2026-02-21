"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { detectBrowserLanguage, isSupportedLanguage, languageOptions, type Language } from "@/lang/core";
import { usersTranslations } from "@/lang/users";
import type { UserRole } from "@/lib/auth/types";

type LocalUsersResponse = {
  users?: Array<{
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    role: UserRole;
  }>;
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
  const [isSettingsMenuOpen, setIsSettingsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userDisplayName, setUserDisplayName] = useState("");
  const [userRole, setUserRole] = useState<UserRole | "">("");
  const [isSessionReady, setIsSessionReady] = useState(false);
  const settingsMenuRef = useRef<HTMLDivElement | null>(null);
  const userMenuRef = useRef<HTMLDivElement | null>(null);
  const [localUsers, setLocalUsers] = useState<NonNullable<LocalUsersResponse["users"]>>([]);
  const [editingUserIdentifier, setEditingUserIdentifier] = useState("");
  const [localUsername, setLocalUsername] = useState("");
  const [localFirstName, setLocalFirstName] = useState("");
  const [localLastName, setLocalLastName] = useState("");
  const [localRole, setLocalRole] = useState<UserRole>("tecnico");
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
    const loadSession = async () => {
      try {
        const response = await fetch("/api/auth/session", {
          method: "GET",
          cache: "no-store",
        });

        if (!response.ok) {
          setIsSessionReady(true);
          router.replace("/");
          return;
        }

        const payload = (await response.json()) as AuthSessionResponse;
        const displayName = payload.user?.displayName?.trim();
        const email = payload.user?.email?.trim();
        const role = payload.user?.role;

        if (role !== "administrativo") {
          setIsSessionReady(true);
          router.replace("/");
          return;
        }

        setUserRole(role);
        if (displayName) {
          setUserDisplayName(displayName);
        }
        if (email) {
          setUserEmail(email);
        }
        setIsSessionReady(true);
      } catch {
        setUserEmail("");
        setUserDisplayName("");
        setUserRole("");
        setIsSessionReady(true);
      }
    };

    void loadSession();
  }, [router]);

  const loadLocalUsers = useCallback(async () => {
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
  }, [t.localUsersLoadError]);

  useEffect(() => {
    void loadLocalUsers();
  }, [loadLocalUsers]);

  const resetUserForm = () => {
    setEditingUserIdentifier("");
    setLocalUsername("");
    setLocalFirstName("");
    setLocalLastName("");
    setLocalRole("tecnico");
    setLocalUserEmail("");
    setLocalUserPassword("");
  };

  const handleSaveLocalUser = async () => {
    if (
      !localUsername.trim() ||
      !localFirstName.trim() ||
      !localLastName.trim() ||
      !localUserEmail.trim()
    ) {
      setError(t.requiredCredentials);
      return;
    }

    if (!editingUserIdentifier && !localUserPassword.trim()) {
      setError(t.requiredCredentials);
      return;
    }

    setIsLoading(true);
    setError("");
    setMessage("");

    try {
      const response = await fetch("/api/auth/local-users", {
        method: editingUserIdentifier ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          identifier: editingUserIdentifier || undefined,
          username: localUsername,
          firstName: localFirstName,
          lastName: localLastName,
          role: localRole,
          email: localUserEmail,
          password: localUserPassword.trim() ? localUserPassword : undefined,
        }),
      });

      const payload = (await response.json()) as { error?: string };
      if (!response.ok) {
        throw new Error(payload.error ?? t.localUsersSaveError);
      }

      setMessage(editingUserIdentifier ? t.localUsersSaved : t.localUsersSaved);
      resetUserForm();
      await loadLocalUsers();
    } catch (saveError) {
      setError(formatError(saveError, t.localUsersSaveError));
    } finally {
      setIsLoading(false);
    }
  };

  const handleEditLocalUser = (user: NonNullable<LocalUsersResponse["users"]>[number]) => {
    setEditingUserIdentifier(user.username);
    setLocalUsername(user.username);
    setLocalFirstName(user.firstName);
    setLocalLastName(user.lastName);
    setLocalRole(user.role);
    setLocalUserEmail(user.email);
    setLocalUserPassword("");
    setError("");
    setMessage("");
  };

  const handleDeleteLocalUser = async (identifier: string) => {
    setIsLoading(true);
    setError("");
    setMessage("");

    try {
      const response = await fetch("/api/auth/local-users", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ identifier }),
      });

      const payload = (await response.json()) as { error?: string };
      if (!response.ok) {
        throw new Error(payload.error ?? t.localUsersDeleteError);
      }

      setMessage(t.localUsersDeleted);
      if (editingUserIdentifier === identifier) {
        resetUserForm();
      }
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
      ? "inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-zinc-100 transition hover:bg-white/15 sm:h-10 sm:w-10"
      : "inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-300 bg-white text-zinc-800 transition hover:bg-zinc-100 sm:h-10 sm:w-10";

  const iconButtonClass =
    theme === "dark"
      ? "inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-zinc-200 transition hover:bg-white/15 sm:h-10 sm:w-10"
      : "inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-300 bg-white text-zinc-700 transition hover:bg-zinc-100 sm:h-10 sm:w-10";

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

  const cycleLanguage = () => {
    const currentIndex = languageOptions.findIndex((option) => option.code === language);
    const nextIndex = currentIndex >= 0 ? (currentIndex + 1) % languageOptions.length : 0;
    const nextLanguage = languageOptions[nextIndex]?.code;
    if (nextLanguage && isSupportedLanguage(nextLanguage)) {
      setLanguage(nextLanguage);
    }
  };

  if (!isThemeInitialized || !isSessionReady || !isAdmin) {
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

      <header className={`sticky top-0 z-30 border-b backdrop-blur ${theme === "dark" ? "border-white/10 bg-zinc-950/80" : "border-zinc-200 bg-zinc-50/90"}`}>
        <div className="mx-auto w-full max-w-4xl space-y-2 px-3 py-2 sm:space-y-3 sm:px-6 sm:py-3">
          <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-3">
            <Link
              href="/"
              className={
                theme === "dark"
                  ? "inline-flex h-8 items-center gap-2 rounded-full border border-white/20 bg-white/5 px-2.5 text-xs font-semibold tracking-wider text-zinc-200"
                  : "inline-flex h-8 items-center gap-2 rounded-full border border-zinc-300 bg-white px-2.5 text-xs font-semibold tracking-wider text-zinc-700"
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
              <span className="hidden sm:inline">{t.headerTag}</span>
            </Link>
            <div className="flex flex-wrap items-center justify-end gap-1.5 sm:gap-2">
              <button
                type="button"
                onClick={cycleLanguage}
                className={iconButtonClass}
                aria-label={t.languageSelectAria}
                title={languageOptions.find((option) => option.code === language)?.label ?? t.languageSelectAria}
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
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20" />
                  <path d="M12 2a15 15 0 0 1 0 20" />
                  <path d="M12 2a15 15 0 0 0 0 20" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
                className={iconButtonClass}
                aria-label={t.themeToggleAria}
              >
                {theme === "dark" ? (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true"><circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="M4.93 4.93l1.41 1.41" /><path d="M17.66 17.66l1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="M6.34 17.66l-1.41 1.41" /><path d="M19.07 4.93l-1.41 1.41" /></svg>
                )}
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
                      href="/"
                      className={menuItemClass}
                      onClick={() => setIsSettingsMenuOpen(false)}
                    >
                      {t.menuGoApp}
                    </Link>
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
          <p className={`hidden text-center text-sm uppercase tracking-[0.2em] sm:block ${topLabelClass}`}>{t.headerTag}</p>
          <h1 className={`${titleClass} text-center`}>{t.headerTitle}</h1>
          <p className={`mx-auto max-w-2xl text-center text-xs sm:text-sm ${subtitleClass}`}>
            {t.headerDescription}
          </p>
        </div>
      </header>

      <div className="mx-auto flex min-h-[100dvh] w-full max-w-4xl flex-col justify-start gap-2 px-3 pb-2 pt-2 sm:min-h-screen sm:justify-start sm:gap-6 sm:px-6 sm:pb-10 sm:pt-6">

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

          <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-7">
            <input
              type="text"
              value={localUsername}
              onChange={(event) => setLocalUsername(event.target.value)}
              placeholder={t.usernamePlaceholder}
              className={
                theme === "dark"
                  ? "rounded-lg border border-white/15 bg-zinc-900/70 px-3 py-2 text-sm text-zinc-100 outline-none ring-sky-400 transition focus:ring"
                  : "rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-800 outline-none ring-sky-500 transition focus:ring"
              }
            />
            <input
              type="text"
              value={localFirstName}
              onChange={(event) => setLocalFirstName(event.target.value)}
              placeholder={t.firstNamePlaceholder}
              className={
                theme === "dark"
                  ? "rounded-lg border border-white/15 bg-zinc-900/70 px-3 py-2 text-sm text-zinc-100 outline-none ring-sky-400 transition focus:ring"
                  : "rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-800 outline-none ring-sky-500 transition focus:ring"
              }
            />
            <input
              type="text"
              value={localLastName}
              onChange={(event) => setLocalLastName(event.target.value)}
              placeholder={t.lastNamePlaceholder}
              className={
                theme === "dark"
                  ? "rounded-lg border border-white/15 bg-zinc-900/70 px-3 py-2 text-sm text-zinc-100 outline-none ring-sky-400 transition focus:ring"
                  : "rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-800 outline-none ring-sky-500 transition focus:ring"
              }
            />
            <select
              value={localRole}
              onChange={(event) => {
                const nextRole = event.target.value;
                if (nextRole === "administrativo" || nextRole === "tecnico") {
                  setLocalRole(nextRole);
                }
              }}
              className={
                theme === "dark"
                  ? "rounded-lg border border-white/15 bg-zinc-900/70 px-3 py-2 text-sm text-zinc-100 outline-none ring-sky-400 transition focus:ring"
                  : "rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-800 outline-none ring-sky-500 transition focus:ring"
              }
              aria-label={t.roleLabel}
            >
              <option value="administrativo">{t.roleAdmin}</option>
              <option value="tecnico">{t.roleTech}</option>
            </select>
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
              {editingUserIdentifier ? t.updateUser : t.saveUser}
            </button>
            {editingUserIdentifier ? (
              <button
                type="button"
                onClick={resetUserForm}
                disabled={isLoading}
                className={
                  theme === "dark"
                    ? "inline-flex h-10 items-center justify-center rounded-lg border border-white/20 bg-white/10 px-4 text-sm font-medium text-zinc-100 transition hover:bg-white/15 disabled:cursor-not-allowed disabled:opacity-60"
                    : "inline-flex h-10 items-center justify-center rounded-lg border border-zinc-300 bg-white px-4 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-60"
                }
              >
                {t.cancelEdit}
              </button>
            ) : null}
          </div>

          {error ? (
            <p className="mt-2 rounded-lg border border-red-500/40 bg-red-500/10 px-3 py-2 text-xs text-red-300 sm:mt-3 sm:text-sm">
              {error}
            </p>
          ) : null}

          {message ? (
            <p className="mt-2 rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-3 py-2 text-xs text-emerald-300 sm:mt-3 sm:text-sm">
              {message}
            </p>
          ) : null}

          <div className={hintBoxClass}>
            {localUsers.length ? (
              <div className="space-y-2">
                {localUsers.map((localUser) => (
                  <div key={localUser.username} className="flex items-center justify-between gap-3">
                    <div className="min-w-0">
                      <p className="truncate font-medium">
                        {localUser.firstName} {localUser.lastName} (@{localUser.username}) · {localUser.role === "administrativo" ? t.roleAdmin : t.roleTech}
                      </p>
                      <p className="truncate text-[11px] opacity-80">{localUser.email}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => handleEditLocalUser(localUser)}
                        disabled={isLoading}
                        className={
                          theme === "dark"
                            ? "inline-flex h-8 items-center rounded-lg border border-white/20 bg-white/10 px-3 text-xs font-medium text-zinc-100 transition hover:bg-white/15 disabled:cursor-not-allowed disabled:opacity-60"
                            : "inline-flex h-8 items-center rounded-lg border border-zinc-300 bg-white px-3 text-xs font-medium text-zinc-700 transition hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-60"
                        }
                      >
                        {t.editUser}
                      </button>
                      <button
                        type="button"
                        onClick={() => void handleDeleteLocalUser(localUser.username)}
                        disabled={isLoading}
                        className="inline-flex h-8 items-center rounded-lg border border-red-500/40 bg-red-500/10 px-3 text-xs font-medium text-red-300 transition hover:bg-red-500/20 disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        {t.deleteUser}
                      </button>
                    </div>
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
