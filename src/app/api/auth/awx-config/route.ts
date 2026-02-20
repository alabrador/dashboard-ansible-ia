import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getSessionCookieName, verifySessionToken } from "@/lib/auth/session";
import { readStoredAwxConfig, writeStoredAwxConfig, type StoredAwxConfig } from "@/lib/awx-config-store";

type AwxConfigBody = {
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

function parseConfig(body: AwxConfigBody): StoredAwxConfig {
  return {
    baseUrl: body.baseUrl?.trim() ?? "",
    apiToken: body.apiToken?.trim() ?? "",
  };
}

function validateConfig(config: StoredAwxConfig): string | null {
  if (!config.baseUrl || !config.apiToken) {
    return "Debes completar host y token de Ansible/AWX.";
  }

  return null;
}

export async function GET() {
  const unauthorized = await requireAdminSession();
  if (unauthorized) {
    return unauthorized;
  }

  try {
    const config = await readStoredAwxConfig();

    return NextResponse.json(
      {
        config: config
          ? {
              baseUrl: config.baseUrl,
              apiToken: config.apiToken,
            }
          : null,
      },
      { headers: NO_CACHE_HEADERS },
    );
  } catch {
    return NextResponse.json(
      { error: "No se pudo cargar la configuración de Ansible/AWX." },
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
    const body = (await request.json()) as AwxConfigBody;
    const config = parseConfig(body);
    const validationError = validateConfig(config);

    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400, headers: NO_CACHE_HEADERS });
    }

    await writeStoredAwxConfig(config);
    return NextResponse.json({ ok: true }, { headers: NO_CACHE_HEADERS });
  } catch {
    return NextResponse.json(
      { error: "No se pudo guardar la configuración de Ansible/AWX." },
      { status: 500, headers: NO_CACHE_HEADERS },
    );
  }
}
