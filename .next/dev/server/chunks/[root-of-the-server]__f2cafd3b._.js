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
"[project]/src/app/api/health-summary/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
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
async function GET() {
    const steps = clamp(parseIntegerEnv("HEALTH_STEPS", 7350), 0, 100000);
    const restingHeartRate = clamp(parseIntegerEnv("HEALTH_RESTING_HR", 64), 30, 220);
    const sleepHours = clamp(parseFloatEnv("HEALTH_SLEEP_HOURS", 7.1), 0, 24);
    const standHours = clamp(parseIntegerEnv("HEALTH_STAND_HOURS", 9), 0, 24);
    const response = {
        source: "mock",
        date: new Date().toISOString(),
        steps,
        restingHeartRate,
        sleepHours: Number(sleepHours.toFixed(1)),
        standHours,
        message: buildMessage(steps, restingHeartRate, sleepHours, standHours)
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(response);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f2cafd3b._.js.map