module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/config/command-mappings.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "commandMappings",
    ()=>commandMappings
]);
const commandMappings = [
    {
        id: "actualizacion-cyberpanel",
        aliases: [
            "actualizacion cyberpanel",
            "actualizar cyberpanel",
            "upgrade cyberpanel",
            "ejecutar actualizacion de cyberpanel",
            "actualiza cyberpanel"
        ],
        templateId: 10,
        templateType: "job"
    },
    {
        id: "actualizacion-wordpress",
        aliases: [
            "actualizacion wordpress",
            "actualizar wordpress",
            "mantenimiento wordpress",
            "actualizar sitios web en wordpress",
            "wordpress core plugins themes"
        ],
        templateId: 11,
        templateType: "job"
    },
    {
        id: "mantenimiento-preventivo-web",
        aliases: [
            "mantenimiento preventivo servidores web",
            "mantenimiento preventivo web",
            "mantenimiento cyberpanel",
            "mantenimiento servidores web",
            "ejecutar mantenimiento preventivo"
        ],
        templateId: 9,
        templateType: "job"
    },
    {
        id: "revision-maquinas-citrix",
        aliases: [
            "revision de maquinas en citrix",
            "revisar maquinas citrix",
            "workflow citrix",
            "ejecutar revision citrix",
            "revision citrix"
        ],
        templateId: 17,
        templateType: "workflow"
    },
    {
        id: "revision-servidor-agv",
        aliases: [
            "revision de servidor agv",
            "revision servidor agv",
            "revisar agv",
            "revisar aguv",
            "workflow agv",
            "revision de agvs"
        ],
        templateId: 22,
        templateType: "workflow"
    }
];
}),
"[project]/src/lib/command-parser.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getSupportedCommands",
    ()=>getSupportedCommands,
    "matchCommand",
    ()=>matchCommand
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$command$2d$mappings$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/command-mappings.ts [app-route] (ecmascript)");
;
function normalize(value) {
    return value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
}
function tokenOverlapScore(transcript, alias) {
    const transcriptTokens = new Set(normalize(transcript).split(" ").filter(Boolean));
    const aliasTokens = normalize(alias).split(" ").filter(Boolean);
    if (aliasTokens.length === 0) {
        return 0;
    }
    const matchedTokens = aliasTokens.filter((token)=>transcriptTokens.has(token)).length;
    return matchedTokens / aliasTokens.length;
}
function getSupportedCommands() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$command$2d$mappings$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["commandMappings"].map((mapping)=>mapping.id);
}
function matchCommand(transcript) {
    const normalizedTranscript = normalize(transcript);
    let best = null;
    for (const mapping of __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$command$2d$mappings$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["commandMappings"]){
        const directMatch = mapping.aliases.some((alias)=>{
            const normalizedAlias = normalize(alias);
            return normalizedAlias.length > 0 && normalizedTranscript.includes(normalizedAlias);
        });
        if (directMatch) {
            return mapping;
        }
        const bestAliasScore = Math.max(...mapping.aliases.map((alias)=>tokenOverlapScore(normalizedTranscript, alias)), 0);
        if (!best || bestAliasScore > best.score) {
            best = {
                mapping,
                score: bestAliasScore
            };
        }
    }
    if (best && best.score >= 0.6) {
        return best.mapping;
    }
    return null;
}
}),
"[project]/src/lib/transcript-corrections.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "applyTranscriptCorrections",
    ()=>applyTranscriptCorrections
]);
const correctionRules = [
    {
        pattern: /\bancible\b/gi,
        replacement: "ansible"
    },
    {
        pattern: /\bansivle\b/gi,
        replacement: "ansible"
    },
    {
        pattern: /\banzible\b/gi,
        replacement: "ansible"
    },
    {
        pattern: /\ban sib le\b/gi,
        replacement: "ansible"
    },
    {
        pattern: /\ba\s*w\s*x\b/gi,
        replacement: "awx"
    },
    {
        pattern: /\ba\s*double\s*u\s*x\b/gi,
        replacement: "awx"
    },
    {
        pattern: /\bau\s*x\b/gi,
        replacement: "awx"
    },
    {
        pattern: /\bseiber\s*panel\b/gi,
        replacement: "cyberpanel"
    },
    {
        pattern: /\bsaiber\s*panel\b/gi,
        replacement: "cyberpanel"
    },
    {
        pattern: /\bciber\s*panel\b/gi,
        replacement: "cyberpanel"
    },
    {
        pattern: /\bcyber\s*panel\b/gi,
        replacement: "cyberpanel"
    },
    {
        pattern: /\bword\s*press\b/gi,
        replacement: "wordpress"
    },
    {
        pattern: /\bguordpress\b/gi,
        replacement: "wordpress"
    },
    {
        pattern: /\bguorpres\b/gi,
        replacement: "wordpress"
    },
    {
        pattern: /\bguorfres\b/gi,
        replacement: "wordpress"
    },
    {
        pattern: /\bworpress\b/gi,
        replacement: "wordpress"
    },
    {
        pattern: /\bcitrixx\b/gi,
        replacement: "citrix"
    },
    {
        pattern: /\bcitrics\b/gi,
        replacement: "citrix"
    },
    {
        pattern: /\bcitris\b/gi,
        replacement: "citrix"
    },
    {
        pattern: /\brevicion\b/gi,
        replacement: "revision"
    },
    {
        pattern: /\brevicionar\b/gi,
        replacement: "revisar"
    },
    {
        pattern: /\bactualisacion\b/gi,
        replacement: "actualizacion"
    },
    {
        pattern: /\bactualisar\b/gi,
        replacement: "actualizar"
    },
    {
        pattern: /\bmantinimiento\b/gi,
        replacement: "mantenimiento"
    },
    {
        pattern: /\bprebentivo\b/gi,
        replacement: "preventivo"
    },
    {
        pattern: /\bserbidor\b/gi,
        replacement: "servidor"
    },
    {
        pattern: /\bmaqunas\b/gi,
        replacement: "maquinas"
    },
    {
        pattern: /\bmaqinas\b/gi,
        replacement: "maquinas"
    },
    {
        pattern: /\baguv\b/gi,
        replacement: "agv"
    },
    {
        pattern: /\bagibe\b/gi,
        replacement: "agv"
    },
    {
        pattern: /\bagi\s*ve\b/gi,
        replacement: "agv"
    }
];
function preserveWordCase(source, replacement) {
    if (source.toUpperCase() === source) {
        return replacement.toUpperCase();
    }
    if (source[0]?.toUpperCase() === source[0]) {
        return replacement[0].toUpperCase() + replacement.slice(1);
    }
    return replacement;
}
function applyTranscriptCorrections(input) {
    let corrected = input;
    for (const rule of correctionRules){
        corrected = corrected.replace(rule.pattern, (matchedWord)=>preserveWordCase(matchedWord, rule.replacement));
    }
    return corrected.replace(/\s+/g, " ").trim();
}
}),
"[project]/src/app/api/execute/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$command$2d$parser$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/command-parser.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$transcript$2d$corrections$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/transcript-corrections.ts [app-route] (ecmascript)");
;
;
;
const whisperUrl = process.env.WHISPER_SERVER_URL ?? "http://127.0.0.1:5000";
const awxBaseUrl = process.env.AWX_BASE_URL;
const awxToken = process.env.AWX_API_TOKEN;
function buildAuthHeaders() {
    if (!awxToken) {
        return null;
    }
    return {
        Authorization: `Bearer ${awxToken}`,
        "Content-Type": "application/json"
    };
}
function extractTemplateId(transcript) {
    const normalized = transcript.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const match = normalized.match(/(?:template|plantilla)\s*(?:id\s*)?(\d{1,8})/i);
    if (!match) {
        return null;
    }
    const parsed = Number(match[1]);
    return Number.isInteger(parsed) && parsed > 0 ? parsed : null;
}
function extractAwxErrorDetail(payload) {
    if (!payload || typeof payload !== "object") {
        return null;
    }
    const data = payload;
    const candidates = [
        data.detail,
        data.msg,
        data.error,
        data.non_field_errors
    ];
    for (const item of candidates){
        if (typeof item === "string" && item.trim()) {
            return item;
        }
        if (Array.isArray(item) && item.length > 0 && typeof item[0] === "string") {
            return item[0];
        }
    }
    for (const [key, value] of Object.entries(data)){
        if (typeof value === "string" && value.trim()) {
            return `${key}: ${value}`;
        }
        if (Array.isArray(value) && value.length > 0 && typeof value[0] === "string") {
            return `${key}: ${value[0]}`;
        }
    }
    return null;
}
async function POST(request) {
    try {
        if (!awxBaseUrl || !awxToken) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Faltan variables AWX_BASE_URL o AWX_API_TOKEN. Revisa el archivo .env.local."
            }, {
                status: 500
            });
        }
        const inputForm = await request.formData();
        const audioFile = inputForm.get("audio");
        const transcriptHintRaw = inputForm.get("transcriptHint");
        const transcriptHint = typeof transcriptHintRaw === "string" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$transcript$2d$corrections$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["applyTranscriptCorrections"])(transcriptHintRaw) : "";
        if (!(audioFile instanceof File)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "No se recibió audio para procesar."
            }, {
                status: 400
            });
        }
        const whisperForm = new FormData();
        whisperForm.append("audio", audioFile, audioFile.name || "voice-command.webm");
        const transcriptionResponse = await fetch(`${whisperUrl}/transcribe`, {
            method: "POST",
            body: whisperForm
        });
        const transcriptionData = await transcriptionResponse.json();
        if (!transcriptionResponse.ok) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: transcriptionData.error ?? "Error transcribiendo audio."
            }, {
                status: transcriptionResponse.status
            });
        }
        const whisperTranscript = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$transcript$2d$corrections$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["applyTranscriptCorrections"])(transcriptionData.text ?? "");
        const transcript = whisperTranscript || transcriptHint;
        if (!transcript) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "No se detectó texto en el audio."
            }, {
                status: 422
            });
        }
        const directTemplateId = extractTemplateId(transcript);
        const matched = directTemplateId ? {
            id: `template-${directTemplateId}`,
            aliases: [],
            templateId: directTemplateId,
            templateType: "job"
        } : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$command$2d$parser$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["matchCommand"])(transcript);
        if (!matched) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "No se encontró un comando compatible con la voz detectada.",
                transcript,
                supportedCommands: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$command$2d$parser$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getSupportedCommands"])()
            }, {
                status: 422
            });
        }
        const headers = buildAuthHeaders();
        if (!headers) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "No se pudo construir autenticación para AWX."
            }, {
                status: 500
            });
        }
        const baseUrl = awxBaseUrl.replace(/\/$/, "");
        const launchPath = matched.templateType === "workflow" ? `/api/v2/workflow_job_templates/${matched.templateId}/launch/` : `/api/v2/job_templates/${matched.templateId}/launch/`;
        const launchUrl = `${baseUrl}${launchPath}`;
        const launchPayload = matched.templateType === "workflow" ? {} : {
            extra_vars: {
                source: "voice-command",
                transcript,
                ...matched.extraVars ?? {}
            }
        };
        let launchResponse;
        try {
            launchResponse = await fetch(launchUrl, {
                method: "POST",
                headers,
                body: JSON.stringify(launchPayload),
                signal: AbortSignal.timeout(15000)
            });
        } catch (launchError) {
            const detail = launchError instanceof Error ? launchError.message : "No fue posible conectar con AWX.";
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: `Fallo de conexión con AWX: ${detail}`,
                transcript,
                matchedCommand: matched.id,
                templateId: matched.templateId
            }, {
                status: 502
            });
        }
        const launchRaw = await launchResponse.text();
        let launchData = {};
        let launchResponsePayload = launchRaw;
        try {
            launchResponsePayload = JSON.parse(launchRaw);
            launchData = launchResponsePayload;
        } catch  {
            launchResponsePayload = launchRaw;
        }
        if (!launchResponse.ok || !launchData.id) {
            const awxDetail = extractAwxErrorDetail(launchResponsePayload);
            const fallbackBody = typeof launchResponsePayload === "string" && launchResponsePayload.trim() ? launchResponsePayload.slice(0, 300) : "Sin detalle";
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: `AWX rechazó la ejecución del template (HTTP ${launchResponse.status}). ${awxDetail ?? fallbackBody}`,
                transcript,
                matchedCommand: matched.id,
                templateId: matched.templateId
            }, {
                status: launchResponse.status || 500
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            transcript,
            matchedCommand: matched.id,
            templateId: matched.templateId,
            templateType: matched.templateType,
            jobId: launchData.id,
            awxUrl: matched.templateType === "workflow" ? `${baseUrl}/#/jobs/workflow/${launchData.id}` : `${baseUrl}/#/jobs/playbook/${launchData.id}`
        });
    } catch (error) {
        const detail = error instanceof Error ? error.message : "Error inesperado";
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: `No se pudo ejecutar el flujo de voz a AWX. ${detail}`
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__dbafe2a0._.js.map