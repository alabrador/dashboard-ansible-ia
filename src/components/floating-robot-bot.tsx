"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Robot3DScene } from "@/components/robot-3d-scene";

type NewsItem = {
  title: string;
  link: string;
  source?: string;
  pubDate?: string;
};

export function FloatingRobotBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSmiling, setIsSmiling] = useState(false);
  const [headline, setHeadline] = useState<NewsItem | null>(null);
  const [isLoadingNews, setIsLoadingNews] = useState(false);
  const [newsError, setNewsError] = useState("");
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    if (typeof window === "undefined") {
      return "dark";
    }

    const savedTheme = window.localStorage.getItem("dashboard-theme");
    return savedTheme === "light" ? "light" : "dark";
  });
  const smileTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const onStorage = () => {
      const savedTheme = window.localStorage.getItem("dashboard-theme");
      if (savedTheme === "dark" || savedTheme === "light") {
        setTheme(savedTheme);
      }
    };

    window.addEventListener("storage", onStorage);
    const intervalId = window.setInterval(onStorage, 1000);

    return () => {
      window.removeEventListener("storage", onStorage);
      window.clearInterval(intervalId);
    };
  }, []);

  const bubbleClass = theme === "dark" ? "bg-zinc-900/95 text-zinc-100" : "bg-white/95 text-zinc-900";

  const loadNews = useCallback(async () => {
    setIsLoadingNews(true);
    setNewsError("");

    try {
      const response = await fetch("/api/news", { cache: "no-store" });
      const payload = (await response.json()) as { items?: NewsItem[]; error?: string };

      if (!response.ok || !payload.items?.length) {
        setNewsError(payload.error ?? "No pude traer noticias ahora.");
        setHeadline(null);
        return;
      }

      const randomIndex = Math.floor(Math.random() * payload.items.length);
      setHeadline(payload.items[randomIndex] ?? null);
    } catch {
      setNewsError("No pude conectar con el servicio de noticias.");
      setHeadline(null);
    } finally {
      setIsLoadingNews(false);
    }
  }, []);

  const handleRobotClick = () => {
    setIsOpen((current) => !current);
    setIsSmiling(true);

    if (smileTimeoutRef.current) {
      clearTimeout(smileTimeoutRef.current);
    }

    smileTimeoutRef.current = setTimeout(() => {
      setIsSmiling(false);
      smileTimeoutRef.current = null;
    }, 1400);
  };

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    let isMounted = true;
    let cycleTimeout: ReturnType<typeof setTimeout> | null = null;

    const runCycle = async () => {
      if (!isMounted) {
        return;
      }

      await loadNews();

      if (!isMounted) {
        return;
      }

      cycleTimeout = setTimeout(() => {
        void runCycle();
      }, 45000);
    };

    void runCycle();

    return () => {
      isMounted = false;
      if (cycleTimeout) {
        clearTimeout(cycleTimeout);
      }
    };
  }, [isOpen, loadNews]);

  useEffect(() => {
    return () => {
      if (smileTimeoutRef.current) {
        clearTimeout(smileTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="pointer-events-none fixed bottom-6 right-4 z-50 flex flex-col items-end sm:bottom-8 sm:right-5">
      {isOpen ? (
        <div className={`pointer-events-auto mb-3 w-[170px] rounded-xl px-2.5 py-2 text-[11px] shadow-[0_16px_32px_-18px_rgba(14,165,233,0.7)] sm:mb-4 sm:w-[190px] ${bubbleClass}`}>
          <p className="font-semibold">Asistente</p>
          <p className="mt-0.5 opacity-90">Hola pana 👋</p>

          <div className="mt-2">
            {isLoadingNews ? <p className="opacity-80">Buscando titulares...</p> : null}
            {!isLoadingNews && newsError ? <p className="opacity-80">{newsError}</p> : null}
            {!isLoadingNews && !newsError && headline ? (
              <a
                href={headline.link}
                target="_blank"
                rel="noreferrer"
                className="block rounded-lg bg-black/5 px-2 py-2 leading-snug transition hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10"
              >
                {headline.title}
              </a>
            ) : null}
          </div>
        </div>
      ) : null}

      <button
        type="button"
        onClick={handleRobotClick}
        aria-label={isOpen ? "Ocultar noticias" : "Mostrar noticias"}
        className="pointer-events-auto relative h-36 w-36 overflow-visible rounded-2xl bg-transparent transition-transform duration-150 [transform:translateZ(0)] sm:h-40 sm:w-40"
      >
        <span className="absolute -inset-3 rounded-full bg-cyan-400/20 blur-xl" />
        <span className="absolute -inset-3 overflow-visible rounded-2xl">
          <Robot3DScene lookX={0} lookY={0} theme={theme} isSmiling={isSmiling} />
        </span>
      </button>
    </div>
  );
}