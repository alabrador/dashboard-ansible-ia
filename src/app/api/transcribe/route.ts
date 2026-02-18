import { NextResponse } from "next/server";
import { applyTranscriptCorrections } from "@/lib/transcript-corrections";

const whisperUrl = process.env.WHISPER_SERVER_URL ?? "http://127.0.0.1:5000";

export async function POST(request: Request) {
  try {
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

    const response = await fetch(`${whisperUrl}/transcribe`, {
      method: "POST",
      body: formData,
    });

    const data = (await response.json()) as { text?: string; error?: string };

    if (!response.ok) {
      return NextResponse.json(
        { error: data.error ?? "Fallo en el servidor Whisper." },
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
