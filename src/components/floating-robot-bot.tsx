"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Robot3DScene } from "@/components/robot-3d-scene";

type NewsItem = {
  title: string;
  link: string;
  source?: string;
  pubDate?: string;
};

type HealthSummaryPayload = {
  source: "mock";
  date: string;
  steps: number;
  restingHeartRate: number;
  sleepHours: number;
  standHours: number;
  message: string;
};

export function FloatingRobotBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSmiling, setIsSmiling] = useState(false);
  const [headline, setHeadline] = useState<NewsItem | null>(null);
  const [isLoadingNews, setIsLoadingNews] = useState(false);
  const [newsError, setNewsError] = useState("");
  const [weatherTip, setWeatherTip] = useState<string | null>(null);
  const [showWeatherTip, setShowWeatherTip] = useState(false);
  const [healthSummary, setHealthSummary] = useState<HealthSummaryPayload | null>(null);
  const [isLoadingHealth, setIsLoadingHealth] = useState(false);
  const [healthError, setHealthError] = useState("");
  const [showHealthView, setShowHealthView] = useState(true);
  const [isHealthViewInitialized, setIsHealthViewInitialized] = useState(false);
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

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const savedHealthView = window.localStorage.getItem("dashboard-health-view");
    if (savedHealthView === "hidden") {
      setShowHealthView(false);
    } else {
      setShowHealthView(true);
    }

    setIsHealthViewInitialized(true);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || !isHealthViewInitialized) {
      return;
    }

    window.localStorage.setItem("dashboard-health-view", showHealthView ? "visible" : "hidden");
  }, [isHealthViewInitialized, showHealthView]);

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

  const loadHealthSummary = useCallback(async () => {
    setIsLoadingHealth(true);
    setHealthError("");

    try {
      const response = await fetch("/api/health-summary", { cache: "no-store" });
      const payload = (await response.json()) as Partial<HealthSummaryPayload> & { error?: string };

      if (!response.ok || typeof payload.steps !== "number") {
        setHealthSummary(null);
        setHealthError(payload.error ?? "No pude obtener datos de salud.");
        return;
      }

      setHealthSummary(payload as HealthSummaryPayload);
    } catch {
      setHealthSummary(null);
      setHealthError("No pude conectar con el resumen de salud.");
    } finally {
      setIsLoadingHealth(false);
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
    void loadHealthSummary();
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

    const healthRefreshInterval = window.setInterval(() => {
      void loadHealthSummary();
    }, 300000);

    return () => {
      window.clearInterval(rotateInterval);
      window.clearInterval(refreshInterval);
      window.clearInterval(weatherRefreshInterval);
      window.clearInterval(healthRefreshInterval);
    };
  }, [isOpen, loadHealthSummary, loadNews, loadWeather, pickHeadline]);

  useEffect(() => {
    return () => {
      if (smileTimeoutRef.current) {
        clearTimeout(smileTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="pointer-events-none fixed bottom-6 right-4 z-50 hidden flex-col items-end sm:bottom-8 sm:right-5 sm:flex">
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
            <div className="mt-2 rounded-lg bg-black/5 px-2 py-1.5 dark:bg-white/5">
              <div className="flex items-center justify-between gap-2">
                <p className="font-semibold opacity-90">Salud hoy</p>
                <button
                  type="button"
                  onClick={() => setShowHealthView((current) => !current)}
                  className="rounded-md border border-white/20 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide opacity-90 transition hover:opacity-100 dark:border-white/15"
                >
                  {showHealthView ? "Ocultar" : "Ver"}
                </button>
              </div>
              {showHealthView ? (
                <>
                  {isLoadingHealth ? <p className="mt-1 opacity-80">Cargando resumen...</p> : null}
                  {!isLoadingHealth && healthError ? <p className="mt-1 opacity-80">{healthError}</p> : null}
                  {!isLoadingHealth && !healthError && healthSummary ? (
                    <div className="mt-1 space-y-0.5 opacity-90">
                      <p>{healthSummary.message}</p>
                      <p>Pasos: {healthSummary.steps.toLocaleString("es-ES")}</p>
                      <p>FC reposo: {healthSummary.restingHeartRate} lpm</p>
                      <p>Sueño: {healthSummary.sleepHours} h</p>
                    </div>
                  ) : null}
                </>
              ) : (
                <p className="mt-1 opacity-80">Vista de salud oculta.</p>
              )}
            </div>
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