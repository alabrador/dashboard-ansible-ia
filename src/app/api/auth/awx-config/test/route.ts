import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getSessionCookieName, verifySessionToken } from "@/lib/auth/session";

type AwxTestBody = {
  baseUrl?: string;
  apiToken?: string;
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

export async function POST(request: Request) {
  const unauthorized = await requireAdminSession();
  if (unauthorized) {
    return unauthorized;
  }

  try {
    const body = (await request.json()) as AwxTestBody;
    const baseUrl = body.baseUrl?.trim() ?? "";
    const apiToken = body.apiToken?.trim() ?? "";

    if (!baseUrl || !apiToken) {
      return NextResponse.json(
        { ok: false, error: "Debes completar host y token de Ansible/AWX." },
        { status: 400, headers: NO_CACHE_HEADERS },
      );
    }

    const pingUrl = `${baseUrl.replace(/\/$/, "")}/api/v2/ping/`;

    const response = await fetch(pingUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${apiToken}`,
      },
      signal: AbortSignal.timeout(10000),
    });

    if (!response.ok) {
      const detail = await response.text();
      return NextResponse.json(
        {
          ok: false,
          error: `AWX respondió HTTP ${response.status}. ${detail.slice(0, 250)}`,
        },
        { status: 400, headers: NO_CACHE_HEADERS },
      );
    }

    return NextResponse.json(
      {
        ok: true,
        message: "Conexión AWX exitosa.",
      },
      { headers: NO_CACHE_HEADERS },
    );
  } catch (error) {
    const detail =
      error instanceof Error && error.message
        ? error.message
        : "No se pudo validar la conexión AWX.";

    return NextResponse.json(
      { ok: false, error: detail },
      { status: 500, headers: NO_CACHE_HEADERS },
    );
  }
}
