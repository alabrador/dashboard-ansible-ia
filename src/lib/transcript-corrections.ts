type CorrectionRule = {
  pattern: RegExp;
  replacement: string;
};

const correctionRules: CorrectionRule[] = [
  { pattern: /\bancible\b/gi, replacement: "ansible" },
  { pattern: /\bansivle\b/gi, replacement: "ansible" },
  { pattern: /\banzible\b/gi, replacement: "ansible" },
  { pattern: /\ban sib le\b/gi, replacement: "ansible" },
  { pattern: /\ba\s*w\s*x\b/gi, replacement: "awx" },
  { pattern: /\ba\s*double\s*u\s*x\b/gi, replacement: "awx" },
  { pattern: /\bau\s*x\b/gi, replacement: "awx" },
  { pattern: /\bseiber\s*panel\b/gi, replacement: "cyberpanel" },
  { pattern: /\bsaiber\s*panel\b/gi, replacement: "cyberpanel" },
  { pattern: /\bciber\s*panel\b/gi, replacement: "cyberpanel" },
  { pattern: /\bcyber\s*panel\b/gi, replacement: "cyberpanel" },
  { pattern: /\bword\s*press\b/gi, replacement: "wordpress" },
  { pattern: /\bguordpress\b/gi, replacement: "wordpress" },
  { pattern: /\bguorpres\b/gi, replacement: "wordpress" },
  { pattern: /\bguorfres\b/gi, replacement: "wordpress" },
  { pattern: /\bworpress\b/gi, replacement: "wordpress" },
  { pattern: /\bcitrixx\b/gi, replacement: "citrix" },
  { pattern: /\bcitrics\b/gi, replacement: "citrix" },
  { pattern: /\bcitris\b/gi, replacement: "citrix" },
  { pattern: /\brevicion\b/gi, replacement: "revision" },
  { pattern: /\brevicionar\b/gi, replacement: "revisar" },
  { pattern: /\bactualisacion\b/gi, replacement: "actualizacion" },
  { pattern: /\bactualisar\b/gi, replacement: "actualizar" },
  { pattern: /\bmantinimiento\b/gi, replacement: "mantenimiento" },
  { pattern: /\bprebentivo\b/gi, replacement: "preventivo" },
  { pattern: /\bserbidor\b/gi, replacement: "servidor" },
  { pattern: /\bmaqunas\b/gi, replacement: "maquinas" },
  { pattern: /\bmaqinas\b/gi, replacement: "maquinas" },
  { pattern: /\baguv\b/gi, replacement: "agv" },
  { pattern: /\bagibe\b/gi, replacement: "agv" },
  { pattern: /\bagi\s*ve\b/gi, replacement: "agv" },
];

function preserveWordCase(source: string, replacement: string): string {
  if (source.toUpperCase() === source) {
    return replacement.toUpperCase();
  }

  if (source[0]?.toUpperCase() === source[0]) {
    return replacement[0].toUpperCase() + replacement.slice(1);
  }

  return replacement;
}

export function applyTranscriptCorrections(input: string): string {
  let corrected = input;

  for (const rule of correctionRules) {
    corrected = corrected.replace(rule.pattern, (matchedWord) =>
      preserveWordCase(matchedWord, rule.replacement),
    );
  }

  return corrected.replace(/\s+/g, " ").trim();
}