import { NextResponse } from "next/server";
import { getAwxRuntimeConfig } from "@/lib/awx-config-store";

export async function GET() {
  const awxConfig = await getAwxRuntimeConfig();

  if (!awxConfig) {
    return NextResponse.json(
      {
        ok: false,
        error: "Faltan AWX_BASE_URL o AWX_API_TOKEN, o configúralas en el menú administrativo de Ansible.",
      },
      { status: 500 },
    );
  }

  const baseUrl = awxConfig.baseUrl.replace(/\/$/, "");
  const pingUrl = `${baseUrl}/api/v2/ping/`;

  try {
    const response = await fetch(pingUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${awxConfig.apiToken}`,
      },
      signal: AbortSignal.timeout(10000),
    });

    const rawBody = await response.text();
    let body: unknown = rawBody;

    try {
      body = JSON.parse(rawBody);
    } catch {
      body = rawBody;
    }

    return NextResponse.json(
      {
        ok: response.ok,
        status: response.status,
        url: pingUrl,
        baseUrl,
        body,
      },
      { status: response.ok ? 200 : response.status },
    );
  } catch (error) {
    const detail = error instanceof Error ? error.message : "Error desconocido";

    return NextResponse.json(
      {
        ok: false,
        status: 502,
        url: pingUrl,
        baseUrl,
        error: `No se pudo conectar con AWX: ${detail}`,
      },
      { status: 502 },
    );
  }
}
