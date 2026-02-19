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
"[project]/src/lib/auth/session.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createSessionToken",
    ()=>createSessionToken,
    "getSessionCookieName",
    ()=>getSessionCookieName,
    "getSessionMaxAge",
    ()=>getSessionMaxAge,
    "verifySessionToken",
    ()=>verifySessionToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$verify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/webapi/jwt/verify.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$sign$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/webapi/jwt/sign.js [app-route] (ecmascript)");
;
const SESSION_COOKIE_NAME = "dashboard_session";
const SESSION_DURATION_SECONDS = 60 * 60 * 12;
function getJwtSecret() {
    const secret = process.env.AUTH_JWT_SECRET;
    if (!secret) {
        throw new Error("Falta AUTH_JWT_SECRET en variables de entorno.");
    }
    return new TextEncoder().encode(secret);
}
function getSessionCookieName() {
    return SESSION_COOKIE_NAME;
}
async function createSessionToken(user) {
    const secret = getJwtSecret();
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$sign$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SignJWT"]({
        email: user.email,
        source: user.source
    }).setProtectedHeader({
        alg: "HS256"
    }).setSubject(user.email).setIssuedAt().setExpirationTime(`${SESSION_DURATION_SECONDS}s`).sign(secret);
}
async function verifySessionToken(token) {
    try {
        const secret = getJwtSecret();
        const { payload } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$verify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jwtVerify"])(token, secret);
        const email = typeof payload.email === "string" ? payload.email : null;
        const source = payload.source === "ldap" || payload.source === "local" ? payload.source : null;
        if (!email || !source) {
            return null;
        }
        return {
            email,
            source
        };
    } catch  {
        return null;
    }
}
function getSessionMaxAge() {
    return SESSION_DURATION_SECONDS;
}
}),
"[externals]/node:fs [external] (node:fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:fs", () => require("node:fs"));

module.exports = mod;
}),
"[externals]/node:path [external] (node:path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:path", () => require("node:path"));

