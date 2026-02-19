export type Language = "es" | "en" | "it" | "pt";

export const languageOptions: Array<{ code: Language; label: string }> = [
  { code: "es", label: "ES" },
  { code: "en", label: "EN" },
  { code: "it", label: "IT" },
  { code: "pt", label: "PT" },
];

const supportedLanguages: Language[] = ["es", "en", "it", "pt"];

export function isSupportedLanguage(value: string): value is Language {
  return supportedLanguages.includes(value as Language);
}

export function detectBrowserLanguage(preferredLanguages: string[] = []): Language {
  for (const candidate of preferredLanguages) {
    const normalized = candidate.trim().toLowerCase();
    if (!normalized) {
      continue;
    }

    const primaryCode = normalized.split("-")[0];
    if (isSupportedLanguage(primaryCode)) {
      return primaryCode;
    }
  }

  return "es";
}