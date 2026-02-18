import { commandMappings, type CommandMapping } from "@/config/command-mappings";

function normalize(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokenOverlapScore(transcript: string, alias: string): number {
  const transcriptTokens = new Set(normalize(transcript).split(" ").filter(Boolean));
  const aliasTokens = normalize(alias).split(" ").filter(Boolean);

  if (aliasTokens.length === 0) {
    return 0;
  }

  const matchedTokens = aliasTokens.filter((token) => transcriptTokens.has(token)).length;
  return matchedTokens / aliasTokens.length;
}

export function getSupportedCommands(): string[] {
  return commandMappings.map((mapping) => mapping.id);
}

export function matchCommand(transcript: string): CommandMapping | null {
  const normalizedTranscript = normalize(transcript);
  let best: { mapping: CommandMapping; score: number } | null = null;

  for (const mapping of commandMappings) {
    const directMatch = mapping.aliases.some((alias) => {
      const normalizedAlias = normalize(alias);
      return normalizedAlias.length > 0 && normalizedTranscript.includes(normalizedAlias);
    });

    if (directMatch) {
      return mapping;
    }

    const bestAliasScore = Math.max(
      ...mapping.aliases.map((alias) => tokenOverlapScore(normalizedTranscript, alias)),
      0,
    );

    if (!best || bestAliasScore > best.score) {
      best = { mapping, score: bestAliasScore };
    }
  }

  if (best && best.score >= 0.6) {
    return best.mapping;
  }

  return null;
}
