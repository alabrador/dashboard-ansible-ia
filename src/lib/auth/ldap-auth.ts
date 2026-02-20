import { Client } from "ldapts";
import type { AuthResult, AuthUser } from "@/lib/auth/types";
import { readStoredLdapConfig, type StoredLdapConfig } from "@/lib/auth/ldap-config-store";

type LdapConfig = {
  url: string;
  baseDn: string;
  userFilter: string;
  bindDn?: string;
  bindPassword?: string;
  timeoutMs: number;
  adminEmails: string[];
};

function parseAdminEmails(raw: string): string[] {
  return raw
    .split(";")
    .map((item) => item.trim().toLowerCase())
    .filter(Boolean);
}

function getEnvLdapConfig(): LdapConfig | null {
  const url = process.env.LDAP_URL?.trim();
  const baseDn = process.env.LDAP_BASE_DN?.trim();

  if (!url || !baseDn) {
    return null;
  }

  return {
    url,
    baseDn,
    userFilter: process.env.LDAP_USER_FILTER?.trim() || "(mail={{email}})",
    bindDn: process.env.LDAP_BIND_DN?.trim() || undefined,
    bindPassword: process.env.LDAP_BIND_PASSWORD?.trim() || undefined,
    timeoutMs: Number(process.env.LDAP_TIMEOUT_MS ?? 5000),
    adminEmails: parseAdminEmails(process.env.LDAP_ADMIN_EMAILS ?? ""),
  };
}

function toRuntimeConfig(config: StoredLdapConfig): LdapConfig {
  return {
    url: config.url,
    baseDn: config.baseDn,
    userFilter: config.userFilter,
    bindDn: config.bindDn,
    bindPassword: config.bindPassword,
    timeoutMs: config.timeoutMs,
    adminEmails: config.adminEmails,
  };
}

async function getLdapConfig(): Promise<LdapConfig | null> {
  const storedConfig = await readStoredLdapConfig();
  if (storedConfig) {
    return toRuntimeConfig(storedConfig);
  }

  return getEnvLdapConfig();
}

function buildFilter(template: string, email: string): string {
  return template.replace(/\{\{\s*email\s*\}\}/gi, email);
}

function resolveLdapRole(email: string, config: LdapConfig): "administrativo" | "tecnico" {
  return config.adminEmails.includes(email.trim().toLowerCase()) ? "administrativo" : "tecnico";
}

export function isLdapEnabled(): boolean {
  return Boolean(process.env.LDAP_URL?.trim() && process.env.LDAP_BASE_DN?.trim());
}

export async function authenticateLdap(email: string, password: string): Promise<AuthResult> {
  const config = await getLdapConfig();
  if (!config) {
    return { ok: false, error: "LDAP no está configurado." };
  }

  const normalizedEmail = email.trim().toLowerCase();
  const client = new Client({
    url: config.url,
    timeout: config.timeoutMs,
    connectTimeout: config.timeoutMs,
  });

  try {
    if (config.bindDn && config.bindPassword) {
      await client.bind(config.bindDn, config.bindPassword);
    } else {
      await client.bind(normalizedEmail, password);
      const directUser: AuthUser = {
        email: normalizedEmail,
        role: resolveLdapRole(normalizedEmail, config),
        source: "ldap",
      };
      return { ok: true, user: directUser };
    }

    const filter = buildFilter(config.userFilter, normalizedEmail);
    const searchResult = await client.search(config.baseDn, {
      scope: "sub",
      filter,
      attributes: ["dn", "mail"],
      sizeLimit: 1,
    });

    const entry = searchResult.searchEntries[0];
    if (!entry || typeof entry.dn !== "string") {
      return { ok: false, error: "Usuario no encontrado en LDAP." };
    }

    const userDn = entry.dn;
    await client.unbind();

    const authClient = new Client({
      url: config.url,
      timeout: config.timeoutMs,
      connectTimeout: config.timeoutMs,
    });

    try {
      await authClient.bind(userDn, password);
      const user: AuthUser = {
        email:
          typeof entry.mail === "string" && entry.mail.trim()
            ? entry.mail.toLowerCase()
            : normalizedEmail,
        role: resolveLdapRole(
          typeof entry.mail === "string" && entry.mail.trim()
            ? entry.mail.toLowerCase()
            : normalizedEmail,
          config,
        ),
        source: "ldap",
      };

      return { ok: true, user };
    } finally {
      await authClient.unbind();
    }
  } catch {
    return { ok: false, error: "Credenciales LDAP inválidas o servidor no disponible." };
  } finally {
    try {
      await client.unbind();
    } catch {
      // noop
    }
  }
}

export async function testLdapConnection(configOverride?: StoredLdapConfig): Promise<{ ok: boolean; message: string }> {
  const config = configOverride ? toRuntimeConfig(configOverride) : await getLdapConfig();
  if (!config) {
    return { ok: false, message: "LDAP no está configurado." };
  }

  const client = new Client({
    url: config.url,
    timeout: config.timeoutMs,
    connectTimeout: config.timeoutMs,
  });

  try {
    if (config.bindDn && config.bindPassword) {
      await client.bind(config.bindDn, config.bindPassword);
    } else {
      await client.search(config.baseDn, {
        scope: "base",
        filter: "(objectClass=*)",
        attributes: ["dn"],
        sizeLimit: 1,
      });
    }

    return { ok: true, message: "Conexión LDAP exitosa." };
  } catch (error) {
    const detail =
      error instanceof Error && error.message
        ? error.message
        : "No se pudo conectar con LDAP.";

    return { ok: false, message: detail };
  } finally {
    try {
      await client.unbind();
    } catch {
      // noop
    }
  }
}