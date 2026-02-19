import { NextResponse } from "next/server";

type WeatherPayload = {
  daily?: {
    weather_code?: number[];
    precipitation_probability_max?: number[];
    temperature_2m_max?: number[];
  };
};

function buildTip(weatherCode: number, rainProbability: number, maxTemp: number) {
  const isRainLikely = rainProbability >= 45 || [51, 53, 55, 61, 63, 65, 80, 81, 82, 95].includes(weatherCode);
  const isSunny = [0, 1].includes(weatherCode) && rainProbability < 30;

  if (isRainLikely) {
    return `Clima: hoy puede llover (${rainProbability}%).`;
  }

  if (isSunny) {
    return `Clima: hoy pinta sol, máx ${Math.round(maxTemp)}°C.`;
  }

  return `Clima: hoy estará variable, máx ${Math.round(maxTemp)}°C.`;
}

export async function GET() {
  const lat = 40.4168;
  const lon = -3.7038;
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weather_code,precipitation_probability_max,temperature_2m_max&forecast_days=1&timezone=auto`;

  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent": "dashboard-ansible-ia/1.0",
      },
      next: { revalidate: 1800 },
    });

    if (!response.ok) {
      return NextResponse.json({ error: "No se pudo obtener el clima." }, { status: 502 });
    }

    const payload = (await response.json()) as WeatherPayload;
    const weatherCode = payload.daily?.weather_code?.[0];
    const rainProbability = payload.daily?.precipitation_probability_max?.[0];
    const maxTemp = payload.daily?.temperature_2m_max?.[0];

    if (weatherCode === undefined || rainProbability === undefined || maxTemp === undefined) {
      return NextResponse.json({ error: "Datos de clima incompletos." }, { status: 502 });
    }

    return NextResponse.json({
      city: "Madrid",
      tip: buildTip(weatherCode, rainProbability, maxTemp),
      rainProbability,
      weatherCode,
      maxTemp,
    });
  } catch {
    return NextResponse.json({ error: "Error al consultar el clima." }, { status: 500 });
  }
}
