import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getSessionCookieName, verifySessionToken } from "@/lib/auth/session";
import { readStoredHealthSummary, writeStoredHealthSummary, type StoredHealthSummary } from "@/lib/health/summary-store";

type HealthSummaryResponse = {
  source: "mock" | "shortcut";
  date: string;
  steps: number;
  restingHeartRate: number;
  sleepHours: number;
  standHours: number;
  message: string;
};

function parseIntegerEnv(name: string, fallback: number): number {
  const raw = process.env[name]?.trim();
  if (!raw) {
    return fallback;
  }

  const parsed = Number.parseInt(raw, 10);
  if (!Number.isFinite(parsed)) {
    return fallback;
  }

  return parsed;
}

function parseFloatEnv(name: string, fallback: number): number {
  const raw = process.env[name]?.trim();
  if (!raw) {
    return fallback;
  }

  const parsed = Number.parseFloat(raw);
  if (!Number.isFinite(parsed)) {
    return fallback;
  }

  return parsed;
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

function buildMessage(steps: number, restingHeartRate: number, sleepHours: number, standHours: number): string {
  const stepStatus = steps >= 8000 ? "buen nivel de actividad" : "actividad baja";
  const sleepStatus = sleepHours >= 7 ? "descanso adecuado" : "podrías dormir un poco más";
  const heartStatus = restingHeartRate <= 70 ? "pulso en rango cómodo" : "pulso algo elevado";

  return `Hoy: ${stepStatus}, ${sleepStatus} y ${heartStatus}.`;
}

function buildDefaultSummary(): HealthSummaryResponse {
  const steps = clamp(parseIntegerEnv("HEALTH_STEPS", 7350), 0, 100000);
  const restingHeartRate = clamp(parseIntegerEnv("HEALTH_RESTING_HR", 64), 30, 220);
  const sleepHours = clamp(parseFloatEnv("HEALTH_SLEEP_HOURS", 7.1), 0, 24);
  const standHours = clamp(parseIntegerEnv("HEALTH_STAND_HOURS", 9), 0, 24);

  return {
    source: "mock",
    date: new Date().toISOString(),
    steps,
    restingHeartRate,
    sleepHours: Number(sleepHours.toFixed(1)),
    standHours,
    message: buildMessage(steps, restingHeartRate, sleepHours, standHours),
  };
}

function getProvidedIngestToken(request: Request): string {
  const rawHeaderToken = request.headers.get("x-health-ingest-token")?.trim();
  if (rawHeaderToken) {
    return rawHeaderToken;
  }

  const authorization = request.headers.get("authorization")?.trim() ?? "";
  const bearerPrefix = "bearer ";
  if (authorization.toLowerCase().startsWith(bearerPrefix)) {
    return authorization.slice(bearerPrefix.length).trim();
  }

  return "";
}

function toResponse(summary: StoredHealthSummary | HealthSummaryResponse): HealthSummaryResponse {
  return {
    source: summary.source,
    date: summary.date,
    steps: summary.steps,
    restingHeartRate: summary.restingHeartRate,
    sleepHours: summary.sleepHours,
    standHours: summary.standHours,
    message: summary.message,
  };
}

export async function GET() {
  const cookieStore = await cookies();
  const token = cookieStore.get(getSessionCookieName())?.value;

  if (!token) {
    return NextResponse.json({ error: "No autenticado." }, { status: 401 });
  }

  const session = await verifySessionToken(token);
  if (!session) {
    return NextResponse.json({ error: "Sesión inválida." }, { status: 401 });
  }

  try {
    const stored = await readStoredHealthSummary();
    if (stored) {
      return NextResponse.json(toResponse(stored));
    }
  } catch {
    return NextResponse.json({ error: "No se pudo leer el resumen de salud." }, { status: 500 });
  }

  return NextResponse.json(buildDefaultSummary());
}

type HealthSummaryBody = {
  steps?: number;
  restingHeartRate?: number;
  sleepHours?: number;
  standHours?: number;
  message?: string;
};

export async function POST(request: Request) {
  const expectedToken = process.env.HEALTH_INGEST_TOKEN?.trim() ?? "";
  if (!expectedToken) {
    return NextResponse.json(
      { error: "Falta HEALTH_INGEST_TOKEN para aceptar datos externos de salud." },
      { status: 500 },
    );
  }

  const providedToken = getProvidedIngestToken(request);
  if (!providedToken || providedToken !== expectedToken) {
    return NextResponse.json({ error: "Token de ingesta inválido." }, { status: 401 });
  }

  const body = (await request.json()) as HealthSummaryBody;

  const fallback = buildDefaultSummary();
  const current = (await readStoredHealthSummary()) ?? fallback;

  const nextSteps = clamp(
    typeof body.steps === "number" ? Math.round(body.steps) : current.steps,
    0,
    100000,
  );

  const nextRestingHeartRate = clamp(
    typeof body.restingHeartRate === "number" ? Math.round(body.restingHeartRate) : current.restingHeartRate,
    30,
    220,
  );

  const nextSleepHours = clamp(
    typeof body.sleepHours === "number" ? body.sleepHours : current.sleepHours,
    0,
    24,
  );

  const nextStandHours = clamp(
    typeof body.standHours === "number" ? Math.round(body.standHours) : current.standHours,
    0,
    24,
  );

  const nextMessage = typeof body.message === "string" && body.message.trim()
    ? body.message.trim()
    : buildMessage(nextSteps, nextRestingHeartRate, nextSleepHours, nextStandHours);

  const nextSummary: StoredHealthSummary = {
    source: "shortcut",
    date: new Date().toISOString(),
    steps: nextSteps,
    restingHeartRate: nextRestingHeartRate,
    sleepHours: Number(nextSleepHours.toFixed(1)),
    standHours: nextStandHours,
    message: nextMessage,
  };

  try {
    await writeStoredHealthSummary(nextSummary);
  } catch {
    return NextResponse.json({ error: "No se pudo guardar el resumen de salud." }, { status: 500 });
  }

  return NextResponse.json({ ok: true, summary: toResponse(nextSummary) });
}
