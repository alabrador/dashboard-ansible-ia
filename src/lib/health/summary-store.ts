import { promises as fs } from "node:fs";
import { join } from "node:path";
import { kv } from "@vercel/kv";

const STORE_DIR = join(process.cwd(), "uploads");
const STORE_PATH = join(STORE_DIR, "health-summary.json");
const KV_HEALTH_KEY = "dashboard:health-summary";

export type StoredHealthSummary = {
  source: "mock" | "shortcut";
  date: string;
  steps: number;
  restingHeartRate: number;
  sleepHours: number;
  standHours: number;
  message: string;
};

function isVercelKvConfigured(): boolean {
  return Boolean(process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN);
}

function isValidHealthSummary(payload: unknown): payload is StoredHealthSummary {
  if (!payload || typeof payload !== "object") {
    return false;
  }

  const item = payload as Partial<StoredHealthSummary>;

  return (
    (item.source === "mock" || item.source === "shortcut")
    && typeof item.date === "string"
    && typeof item.steps === "number"
    && typeof item.restingHeartRate === "number"
    && typeof item.sleepHours === "number"
    && typeof item.standHours === "number"
    && typeof item.message === "string"
  );
}

async function readFromKv(): Promise<StoredHealthSummary | null> {
  const payload = await kv.get<unknown>(KV_HEALTH_KEY);
  if (!isValidHealthSummary(payload)) {
    return null;
  }

  return payload;
}

async function writeToKv(summary: StoredHealthSummary): Promise<void> {
  await kv.set(KV_HEALTH_KEY, summary);
}

async function ensureStoreFile(): Promise<void> {
  await fs.mkdir(STORE_DIR, { recursive: true });

  try {
    await fs.access(STORE_PATH);
  } catch {
    await fs.writeFile(STORE_PATH, "", "utf8");
  }
}

async function readFromFile(): Promise<StoredHealthSummary | null> {
  await ensureStoreFile();
  const raw = await fs.readFile(STORE_PATH, "utf8");

  if (!raw.trim()) {
    return null;
  }

  try {
    const payload = JSON.parse(raw) as unknown;
    if (!isValidHealthSummary(payload)) {
      return null;
    }

    return payload;
  } catch {
    return null;
  }
}

async function writeToFile(summary: StoredHealthSummary): Promise<void> {
  await ensureStoreFile();
  await fs.writeFile(STORE_PATH, JSON.stringify(summary, null, 2), "utf8");
}

export async function readStoredHealthSummary(): Promise<StoredHealthSummary | null> {
  if (isVercelKvConfigured()) {
    return readFromKv();
  }

  return readFromFile();
}

export async function writeStoredHealthSummary(summary: StoredHealthSummary): Promise<void> {
  if (isVercelKvConfigured()) {
    await writeToKv(summary);
    return;
  }

  await writeToFile(summary);
}
