import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getSessionCookieName, verifySessionToken } from "@/lib/auth/session";
import { buildWhisperTranscribeUrl } from "@/lib/whisper-config-store";

type WhisperTestBody = {
  baseUrl?: string;
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
    const body = (await request.json()) as WhisperTestBody;
    const baseUrl = body.baseUrl?.trim() ?? "";

    if (!baseUrl) {
      return NextResponse.json(
        { ok: false, error: "Debes completar la URL del servidor Whisper." },
        { status: 400, headers: NO_CACHE_HEADERS },
      );
    }

    const testUrl = buildWhisperTranscribeUrl(baseUrl);
    if (!testUrl) {
      return NextResponse.json(
        { ok: false, error: "URL de Whisper inválida. Usa formato: http://127.0.0.1:5000" },
        { status: 400, headers: NO_CACHE_HEADERS },
      );
    }

    const healthUrl = `${new URL(testUrl).origin}/health`;
    const healthResponse = await fetch(healthUrl, {
      method: "GET",
      signal: AbortSignal.timeout(8000),
    });

    if (healthResponse.ok) {
      return NextResponse.json(
        {
          ok: true,
          message: "Conexión al servidor Whisper válida.",
        },
        { headers: NO_CACHE_HEADERS },
      );
    }

    const formData = new FormData();
    formData.append("audio", new Blob(["test"], { type: "audio/webm" }), "test.webm");

    const response = await fetch(testUrl, {
      method: "POST",
      body: formData,
      signal: AbortSignal.timeout(8000),
    });

    if (response.status >= 500) {
      return NextResponse.json(
        {
          ok: false,
          error: `Whisper no disponible (health: ${healthResponse.status}, transcribe: ${response.status}).`,
        },
        { status: 400, headers: NO_CACHE_HEADERS },
      );
    }

    return NextResponse.json(
      {
        ok: true,
        message: "Conexión al servidor Whisper válida.",
      },
      { headers: NO_CACHE_HEADERS },
    );
  } catch (error) {
    const detail =
      error instanceof Error && error.message
        ? error.message
        : "No se pudo validar la conexión con Whisper.";

    return NextResponse.json(
      { ok: false, error: detail },
      { status: 500, headers: NO_CACHE_HEADERS },
    );
  }
}
