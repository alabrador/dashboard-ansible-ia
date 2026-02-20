import { promises as fs } from "node:fs";
import { join } from "node:path";
import { kv } from "@vercel/kv";
import type { UserRole } from "@/lib/auth/types";

const STORE_DIR = join(process.cwd(), "uploads");
const STORE_PATH = join(STORE_DIR, "ldap-config.json");
const KV_LDAP_CONFIG_KEY = "dashboard:ldap-config";

export type StoredLdapConfig = {
  url: string;
  baseDn: string;
  userFilter: string;
  bindDn?: string;
  bindPassword?: string;
  timeoutMs: number;
  adminEmails: string[];
};

type RawStoredLdapConfig = {
  url?: string;
  baseDn?: string;
  userFilter?: string;
  bindDn?: string;
  bindPassword?: string;
  timeoutMs?: number;
  adminEmails?: string[];
};

function isVercelKvConfigured(): boolean {
  return Boolean(process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN);
}

function normalizeEmailList(values: string[]): string[] {
  return values
    .map((value) => value.trim().toLowerCase())
    .filter(Boolean);
}

function normalizeConfig(config: RawStoredLdapConfig | null | undefined): StoredLdapConfig | null {
  if (!config) {
    return null;
  }

  const url = typeof config.url === "string" ? config.url.trim() : "";
  const baseDn = typeof config.baseDn === "string" ? config.baseDn.trim() : "";

  if (!url || !baseDn) {
    return null;
  }

  const userFilter =
    typeof config.userFilter === "string" && config.userFilter.trim()
      ? config.userFilter.trim()
      : "(mail={{email}})";

  const bindDn = typeof config.bindDn === "string" && config.bindDn.trim() ? config.bindDn.trim() : undefined;
  const bindPassword =
    typeof config.bindPassword === "string" && config.bindPassword.trim()
      ? config.bindPassword
      : undefined;

  const timeoutCandidate =
    typeof config.timeoutMs === "number" && Number.isFinite(config.timeoutMs) ? config.timeoutMs : 5000;
  const timeoutMs = Math.max(1000, Math.min(20000, Math.floor(timeoutCandidate)));

  const adminEmails = Array.isArray(config.adminEmails)
    ? normalizeEmailList(config.adminEmails)
    : [];

  return {
    url,
    baseDn,
    userFilter,
    bindDn,
    bindPassword,
    timeoutMs,
    adminEmails,
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

export async function readStoredLdapConfig(): Promise<StoredLdapConfig | null> {
  if (isVercelKvConfigured()) {
    const payload = await kv.get<RawStoredLdapConfig>(KV_LDAP_CONFIG_KEY);
    return normalizeConfig(payload);
  }

  await ensureStoreFile();
  const raw = await fs.readFile(STORE_PATH, "utf8");

  try {
    const parsed = JSON.parse(raw) as RawStoredLdapConfig;
    return normalizeConfig(parsed);
  } catch {
    return null;
  }
}

export async function writeStoredLdapConfig(config: StoredLdapConfig): Promise<void> {
  const normalized = normalizeConfig(config);
  if (!normalized) {
    throw new Error("Configuración LDAP inválida.");
  }

  if (isVercelKvConfigured()) {
    await kv.set(KV_LDAP_CONFIG_KEY, normalized);
    return;
  }

  await ensureStoreFile();
  await fs.writeFile(STORE_PATH, JSON.stringify(normalized, null, 2), "utf8");
}

export async function buildLdapAdminRole(email: string): Promise<UserRole> {
  const normalizedEmail = email.trim().toLowerCase();
  const config = await readStoredLdapConfig();

  if (!config) {
    return "tecnico";
  }

  return config.adminEmails.includes(normalizedEmail) ? "administrativo" : "tecnico";
}
