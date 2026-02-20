import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getSessionCookieName, verifySessionToken } from "@/lib/auth/session";
import { readStoredLdapConfig, type StoredLdapConfig } from "@/lib/auth/ldap-config-store";
import { testLdapConnection } from "@/lib/auth/ldap-auth";

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

function parseBodyConfig(body: LdapConfigBody): StoredLdapConfig {
  const timeoutCandidate = typeof body.timeoutMs === "number" ? body.timeoutMs : Number(body.timeoutMs ?? 5000);

  return {
    url: body.url?.trim() ?? "",
    baseDn: body.baseDn?.trim() ?? "",
    userFilter: body.userFilter?.trim() || "(mail={{email}})",
    bindDn: body.bindDn?.trim() || undefined,
    bindPassword: body.bindPassword?.trim() || undefined,
    timeoutMs: Number.isFinite(timeoutCandidate) ? Math.max(1000, Math.min(20000, Math.floor(timeoutCandidate))) : 5000,
    adminEmails: (body.adminEmails ?? "")
      .split(";")
      .map((item) => item.trim().toLowerCase())
      .filter(Boolean),
  };
}

export async function POST(request: Request) {
  const unauthorized = await requireAdminSession();
  if (unauthorized) {
    return unauthorized;
  }

  try {
    const body = (await request.json()) as LdapConfigBody;
    const hasIncomingConfig = Boolean(body.url || body.baseDn || body.bindDn || body.bindPassword || body.userFilter);

    const config = hasIncomingConfig ? parseBodyConfig(body) : await readStoredLdapConfig();
    if (!config) {
      return NextResponse.json(
        { ok: false, error: "No hay configuración LDAP guardada para probar." },
        { status: 400, headers: NO_CACHE_HEADERS },
      );
    }

    if (!config.url || !config.baseDn) {
      return NextResponse.json(
        { ok: false, error: "Debes completar URL de LDAP y Base DN." },
        { status: 400, headers: NO_CACHE_HEADERS },
      );
    }

    const result = await testLdapConnection(config);

    return NextResponse.json(
      {
        ok: result.ok,
        message: result.message,
      },
      { status: result.ok ? 200 : 400, headers: NO_CACHE_HEADERS },
    );
  } catch {
    return NextResponse.json(
      { ok: false, error: "No se pudo realizar la prueba de conexión LDAP." },
      { status: 500, headers: NO_CACHE_HEADERS },
    );
  }
}
