import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getSessionCookieName, verifySessionToken } from "@/lib/auth/session";
import { readStoredLdapConfig, writeStoredLdapConfig, type StoredLdapConfig } from "@/lib/auth/ldap-config-store";

type LdapConfigBody = {
  url?: string;
  baseDn?: string;
  userFilter?: string;
  bindDn?: string;
  bindPassword?: string;
  timeoutMs?: number;
  adminEmails?: string;
};

const NO_CACHE_HEADERS: HeadersInit = {
  "Cache-Control": "private, no-store, no-cache, must-revalidate, max-age=0",
  Pragma: "no-cache",
  Expires: "0",
  Vary: "Cookie",
};

async function requireAdminSession(): Promise<NextResponse | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(getSessionCookieName())?.value;

  if (!token) {
    return NextResponse.json({ error: "No autenticado." }, { status: 401, headers: NO_CACHE_HEADERS });
  }

  const session = await verifySessionToken(token);
  if (!session) {
    return NextResponse.json({ error: "Sesión inválida." }, { status: 401, headers: NO_CACHE_HEADERS });
  }

  if (session.role !== "administrativo") {
    return NextResponse.json({ error: "No autorizado." }, { status: 403, headers: NO_CACHE_HEADERS });
  }

  return null;
}

function normalizeAdminEmails(value?: string): string[] {
  return (value ?? "")
    .split(";")
    .map((item) => item.trim().toLowerCase())
    .filter(Boolean);
}

function parseConfig(body: LdapConfigBody): StoredLdapConfig {
  const timeoutCandidate = typeof body.timeoutMs === "number" ? body.timeoutMs : Number(body.timeoutMs ?? 5000);

  return {
    url: body.url?.trim() ?? "",
    baseDn: body.baseDn?.trim() ?? "",
    userFilter: body.userFilter?.trim() || "(mail={{email}})",
    bindDn: body.bindDn?.trim() || undefined,
    bindPassword: body.bindPassword?.trim() || undefined,
    timeoutMs: Number.isFinite(timeoutCandidate) ? Math.max(1000, Math.min(20000, Math.floor(timeoutCandidate))) : 5000,
    adminEmails: normalizeAdminEmails(body.adminEmails),
  };
}

function validateConfig(config: StoredLdapConfig): string | null {
  if (!config.url || !config.baseDn) {
    return "Debes completar URL de LDAP y Base DN.";
  }

  return null;
}

export async function GET() {
  const unauthorized = await requireAdminSession();
  if (unauthorized) {
    return unauthorized;
  }

  try {
    const config = await readStoredLdapConfig();

    return NextResponse.json(
      {
        config: config
          ? {
              url: config.url,
              baseDn: config.baseDn,
              userFilter: config.userFilter,
              bindDn: config.bindDn ?? "",
              bindPassword: config.bindPassword ?? "",
              timeoutMs: config.timeoutMs,
              adminEmails: config.adminEmails.join(";"),
            }
          : null,
      },
      { headers: NO_CACHE_HEADERS },
    );
  } catch {
    return NextResponse.json(
      { error: "No se pudo cargar la configuración LDAP." },
      { status: 500, headers: NO_CACHE_HEADERS },
    );
  }
}

export async function PUT(request: Request) {
  const unauthorized = await requireAdminSession();
  if (unauthorized) {
    return unauthorized;
  }

  try {
    const body = (await request.json()) as LdapConfigBody;
    const config = parseConfig(body);
    const validationError = validateConfig(config);

    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400, headers: NO_CACHE_HEADERS });
    }

    await writeStoredLdapConfig(config);
    return NextResponse.json({ ok: true }, { headers: NO_CACHE_HEADERS });
  } catch {
    return NextResponse.json(
      { error: "No se pudo guardar la configuración LDAP." },
      { status: 500, headers: NO_CACHE_HEADERS },
    );
  }
}
