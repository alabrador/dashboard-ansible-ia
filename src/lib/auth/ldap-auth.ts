import { Client } from "ldapts";
import type { AuthResult, AuthUser } from "@/lib/auth/types";

type LdapConfig = {
  url: string;
  baseDn: string;
  userFilter: string;
  bindDn?: string;
  bindPassword?: string;
  timeoutMs: number;
};

function getLdapConfig(): LdapConfig | null {
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
  };
}

function buildFilter(template: string, email: string): string {
  return template.replace(/\{\{\s*email\s*\}\}/gi, email);
}

export function isLdapEnabled(): boolean {
  return getLdapConfig() !== null;
}

export async function authenticateLdap(email: string, password: string): Promise<AuthResult> {
  const config = getLdapConfig();
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
      const directUser: AuthUser = { email: normalizedEmail, source: "ldap" };
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