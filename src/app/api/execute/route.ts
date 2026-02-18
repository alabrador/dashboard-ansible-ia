import { NextResponse } from "next/server";
import { getSupportedCommands, matchCommand } from "@/lib/command-parser";
import { applyTranscriptCorrections } from "@/lib/transcript-corrections";

const whisperUrl = process.env.WHISPER_SERVER_URL ?? "http://127.0.0.1:5000";
const awxBaseUrl = process.env.AWX_BASE_URL;
const awxToken = process.env.AWX_API_TOKEN;

type AwxLaunchResponse = {
  id?: number;
  url?: string;
  detail?: string;
  msg?: string;
  error?: string;
};

function buildAuthHeaders() {
  if (!awxToken) {
    return null;
  }

  return {
    Authorization: `Bearer ${awxToken}`,
    "Content-Type": "application/json",
  };
}

function extractTemplateId(transcript: string): number | null {
  const normalized = transcript
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  const match = normalized.match(/(?:template|plantilla)\s*(?:id\s*)?(\d{1,8})/i);
  if (!match) {
    return null;
  }

  const parsed = Number(match[1]);
  return Number.isInteger(parsed) && parsed > 0 ? parsed : null;
}

function extractAwxErrorDetail(payload: unknown): string | null {
  if (!payload || typeof payload !== "object") {
    return null;
  }

  const data = payload as Record<string, unknown>;
  const candidates = [data.detail, data.msg, data.error, data.non_field_errors];

  for (const item of candidates) {
    if (typeof item === "string" && item.trim()) {
      return item;
    }

    if (Array.isArray(item) && item.length > 0 && typeof item[0] === "string") {
      return item[0];
    }
  }

  for (const [key, value] of Object.entries(data)) {
    if (typeof value === "string" && value.trim()) {
      return `${key}: ${value}`;
    }

    if (Array.isArray(value) && value.length > 0 && typeof value[0] === "string") {
      return `${key}: ${value[0]}`;
    }
  }

  return null;
}

export async function POST(request: Request) {
  try {
    if (!awxBaseUrl || !awxToken) {
      return NextResponse.json(
        {
          error:
            "Faltan variables AWX_BASE_URL o AWX_API_TOKEN. Revisa el archivo .env.local.",
        },
        { status: 500 },
      );
    }

    const inputForm = await request.formData();
    const audioFile = inputForm.get("audio");
    const transcriptHintRaw = inputForm.get("transcriptHint");
    const transcriptHint =
      typeof transcriptHintRaw === "string"
        ? applyTranscriptCorrections(transcriptHintRaw)
        : "";

    if (!(audioFile instanceof File)) {
      return NextResponse.json(
        { error: "No se recibió audio para procesar." },
        { status: 400 },
      );
    }

    const whisperForm = new FormData();
    whisperForm.append("audio", audioFile, audioFile.name || "voice-command.webm");

    const transcriptionResponse = await fetch(`${whisperUrl}/transcribe`, {
      method: "POST",
      body: whisperForm,
    });

    const transcriptionData = (await transcriptionResponse.json()) as {
      text?: string;
      error?: string;
    };

    if (!transcriptionResponse.ok) {
      return NextResponse.json(
        { error: transcriptionData.error ?? "Error transcribiendo audio." },
        { status: transcriptionResponse.status },
      );
    }

    const whisperTranscript = applyTranscriptCorrections(transcriptionData.text ?? "");
    const transcript = whisperTranscript || transcriptHint;
    if (!transcript) {
      return NextResponse.json(
        { error: "No se detectó texto en el audio." },
        { status: 422 },
      );
    }

    const directTemplateId = extractTemplateId(transcript);
    const matched = directTemplateId
      ? {
          id: `template-${directTemplateId}`,
          aliases: [],
          templateId: directTemplateId,
          templateType: "job" as const,
        }
      : matchCommand(transcript);

    if (!matched) {
      return NextResponse.json(
        {
          error: "No se encontró un comando compatible con la voz detectada.",
          transcript,
          supportedCommands: getSupportedCommands(),
        },
        { status: 422 },
      );
    }

    const headers = buildAuthHeaders();
    if (!headers) {
      return NextResponse.json(
        { error: "No se pudo construir autenticación para AWX." },
        { status: 500 },
      );
    }

    const baseUrl = awxBaseUrl.replace(/\/$/, "");
    const launchPath =
      matched.templateType === "workflow"
        ? `/api/v2/workflow_job_templates/${matched.templateId}/launch/`
        : `/api/v2/job_templates/${matched.templateId}/launch/`;
    const launchUrl = `${baseUrl}${launchPath}`;
    const launchPayload =
      matched.templateType === "workflow"
        ? {}
        : {
            extra_vars: {
              source: "voice-command",
              transcript,
              ...(matched.extraVars ?? {}),
            },
          };

    let launchResponse: Response;
    try {
      launchResponse = await fetch(launchUrl, {
        method: "POST",
        headers,
        body: JSON.stringify(launchPayload),
        signal: AbortSignal.timeout(15000),
      });
    } catch (launchError) {
      const detail =
        launchError instanceof Error
          ? launchError.message
          : "No fue posible conectar con AWX.";

      return NextResponse.json(
        {
          error: `Fallo de conexión con AWX: ${detail}`,
          transcript,
          matchedCommand: matched.id,
          templateId: matched.templateId,
        },
        { status: 502 },
      );
    }

    const launchRaw = await launchResponse.text();
    let launchData: AwxLaunchResponse = {};
    let launchResponsePayload: unknown = launchRaw;

    try {
      launchResponsePayload = JSON.parse(launchRaw);
      launchData = launchResponsePayload as AwxLaunchResponse;
    } catch {
      launchResponsePayload = launchRaw;
    }

    if (!launchResponse.ok || !launchData.id) {
      const awxDetail = extractAwxErrorDetail(launchResponsePayload);
      const fallbackBody =
        typeof launchResponsePayload === "string" && launchResponsePayload.trim()
          ? launchResponsePayload.slice(0, 300)
          : "Sin detalle";

      return NextResponse.json(
        {
          error: `AWX rechazó la ejecución del template (HTTP ${launchResponse.status}). ${awxDetail ?? fallbackBody}`,
          transcript,
          matchedCommand: matched.id,
          templateId: matched.templateId,
        },
        { status: launchResponse.status || 500 },
      );
    }

    return NextResponse.json({
      transcript,
      matchedCommand: matched.id,
      templateId: matched.templateId,
      templateType: matched.templateType,
      jobId: launchData.id,
      awxUrl:
        matched.templateType === "workflow"
          ? `${baseUrl}/#/jobs/workflow/${launchData.id}`
          : `${baseUrl}/#/jobs/playbook/${launchData.id}`,
    });
  } catch (error) {
    const detail = error instanceof Error ? error.message : "Error inesperado";
    return NextResponse.json(
      { error: `No se pudo ejecutar el flujo de voz a AWX. ${detail}` },
      { status: 500 },
    );
  }
}
