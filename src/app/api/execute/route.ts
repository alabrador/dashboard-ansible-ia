import { NextResponse } from "next/server";
import { getSupportedCommands, matchCommand } from "@/lib/command-parser";
import { applyTranscriptCorrections } from "@/lib/transcript-corrections";
import { getAwxRuntimeConfig } from "@/lib/awx-config-store";
import { buildWhisperTranscribeUrl, getWhisperRuntimeConfig } from "@/lib/whisper-config-store";
import type { CommandMapping } from "@/config/command-mappings";

type AwxLaunchResponse = {
  id?: number;
  url?: string;
  detail?: string;
  msg?: string;
  error?: string;
};

type WhisperTranscriptionPayload = {
  text?: string;
  error?: string;
};

type AwxListResultItem = {
  id?: number;
  name?: string;
};

type AwxListResponse = {
  count?: number;
  results?: AwxListResultItem[];
};

function buildAuthHeaders(awxToken: string) {
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

function buildAwxTemplateLaunchPath(templateType: "job" | "workflow", templateId: number): string {
  return templateType === "workflow"
    ? `/api/v2/workflow_job_templates/${templateId}/launch/`
    : `/api/v2/job_templates/${templateId}/launch/`;
}

function buildAwxTemplateQueryPath(templateType: "job" | "workflow", params: URLSearchParams): string {
  const basePath =
    templateType === "workflow"
      ? "/api/v2/workflow_job_templates/"
      : "/api/v2/job_templates/";

  return `${basePath}?${params.toString()}`;
}

function parseAwxListResponse(payload: unknown): AwxListResultItem[] {
  if (!payload || typeof payload !== "object") {
    return [];
  }

  const data = payload as AwxListResponse;
  if (!Array.isArray(data.results)) {
    return [];
  }

  return data.results;
}

function normalizeLookupCandidates(matched: CommandMapping): string[] {
  const candidates = [
    matched.templateName,
    matched.id,
    ...matched.aliases,
  ];

  const normalized = candidates
    .map((item) => item?.trim())
    .filter((item): item is string => Boolean(item));

  return Array.from(new Set(normalized));
}

async function findAwxTemplateIdByName(
  baseUrl: string,
  headers: Record<string, string>,
  matched: CommandMapping,
): Promise<number | null> {
  const candidates = normalizeLookupCandidates(matched);

  for (const candidate of candidates) {
    const exactParams = new URLSearchParams({
      name__iexact: candidate,
      page_size: "1",
      order_by: "id",
    });

    const exactUrl = `${baseUrl}${buildAwxTemplateQueryPath(matched.templateType, exactParams)}`;
    const exactResponse = await fetch(exactUrl, {
      method: "GET",
      headers,
      signal: AbortSignal.timeout(10000),
    });

    if (exactResponse.ok) {
      const exactRaw = await exactResponse.text();
      let exactPayload: unknown = exactRaw;

      try {
        exactPayload = JSON.parse(exactRaw);
      } catch {
        exactPayload = exactRaw;
      }

      const exactResults = parseAwxListResponse(exactPayload);
      const exactMatchId = exactResults.find((item) => Number.isInteger(item.id) && (item.id ?? 0) > 0)?.id;

      if (typeof exactMatchId === "number") {
        return exactMatchId;
      }
    }

    const containsParams = new URLSearchParams({
      search: candidate,
      page_size: "5",
      order_by: "id",
    });

    const containsUrl = `${baseUrl}${buildAwxTemplateQueryPath(matched.templateType, containsParams)}`;
    const containsResponse = await fetch(containsUrl, {
      method: "GET",
      headers,
      signal: AbortSignal.timeout(10000),
    });

    if (!containsResponse.ok) {
      continue;
    }

    const containsRaw = await containsResponse.text();
    let containsPayload: unknown = containsRaw;

    try {
      containsPayload = JSON.parse(containsRaw);
    } catch {
      containsPayload = containsRaw;
    }

    const containsResults = parseAwxListResponse(containsPayload);
    const containsMatchId = containsResults.find((item) => Number.isInteger(item.id) && (item.id ?? 0) > 0)?.id;

    if (typeof containsMatchId === "number") {
      return containsMatchId;
    }
  }

  return null;
}

export async function POST(request: Request) {
  try {
    const awxConfig = await getAwxRuntimeConfig();
    const whisperConfig = await getWhisperRuntimeConfig();

    if (!awxConfig) {
      return NextResponse.json(
        {
          error:
            "Faltan variables AWX_BASE_URL o AWX_API_TOKEN, o configúralas en el menú administrativo de Ansible.",
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

    const whisperTranscribeUrl = buildWhisperTranscribeUrl(whisperConfig.baseUrl);
    if (!whisperTranscribeUrl) {
      return NextResponse.json(
        { error: "La URL de Whisper configurada no es válida." },
        { status: 500 },
      );
    }

    const transcriptionResponse = await fetch(whisperTranscribeUrl, {
      method: "POST",
      body: whisperForm,
    });

    const transcriptionRaw = await transcriptionResponse.text();
    let transcriptionData: WhisperTranscriptionPayload = {};

    try {
      transcriptionData = JSON.parse(transcriptionRaw) as WhisperTranscriptionPayload;
    } catch {
      transcriptionData = { error: transcriptionRaw.slice(0, 300) };
    }

    if (!transcriptionResponse.ok) {
      return NextResponse.json(
        {
          error:
            transcriptionData.error ??
            `Error transcribiendo audio (HTTP ${transcriptionResponse.status}).`,
        },
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

    const headers = buildAuthHeaders(awxConfig.apiToken);
    if (!headers) {
      return NextResponse.json(
        { error: "No se pudo construir autenticación para AWX." },
        { status: 500 },
      );
    }

    const baseUrl = awxConfig.baseUrl.replace(/\/$/, "");
    let effectiveTemplateId = matched.templateId;
    let launchUrl = `${baseUrl}${buildAwxTemplateLaunchPath(matched.templateType, effectiveTemplateId)}`;
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

    if (
      !directTemplateId &&
      launchResponse.status === 404
    ) {
      const discoveredTemplateId = await findAwxTemplateIdByName(baseUrl, headers, matched);
      if (discoveredTemplateId && discoveredTemplateId !== effectiveTemplateId) {
        effectiveTemplateId = discoveredTemplateId;
        launchUrl = `${baseUrl}${buildAwxTemplateLaunchPath(matched.templateType, effectiveTemplateId)}`;
        launchResponse = await fetch(launchUrl, {
          method: "POST",
          headers,
          body: JSON.stringify(launchPayload),
          signal: AbortSignal.timeout(15000),
        });
      }
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
          templateId: effectiveTemplateId,
        },
        { status: launchResponse.status || 500 },
      );
    }

    return NextResponse.json({
      transcript,
      matchedCommand: matched.id,
      templateId: effectiveTemplateId,
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
