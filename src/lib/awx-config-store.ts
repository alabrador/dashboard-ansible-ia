import { promises as fs } from "node:fs";
import { join } from "node:path";
import { kv } from "@vercel/kv";

const STORE_DIR = join(process.cwd(), "uploads");
const STORE_PATH = join(STORE_DIR, "awx-config.json");
const KV_AWX_CONFIG_KEY = "dashboard:awx-config";

export type StoredAwxConfig = {
  baseUrl: string;
  apiToken: string;
};

type RawStoredAwxConfig = {
  baseUrl?: string;
  apiToken?: string;
};

function isVercelKvConfigured(): boolean {
  return Boolean(process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN);
}

function normalizeConfig(config: RawStoredAwxConfig | null | undefined): StoredAwxConfig | null {
  if (!config) {
    return null;
  }

  const baseUrl = typeof config.baseUrl === "string" ? config.baseUrl.trim() : "";
  const apiToken = typeof config.apiToken === "string" ? config.apiToken.trim() : "";

  if (!baseUrl || !apiToken) {
    return null;
  }

  return {
    baseUrl,
    apiToken,
  };
}

async function ensureStoreFile(): Promise<void> {
  await fs.mkdir(STORE_DIR, { recursive: true });

  try {
    await fs.access(STORE_PATH);
  } catch {
    await fs.writeFile(STORE_PATH, JSON.stringify({}, null, 2), "utf8");
  }
}

export async function readStoredAwxConfig(): Promise<StoredAwxConfig | null> {
  if (isVercelKvConfigured()) {
    const payload = await kv.get<RawStoredAwxConfig>(KV_AWX_CONFIG_KEY);
    return normalizeConfig(payload);
  }

  await ensureStoreFile();
  const raw = await fs.readFile(STORE_PATH, "utf8");

  try {
    const parsed = JSON.parse(raw) as RawStoredAwxConfig;
    return normalizeConfig(parsed);
  } catch {
    return null;
  }
}

export async function writeStoredAwxConfig(config: StoredAwxConfig): Promise<void> {
  const normalized = normalizeConfig(config);
  if (!normalized) {
    throw new Error("Configuración AWX inválida.");
  }

  if (isVercelKvConfigured()) {
    await kv.set(KV_AWX_CONFIG_KEY, normalized);
    return;
  }

  await ensureStoreFile();
  await fs.writeFile(STORE_PATH, JSON.stringify(normalized, null, 2), "utf8");
}

export async function getAwxRuntimeConfig(): Promise<StoredAwxConfig | null> {
  const stored = await readStoredAwxConfig();
  if (stored) {
    return stored;
  }

  const envBaseUrl = process.env.AWX_BASE_URL?.trim() ?? "";
  const envToken = process.env.AWX_API_TOKEN?.trim() ?? "";

  if (!envBaseUrl || !envToken) {
    return null;
  }

  return {
    baseUrl: envBaseUrl,
    apiToken: envToken,
  };
}
