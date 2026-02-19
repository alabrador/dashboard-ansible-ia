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
  const [isOpen, setIsOpen] = useState(true);
  const [isSmiling, setIsSmiling] = useState(false);
  const [headline, setHeadline] = useState<NewsItem | null>(null);
  const [isLoadingNews, setIsLoadingNews] = useState(false);
  const [newsError, setNewsError] = useState("");
  const [cursorTilt, setCursorTilt] = useState({ x: 0, y: 0 });
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

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const handleMouseMove = (event: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const normalizedX = (event.clientX - centerX) / centerX;
      const normalizedY = (event.clientY - centerY) / centerY;

      setCursorTilt({
        x: Math.max(-1, Math.min(1, normalizedX)),
        y: Math.max(-1, Math.min(1, normalizedY)),
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const bubbleClass =
    theme === "dark"
      ? "bg-zinc-900/95 text-zinc-100"
      : "bg-white text-zinc-900";

  const robotTransform = {
    transform: `translate3d(${cursorTilt.x * 2}px, ${cursorTilt.y * 1.6}px, 0)`,
  };

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
    return () => {
      if (smileTimeoutRef.current) {
        clearTimeout(smileTimeoutRef.current);
      }
    };
  }, []);

  const loadNews = useCallback(async () => {
    setIsLoadingNews(true);
    setNewsError("");

    try {
      const response = await fetch("/api/news");
      const payload = (await response.json()) as { items?: NewsItem[]; error?: string };

      if (!response.ok || !payload.items) {
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
      }, 30000);
    };

    void runCycle();

    return () => {
      isMounted = false;
      if (cycleTimeout) {
        clearTimeout(cycleTimeout);
      }
    };
  }, [isOpen, loadNews]);

  return (
    <div className="pointer-events-none fixed bottom-2 right-2 z-50 flex max-w-[260px] flex-col items-end gap-1.5 sm:bottom-3 sm:right-3 sm:max-w-[280px]">
      {isOpen ? (
        <div className={`pointer-events-auto w-[220px] rounded-xl px-2.5 py-2 text-[11px] shadow-[0_14px_28px_-20px_rgba(14,165,233,0.7)] sm:w-[240px] ${bubbleClass}`}>
          <p className="font-semibold">Asistente</p>
          <p className="mt-0.5 opacity-90">Hola pana 👋</p>

          <div className="mt-1.5 space-y-1">
            {isLoadingNews ? <p className="opacity-80">Buscando titulares...</p> : null}

            {!isLoadingNews && newsError ? <p className="opacity-80">{newsError}</p> : null}

            {!isLoadingNews && !newsError && headline ? (
              <a
                href={headline.link}
                target="_blank"
                rel="noreferrer"
                className="block rounded-lg bg-black/5 px-2 py-1.5 leading-snug transition hover:bg-black/10"
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
        aria-label="Abrir asistente"
        className="pointer-events-auto relative h-16 w-16 rounded-2xl bg-transparent transition duration-150 hover:scale-[1.03] active:scale-95 sm:h-20 sm:w-20"
        style={robotTransform}
      >
        <span className="absolute -inset-2 rounded-full bg-cyan-400/20 blur-xl" />
        <span className="absolute -inset-1 overflow-visible rounded-2xl">
          <Robot3DScene lookX={cursorTilt.x} lookY={cursorTilt.y} theme={theme} isSmiling={isSmiling} />
        </span>
      </button>
    </div>
  );
}