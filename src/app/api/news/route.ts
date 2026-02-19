import { NextResponse } from "next/server";

type NewsTopic = "general" | "politica" | "economia" | "tecnologia" | "deportes";

type NewsItem = {
  title: string;
  link: string;
  source?: string;
  pubDate?: string;
};

const topicQueries: Record<NewsTopic, string> = {
  general: "España últimas noticias",
  politica: "España política",
  economia: "España economía",
  tecnologia: "España tecnología",
  deportes: "España deportes",
};

function isNewsTopic(value: string): value is NewsTopic {
  return value in topicQueries;
}

function decodeEntities(value: string): string {
  return value
    .replace(/<!\[CDATA\[(.*?)\]\]>/g, "$1")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .trim();
}

function extractTag(content: string, tag: string): string {
  const regex = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`, "i");
  const match = content.match(regex);
  return match ? decodeEntities(match[1]) : "";
}

function parseRssItems(xml: string): NewsItem[] {
  const items: NewsItem[] = [];
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  let match = itemRegex.exec(xml);

  while (match && items.length < 5) {
    const content = match[1];
    const title = extractTag(content, "title");
    const link = extractTag(content, "link");
    const source = extractTag(content, "source") || undefined;
    const pubDate = extractTag(content, "pubDate") || undefined;

    if (title && link) {
      items.push({ title, link, source, pubDate });
    }

    match = itemRegex.exec(xml);
  }

  return items;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const rawTopic = searchParams.get("topic") ?? "general";
  const topic: NewsTopic = isNewsTopic(rawTopic) ? rawTopic : "general";

  const query = topicQueries[topic];
  const rssUrl = `https://news.google.com/rss/search?q=${encodeURIComponent(query)}&hl=es&gl=ES&ceid=ES:es`;

  try {
    const response = await fetch(rssUrl, {
      headers: {
        "User-Agent": "dashboard-ansible-ia/1.0",
      },
      next: { revalidate: 300 },
    });

    if (!response.ok) {
      return NextResponse.json({ error: "No se pudieron obtener noticias." }, { status: 502 });
    }

    const xml = await response.text();
    const items = parseRssItems(xml);

    if (!items.length) {
      return NextResponse.json({ error: "No se encontraron titulares para este tema." }, { status: 404 });
    }

    return NextResponse.json({ topic, items });
  } catch {
    return NextResponse.json({ error: "Error al consultar noticias." }, { status: 500 });
  }
}