module.exports = mod;
}),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[project]/src/lib/health/summary-store.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "readStoredHealthSummary",
    ()=>readStoredHealthSummary,
    "writeStoredHealthSummary",
    ()=>writeStoredHealthSummary
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:fs [external] (node:fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$kv$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vercel/kv/dist/index.js [app-route] (ecmascript)");
;
;
;
const STORE_DIR = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["join"])(process.cwd(), "uploads");
const STORE_PATH = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["join"])(STORE_DIR, "health-summary.json");
const KV_HEALTH_KEY = "dashboard:health-summary";
function isVercelKvConfigured() {
    return Boolean(process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN);
}
function isValidHealthSummary(payload) {
    if (!payload || typeof payload !== "object") {
        return false;
    }
    const item = payload;
    return (item.source === "mock" || item.source === "shortcut") && typeof item.date === "string" && typeof item.steps === "number" && typeof item.restingHeartRate === "number" && typeof item.sleepHours === "number" && typeof item.standHours === "number" && typeof item.message === "string";
}
async function readFromKv() {
    const payload = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$kv$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["kv"].get(KV_HEALTH_KEY);
    if (!isValidHealthSummary(payload)) {
        return null;
    }
    return payload;
}
async function writeToKv(summary) {
    await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$kv$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["kv"].set(KV_HEALTH_KEY, summary);
}
async function ensureStoreFile() {
    await __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["promises"].mkdir(STORE_DIR, {
        recursive: true
    });
    try {
        await __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["promises"].access(STORE_PATH);
    } catch  {
        await __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["promises"].writeFile(STORE_PATH, "", "utf8");
    }
}
async function readFromFile() {
    await ensureStoreFile();
    const raw = await __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["promises"].readFile(STORE_PATH, "utf8");
    if (!raw.trim()) {
        return null;
    }
    try {
        const payload = JSON.parse(raw);
        if (!isValidHealthSummary(payload)) {
            return null;
        }
        return payload;
    } catch  {
        return null;
    }
}
async function writeToFile(summary) {
    await ensureStoreFile();
    await __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["promises"].writeFile(STORE_PATH, JSON.stringify(summary, null, 2), "utf8");
}
async function readStoredHealthSummary() {
    if (isVercelKvConfigured()) {
        return readFromKv();
    }
    return readFromFile();
}
async function writeStoredHealthSummary(summary) {
    if (isVercelKvConfigured()) {
        await writeToKv(summary);
        return;
    }
    await writeToFile(summary);
}
}),
"[project]/src/app/api/health-summary/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$session$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth/session.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$health$2f$summary$2d$store$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/health/summary-store.ts [app-route] (ecmascript)");
;
;
;
;
function parseIntegerEnv(name, fallback) {
    const raw = process.env[name]?.trim();
    if (!raw) {
        return fallback;
    }
    const parsed = Number.parseInt(raw, 10);
    if (!Number.isFinite(parsed)) {
        return fallback;
    }
    return parsed;
}
function parseFloatEnv(name, fallback) {
    const raw = process.env[name]?.trim();
    if (!raw) {
        return fallback;
    }
    const parsed = Number.parseFloat(raw);
    if (!Number.isFinite(parsed)) {
        return fallback;
    }
    return parsed;
}
function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
}
function buildMessage(steps, restingHeartRate, sleepHours, standHours) {
    const stepStatus = steps >= 8000 ? "buen nivel de actividad" : "actividad baja";
    const sleepStatus = sleepHours >= 7 ? "descanso adecuado" : "podrías dormir un poco más";
    const heartStatus = restingHeartRate <= 70 ? "pulso en rango cómodo" : "pulso algo elevado";
    return `Hoy: ${stepStatus}, ${sleepStatus} y ${heartStatus}.`;
}
function buildDefaultSummary() {
    const steps = clamp(parseIntegerEnv("HEALTH_STEPS", 7350), 0, 100000);
    const restingHeartRate = clamp(parseIntegerEnv("HEALTH_RESTING_HR", 64), 30, 220);
    const sleepHours = clamp(parseFloatEnv("HEALTH_SLEEP_HOURS", 7.1), 0, 24);
    const standHours = clamp(parseIntegerEnv("HEALTH_STAND_HOURS", 9), 0, 24);
    return {
        source: "mock",
        date: new Date().toISOString(),
        steps,
        restingHeartRate,
        sleepHours: Number(sleepHours.toFixed(1)),
        standHours,
        message: buildMessage(steps, restingHeartRate, sleepHours, standHours)
    };
}
function getProvidedIngestToken(request) {
    const rawHeaderToken = request.headers.get("x-health-ingest-token")?.trim();
    if (rawHeaderToken) {
        return rawHeaderToken;
    }
    const authorization = request.headers.get("authorization")?.trim() ?? "";
    const bearerPrefix = "bearer ";
    if (authorization.toLowerCase().startsWith(bearerPrefix)) {
        return authorization.slice(bearerPrefix.length).trim();
    }
    return "";
}
function toResponse(summary) {
    return {
        source: summary.source,
        date: summary.date,
        steps: summary.steps,
        restingHeartRate: summary.restingHeartRate,
        sleepHours: summary.sleepHours,
        standHours: summary.standHours,
        message: summary.message
    };
}
async function GET() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])();
    const token = cookieStore.get((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$session$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getSessionCookieName"])())?.value;
    if (!token) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "No autenticado."
        }, {
            status: 401
        });
    }
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$session$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verifySessionToken"])(token);
    if (!session) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Sesión inválida."
        }, {
            status: 401
        });
    }
    try {
        const stored = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$health$2f$summary$2d$store$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["readStoredHealthSummary"])();
        if (stored) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(toResponse(stored));
        }
    } catch  {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "No se pudo leer el resumen de salud."
        }, {
            status: 500
        });
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(buildDefaultSummary());
}
async function POST(request) {
    const expectedToken = process.env.HEALTH_INGEST_TOKEN?.trim() ?? "";
    if (!expectedToken) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Falta HEALTH_INGEST_TOKEN para aceptar datos externos de salud."
        }, {
            status: 500
        });
    }
    const providedToken = getProvidedIngestToken(request);
    if (!providedToken || providedToken !== expectedToken) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Token de ingesta inválido."
        }, {
            status: 401
        });
    }
    const body = await request.json();
    const fallback = buildDefaultSummary();
    const current = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$health$2f$summary$2d$store$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["readStoredHealthSummary"])() ?? fallback;
    const nextSteps = clamp(typeof body.steps === "number" ? Math.round(body.steps) : current.steps, 0, 100000);
    const nextRestingHeartRate = clamp(typeof body.restingHeartRate === "number" ? Math.round(body.restingHeartRate) : current.restingHeartRate, 30, 220);
    const nextSleepHours = clamp(typeof body.sleepHours === "number" ? body.sleepHours : current.sleepHours, 0, 24);
    const nextStandHours = clamp(typeof body.standHours === "number" ? Math.round(body.standHours) : current.standHours, 0, 24);
    const nextMessage = typeof body.message === "string" && body.message.trim() ? body.message.trim() : buildMessage(nextSteps, nextRestingHeartRate, nextSleepHours, nextStandHours);
    const nextSummary = {
        source: "shortcut",
        date: new Date().toISOString(),
        steps: nextSteps,
        restingHeartRate: nextRestingHeartRate,
        sleepHours: Number(nextSleepHours.toFixed(1)),
        standHours: nextStandHours,
        message: nextMessage
    };
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$health$2f$summary$2d$store$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["writeStoredHealthSummary"])(nextSummary);
    } catch  {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "No se pudo guardar el resumen de salud."
        }, {
            status: 500
        });
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        ok: true,
        summary: toResponse(nextSummary)
    });
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__14db2125._.js.map