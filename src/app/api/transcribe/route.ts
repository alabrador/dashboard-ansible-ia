import { NextResponse } from "next/server";
import { applyTranscriptCorrections } from "@/lib/transcript-corrections";
import { buildWhisperTranscribeUrl, getWhisperRuntimeConfig } from "@/lib/whisper-config-store";

export async function POST(request: Request) {
  try {
    const whisperConfig = await getWhisperRuntimeConfig();
    const whisperTranscribeUrl = buildWhisperTranscribeUrl(whisperConfig.baseUrl);
    if (!whisperTranscribeUrl) {
      return NextResponse.json(
        { error: "La URL de Whisper configurada no es válida." },
        { status: 500 },
      );
    }

    const inputForm = await request.formData();
    const audioFile = inputForm.get("audio");

    if (!(audioFile instanceof File)) {
      return NextResponse.json(
        { error: "No se recibió el archivo de audio." },
        { status: 400 },
      );
    }

    const formData = new FormData();
    formData.append("audio", audioFile, audioFile.name || "voice-command.webm");

    const response = await fetch(whisperTranscribeUrl, {
      method: "POST",
      body: formData,
    });

    const raw = await response.text();
    let data: { text?: string; error?: string } = {};

    try {
      data = JSON.parse(raw) as { text?: string; error?: string };
    } catch {
      data = { error: raw.slice(0, 300) };
    }

    if (!response.ok) {
      return NextResponse.json(
        {
          error:
            data.error ??
            `Fallo en el servidor Whisper (HTTP ${response.status}).`,
        },
        { status: response.status },
      );
    }

    return NextResponse.json({
      transcript: applyTranscriptCorrections(data.text ?? ""),
    });
  } catch (error) {
    const detail = error instanceof Error ? error.message : "Error inesperado";
    return NextResponse.json(
      { error: `No se pudo completar la transcripción. ${detail}` },
      { status: 500 },
    );
  }
}
