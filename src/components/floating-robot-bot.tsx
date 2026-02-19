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
  const [weatherTip, setWeatherTip] = useState<string | null>(null);
  const [showWeatherTip, setShowWeatherTip] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    if (typeof window === "undefined") {
      return "dark";
    }

    const savedTheme = window.localStorage.getItem("dashboard-theme");
    return savedTheme === "light" ? "light" : "dark";
  });
  const smileTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const recentHeadlineKeysRef = useRef<string[]>([]);
  const newsItemsRef = useRef<NewsItem[]>([]);

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

  const pickHeadline = useCallback((items: NewsItem[], currentLink?: string) => {
    if (!items.length) {
      return null;
    }

    const recentKeys = recentHeadlineKeysRef.current;
    const availableItems = items.filter((item) => !recentKeys.includes(item.link) && item.link !== currentLink);
    const pool = availableItems.length > 0 ? availableItems : items.filter((item) => item.link !== currentLink);
    const finalPool = pool.length > 0 ? pool : items;
    const randomIndex = Math.floor(Math.random() * finalPool.length);
    const selectedItem = finalPool[randomIndex] ?? null;

    if (selectedItem) {
      const nextRecentKeys = [...recentKeys, selectedItem.link];
      const maxRemembered = Math.min(items.length, 12);
      recentHeadlineKeysRef.current = nextRecentKeys.slice(-maxRemembered);
    }

    return selectedItem;
  }, []);

  const loadNews = useCallback(async () => {
    setIsLoadingNews(true);
    setNewsError("");

    try {
      const response = await fetch("/api/news", { cache: "no-store" });
      const payload = (await response.json()) as { items?: NewsItem[]; error?: string };

      if (!response.ok || !payload.items?.length) {
        setNewsError(payload.error ?? "No pude traer noticias ahora.");
        newsItemsRef.current = [];
        setHeadline(null);
        return;
      }

      const items = payload.items;
      newsItemsRef.current = items;
      setHeadline((current) => pickHeadline(items, current?.link));
    } catch {
      setNewsError("No pude conectar con el servicio de noticias.");
      newsItemsRef.current = [];
      setHeadline(null);
    } finally {
      setIsLoadingNews(false);
    }
  }, [pickHeadline]);

  const loadWeather = useCallback(async () => {
    try {
      const response = await fetch("/api/weather", { cache: "no-store" });
      const payload = (await response.json()) as { tip?: string };

      if (!response.ok || !payload.tip) {
        setWeatherTip(null);
        return;
      }

      setWeatherTip(payload.tip);
    } catch {
      setWeatherTip(null);
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

    void loadNews();
    void loadWeather();
    setShowWeatherTip(Math.random() < 0.45);

    const rotateInterval = window.setInterval(() => {
      if (!newsItemsRef.current.length) {
        return;
      }

      setHeadline((current) => pickHeadline(newsItemsRef.current, current?.link));
      setShowWeatherTip(Math.random() < 0.45);
    }, 12000);

    const refreshInterval = window.setInterval(() => {
      void loadNews();
    }, 90000);

    const weatherRefreshInterval = window.setInterval(() => {
      void loadWeather();
    }, 1800000);

    return () => {
      window.clearInterval(rotateInterval);
      window.clearInterval(refreshInterval);
      window.clearInterval(weatherRefreshInterval);
    };
  }, [isOpen, loadNews, loadWeather, pickHeadline]);

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
            {!isLoadingNews && !newsError && weatherTip && showWeatherTip ? (
              <p className="mt-2 rounded-lg bg-black/5 px-2 py-1.5 leading-snug opacity-90 dark:bg-white/5">{weatherTip}</p>
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