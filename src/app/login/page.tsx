"use client";

import Image from "next/image";
import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type LoginResponse = {
  ok?: boolean;
  error?: string;
};

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [nextPath, setNextPath] = useState("/");
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [isThemeInitialized, setIsThemeInitialized] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const params = new URLSearchParams(window.location.search);
    const nextParam = params.get("next");

    if (!nextParam) {
      return;
    }

    if (!nextParam.startsWith("/") || nextParam.startsWith("//")) {
      setNextPath("/");
      return;
    }

    setNextPath(nextParam);
  }, []);

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

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const payload = (await response.json()) as LoginResponse;

      if (!response.ok || !payload.ok) {
        setError(payload.error ?? "No se pudo iniciar sesión.");
        return;
      }

      router.replace(nextPath);
      router.refresh();
    } catch {
      setError("No se pudo conectar con el servicio de autenticación.");
    } finally {
      setIsLoading(false);
    }
  };

  const mainClass =
    theme === "dark"
      ? "min-h-screen bg-zinc-950 px-6 py-10 text-zinc-100"
      : "min-h-screen bg-zinc-50 px-6 py-10 text-zinc-900";

  const cardClass =
    theme === "dark"
      ? "w-full rounded-2xl border border-white/15 bg-white/5 p-6 shadow-[0_10px_28px_-18px_rgba(56,189,248,0.45)] backdrop-blur-2xl"
      : "w-full rounded-2xl border border-zinc-200 bg-white p-6 shadow-[0_10px_28px_-18px_rgba(15,23,42,0.25)]";

  const topLabelClass = theme === "dark" ? "text-zinc-400" : "text-zinc-500";
  const titleClass = theme === "dark" ? "text-white" : "text-zinc-900";
  const fieldLabelClass = theme === "dark" ? "text-zinc-300" : "text-zinc-600";

  const inputClass =
    theme === "dark"
      ? "w-full rounded-lg border border-white/15 bg-zinc-900/70 px-3 py-2 text-sm text-zinc-100 outline-none ring-sky-400 transition focus:ring"
      : "w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-800 outline-none ring-sky-500 transition focus:ring";

  if (!isThemeInitialized) {
    return null;
  }

  return (
    <main className={mainClass}>
      <div className="mx-auto flex min-h-[80vh] w-full max-w-md items-center">
        <section className={cardClass}>
          <div className="flex items-center justify-between gap-3">
            <div
              className={
                theme === "dark"
                  ? "inline-flex h-8 items-center rounded-full border border-white/20 bg-white/5 px-2 text-xs font-semibold tracking-wider text-zinc-200"
                  : "inline-flex h-8 items-center rounded-full border border-zinc-300 bg-white px-2 text-xs font-semibold tracking-wider text-zinc-700"
              }
            >
              <Image
                src="/logo.png"
                alt="Logo"
                width={28}
                height={28}
                className="h-5 w-auto object-contain"
                priority
              />
            </div>
            <button
              type="button"
              onClick={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
              className={
                theme === "dark"
                  ? "inline-flex h-10 items-center rounded-full border border-white/20 bg-white/10 px-4 text-xs font-medium text-zinc-200 transition hover:bg-white/15"
                  : "inline-flex h-10 items-center rounded-full border border-zinc-300 bg-white px-4 text-xs font-medium text-zinc-700 transition hover:bg-zinc-100"
              }
              aria-label="Cambiar tema"
            >
              {theme === "dark" ? "☀️ Claro" : "🌙 Oscuro"}
            </button>
          </div>
          <p className={`mt-3 text-xs uppercase tracking-[0.2em] ${topLabelClass}`}>Dashboard Ansible IA</p>
          <h1 className={`mt-2 text-2xl font-semibold tracking-tight ${titleClass}`}>Iniciar sesión</h1>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <label className="block">
              <span className={`mb-1 block text-sm ${fieldLabelClass}`}>Correo</span>
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                autoComplete="email"
                className={inputClass}
                placeholder="usuario@empresa.com"
              />
            </label>

            <label className="block">
              <span className={`mb-1 block text-sm ${fieldLabelClass}`}>Contraseña</span>
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
                autoComplete="current-password"
                className={inputClass}
                placeholder="••••••••"
              />
            </label>

            {error ? (
              <p className="rounded-lg border border-red-500/40 bg-red-500/10 px-3 py-2 text-sm text-red-300">
                {error}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={isLoading}
              className="inline-flex h-10 w-full items-center justify-center rounded-lg bg-gradient-to-br from-sky-400 via-cyan-400 to-blue-500 px-4 text-sm font-semibold text-zinc-950 transition hover:from-sky-300 hover:to-blue-400 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isLoading ? "Validando..." : "Entrar"}
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}