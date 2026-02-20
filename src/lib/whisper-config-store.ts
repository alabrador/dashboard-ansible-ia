import { promises as fs } from "node:fs";
import { join } from "node:path";
import { kv } from "@vercel/kv";

const STORE_DIR = join(process.cwd(), "uploads");
const STORE_PATH = join(STORE_DIR, "whisper-config.json");
const KV_WHISPER_CONFIG_KEY = "dashboard:whisper-config";

export type StoredWhisperConfig = {
  baseUrl: string;
};

type RawStoredWhisperConfig = {
  baseUrl?: string;
};

function isVercelKvConfigured(): boolean {
  return Boolean(process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN);
}

export function sanitizeWhisperBaseUrl(value: string): string | null {
  const raw = value.trim();
  if (!raw) {
    return null;
  }

  let candidate = raw;

  if (/^https?:[^/]/i.test(candidate)) {
    candidate = candidate.replace(/^https?:/i, (match) => `${match}//`);
  }

  if (!/^https?:\/\//i.test(candidate)) {
    candidate = `http://${candidate}`;
  }

  let parsed: URL;
  try {
    parsed = new URL(candidate);
  } catch {
    return null;
  }

  if (!/^https?:$/i.test(parsed.protocol)) {
    return null;
  }

  const normalizedPath = parsed.pathname.replace(/\/+$/, "").replace(/\/transcribe$/i, "");
  const normalized = `${parsed.origin}${normalizedPath}`;
  return normalized.replace(/\/+$/, "");
}

export function buildWhisperTranscribeUrl(baseUrl: string): string | null {
  const normalized = sanitizeWhisperBaseUrl(baseUrl);
  if (!normalized) {
    return null;
  }

  return `${normalized}/transcribe`;
}

function normalizeConfig(config: RawStoredWhisperConfig | null | undefined): StoredWhisperConfig | null {
  if (!config) {
    return null;
  }

  const candidate = typeof config.baseUrl === "string" ? config.baseUrl : "";
  const baseUrl = sanitizeWhisperBaseUrl(candidate);
  if (!baseUrl) {
    return null;
  }

  return { baseUrl };
}

async function ensureStoreFile(): Promise<void> {
  await fs.mkdir(STORE_DIR, { recursive: true });

  try {
    await fs.access(STORE_PATH);
  } catch {
    await fs.writeFile(STORE_PATH, JSON.stringify({}, null, 2), "utf8");
  }
}

export async function readStoredWhisperConfig(): Promise<StoredWhisperConfig | null> {
  if (isVercelKvConfigured()) {
    const payload = await kv.get<RawStoredWhisperConfig>(KV_WHISPER_CONFIG_KEY);
    return normalizeConfig(payload);
  }

  await ensureStoreFile();
  const raw = await fs.readFile(STORE_PATH, "utf8");

  try {
    const parsed = JSON.parse(raw) as RawStoredWhisperConfig;
    return normalizeConfig(parsed);
  } catch {
    return null;
  }
}

export async function writeStoredWhisperConfig(config: StoredWhisperConfig): Promise<void> {
  const normalized = normalizeConfig(config);
  if (!normalized) {
    throw new Error("Configuración Whisper inválida.");
  }

  if (isVercelKvConfigured()) {
    await kv.set(KV_WHISPER_CONFIG_KEY, normalized);
    return;
  }

  await ensureStoreFile();
  await fs.writeFile(STORE_PATH, JSON.stringify(normalized, null, 2), "utf8");
}

export async function getWhisperRuntimeConfig(): Promise<StoredWhisperConfig> {
  const stored = await readStoredWhisperConfig();
  if (stored) {
    return stored;
  }

  const sanitizedEnv = sanitizeWhisperBaseUrl(process.env.WHISPER_SERVER_URL ?? "");
  if (sanitizedEnv) {
    return {
      baseUrl: sanitizedEnv,
    };
  }

  return {
    baseUrl: "http://127.0.0.1:5000",
  };
}
