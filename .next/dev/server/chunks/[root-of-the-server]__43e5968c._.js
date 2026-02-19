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
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[externals]/node:fs [external] (node:fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:fs", () => require("node:fs"));

module.exports = mod;
}),
"[externals]/node:path [external] (node:path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:path", () => require("node:path"));

module.exports = mod;
}),
"[externals]/node:util [external] (node:util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:util", () => require("node:util"));

module.exports = mod;
}),
"[project]/src/lib/auth/local-user-store.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "listStoredLocalUserEmails",
    ()=>listStoredLocalUserEmails,
    "removeStoredLocalUser",
    ()=>removeStoredLocalUser,
    "upsertStoredLocalUser",
    ()=>upsertStoredLocalUser,
    "verifyStoredLocalUser",
    ()=>verifyStoredLocalUser
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:crypto [external] (node:crypto, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:fs [external] (node:fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$util__$5b$external$5d$__$28$node$3a$util$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:util [external] (node:util, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$kv$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vercel/kv/dist/index.js [app-route] (ecmascript)");
;
;
;
;
;
const scrypt = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$util__$5b$external$5d$__$28$node$3a$util$2c$__cjs$29$__["promisify"])(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["scrypt"]);
const STORE_DIR = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["join"])(process.cwd(), "uploads");
const STORE_PATH = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["join"])(STORE_DIR, "local-users.json");
const KV_USERS_KEY = "dashboard:local-users";
function isVercelKvConfigured() {
    return Boolean(process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN);
}
async function readStoreFromKv() {
    const payload = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$kv$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["kv"].get(KV_USERS_KEY);
    if (!payload || !Array.isArray(payload.users)) {
        return {
            users: []
        };
    }
    return {
        users: payload.users.filter((item)=>typeof item?.email === "string" && typeof item?.passwordHash === "string" && typeof item?.salt === "string")
    };
}
async function writeStoreToKv(data) {
    await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$kv$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["kv"].set(KV_USERS_KEY, data);
}
async function ensureStoreFile() {
    await __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["promises"].mkdir(STORE_DIR, {
        recursive: true
    });
    try {
        await __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["promises"].access(STORE_PATH);
    } catch  {
        const initialData = {
            users: []
        };
        await __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["promises"].writeFile(STORE_PATH, JSON.stringify(initialData, null, 2), "utf8");
    }
}
async function readStore() {
    if (isVercelKvConfigured()) {
        return readStoreFromKv();
    }
    await ensureStoreFile();
    const raw = await __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["promises"].readFile(STORE_PATH, "utf8");
    try {
        const parsed = JSON.parse(raw);
        if (!parsed || !Array.isArray(parsed.users)) {
            return {
                users: []
            };
        }
        return {
            users: parsed.users.filter((item)=>typeof item?.email === "string" && typeof item?.passwordHash === "string" && typeof item?.salt === "string")
        };
    } catch  {
        return {
            users: []
        };
    }
}
async function writeStore(data) {
    if (isVercelKvConfigured()) {
        await writeStoreToKv(data);
        return;
    }
    await ensureStoreFile();
    await __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["promises"].writeFile(STORE_PATH, JSON.stringify(data, null, 2), "utf8");
}
async function hashPassword(password, salt) {
    const derivedKey = await scrypt(password, salt, 64);
    return derivedKey.toString("hex");
}
async function listStoredLocalUserEmails() {
    const store = await readStore();
    return store.users.map((user)=>user.email).sort((a, b)=>a.localeCompare(b));
}
async function upsertStoredLocalUser(email, password) {
    const normalizedEmail = email.trim().toLowerCase();
    const salt = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["randomBytes"])(16).toString("hex");
    const passwordHash = await hashPassword(password, salt);
    const store = await readStore();
    const nextUsers = store.users.filter((user)=>user.email !== normalizedEmail);
    nextUsers.push({
        email: normalizedEmail,
        passwordHash,
        salt
    });
    await writeStore({
        users: nextUsers
    });
}
async function removeStoredLocalUser(email) {
    const normalizedEmail = email.trim().toLowerCase();
    const store = await readStore();
    const nextUsers = store.users.filter((user)=>user.email !== normalizedEmail);
    if (nextUsers.length === store.users.length) {
        return false;
    }
    await writeStore({
        users: nextUsers
    });
    return true;
}
async function verifyStoredLocalUser(email, password) {
    const normalizedEmail = email.trim().toLowerCase();
    const store = await readStore();
    const user = store.users.find((item)=>item.email === normalizedEmail);
    if (!user) {
        return false;
    }
    const providedHash = await hashPassword(password, user.salt);
    const expected = Buffer.from(user.passwordHash, "hex");
    const actual = Buffer.from(providedHash, "hex");
    if (expected.length !== actual.length) {
        return false;
    }
    return (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["timingSafeEqual"])(expected, actual);
}
}),
"[project]/src/lib/auth/local-auth.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "authenticateLocal",
    ()=>authenticateLocal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$local$2d$user$2d$store$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth/local-user-store.ts [app-route] (ecmascript)");
;
function parseLocalUsers() {
    const raw = process.env.LOCAL_AUTH_USERS ?? "";
    if (!raw.trim()) {
        return [];
    }
    return raw.split(";").map((entry)=>entry.trim()).filter(Boolean).map((entry)=>{
        const separator = entry.indexOf(":");
        if (separator <= 0) {
            return null;
        }
        const email = entry.slice(0, separator).trim().toLowerCase();
        const password = entry.slice(separator + 1).trim();
        if (!email || !password) {
            return null;
        }
        return {
            email,
            password
        };
    }).filter((item)=>item !== null);
}
async function authenticateLocal(email, password) {
    const normalizedEmail = email.trim().toLowerCase();
    let storedUserOk = false;
    try {
        storedUserOk = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$local$2d$user$2d$store$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verifyStoredLocalUser"])(normalizedEmail, password);
    } catch  {
        storedUserOk = false;
    }
    if (!storedUserOk) {
        const users = parseLocalUsers();
        const localUser = users.find((user)=>user.email === normalizedEmail);
        if (!localUser || localUser.password !== password) {
            return {
                ok: false,
                error: "Credenciales locales inválidas."
            };
        }
    }
    const user = {
        email: normalizedEmail,
        source: "local"
    };
    return {
        ok: true,
        user
    };
}
}),
"[externals]/node:assert [external] (node:assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:assert", () => require("node:assert"));

module.exports = mod;
}),
"[externals]/node:net [external] (node:net, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:net", () => require("node:net"));

module.exports = mod;
}),
"[externals]/node:tls [external] (node:tls, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:tls", () => require("node:tls"));

module.exports = mod;
}),
"[externals]/node:events [external] (node:events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:events", () => require("node:events"));

module.exports = mod;
}),
"[project]/src/lib/auth/ldap-auth.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "authenticateLdap",
    ()=>authenticateLdap,
    "isLdapEnabled",
    ()=>isLdapEnabled
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ldapts$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ldapts/dist/index.mjs [app-route] (ecmascript)");
;
function getLdapConfig() {
    const url = process.env.LDAP_URL?.trim();
    const baseDn = process.env.LDAP_BASE_DN?.trim();
    if (!url || !baseDn) {
        return null;
    }
    return {
        url,
        baseDn,
        userFilter: process.env.LDAP_USER_FILTER?.trim() || "(mail={{email}})",
        bindDn: process.env.LDAP_BIND_DN?.trim() || undefined,
        bindPassword: process.env.LDAP_BIND_PASSWORD?.trim() || undefined,
        timeoutMs: Number(process.env.LDAP_TIMEOUT_MS ?? 5000)
    };
}
function buildFilter(template, email) {
    return template.replace(/\{\{\s*email\s*\}\}/gi, email);
}
function isLdapEnabled() {
    return getLdapConfig() !== null;
}
async function authenticateLdap(email, password) {
    const config = getLdapConfig();
    if (!config) {
        return {
            ok: false,
            error: "LDAP no está configurado."
        };
    }
    const normalizedEmail = email.trim().toLowerCase();
    const client = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ldapts$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Client"]({
        url: config.url,
        timeout: config.timeoutMs,
        connectTimeout: config.timeoutMs
    });
    try {
        if (config.bindDn && config.bindPassword) {
            await client.bind(config.bindDn, config.bindPassword);
        } else {
            await client.bind(normalizedEmail, password);
            const directUser = {
                email: normalizedEmail,
                source: "ldap"
            };
            return {
                ok: true,
                user: directUser
            };
        }
        const filter = buildFilter(config.userFilter, normalizedEmail);
        const searchResult = await client.search(config.baseDn, {
            scope: "sub",
            filter,
            attributes: [
                "dn",
                "mail"
            ],
            sizeLimit: 1
        });
        const entry = searchResult.searchEntries[0];
        if (!entry || typeof entry.dn !== "string") {
            return {
                ok: false,
                error: "Usuario no encontrado en LDAP."
            };
        }
        const userDn = entry.dn;
        await client.unbind();
        const authClient = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ldapts$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Client"]({
            url: config.url,
            timeout: config.timeoutMs,
            connectTimeout: config.timeoutMs
        });
        try {
            await authClient.bind(userDn, password);
            const user = {
                email: typeof entry.mail === "string" && entry.mail.trim() ? entry.mail.toLowerCase() : normalizedEmail,
                source: "ldap"
            };
            return {
                ok: true,
                user
            };
        } finally{
            await authClient.unbind();
        }
    } catch  {
        return {
            ok: false,
            error: "Credenciales LDAP inválidas o servidor no disponible."
        };
    } finally{
        try {
            await client.unbind();
        } catch  {
        // noop
        }
    }
}
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
"[project]/src/lib/auth/cookies.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearSessionCookie",
    ()=>clearSessionCookie,
    "setSessionCookie",
    ()=>setSessionCookie
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$session$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth/session.ts [app-route] (ecmascript)");
;
function setSessionCookie(response, token) {
    response.cookies.set({
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$session$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getSessionCookieName"])(),
        value: token,
        httpOnly: true,
        secure: ("TURBOPACK compile-time value", "development") === "production",
        sameSite: "lax",
        path: "/",
        maxAge: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$session$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getSessionMaxAge"])()
    });
}
function clearSessionCookie(response) {
    response.cookies.set({
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$session$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getSessionCookieName"])(),
        value: "",
        httpOnly: true,
        secure: ("TURBOPACK compile-time value", "development") === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 0
    });
}
}),
"[project]/src/app/api/auth/login/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$local$2d$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth/local-auth.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$ldap$2d$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth/ldap-auth.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$session$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth/session.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$cookies$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth/cookies.ts [app-route] (ecmascript)");
;
;
;
;
;
async function POST(request) {
    try {
        if (!process.env.AUTH_JWT_SECRET?.trim()) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Falta AUTH_JWT_SECRET en .env.local para crear la sesión."
            }, {
                status: 500
            });
        }
        const body = await request.json();
        const email = body.email?.trim().toLowerCase() ?? "";
        const password = body.password?.trim() ?? "";
        if (!email || !password) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Debes ingresar correo y contraseña."
            }, {
                status: 400
            });
        }
        const localResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$local$2d$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["authenticateLocal"])(email, password);
        if (localResult.ok && localResult.user) {
            const token = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$session$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createSessionToken"])(localResult.user);
            const response = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                ok: true,
                source: "local",
                user: localResult.user
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$cookies$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setSessionCookie"])(response, token);
            return response;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$ldap$2d$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isLdapEnabled"])()) {
            const ldapResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$ldap$2d$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["authenticateLdap"])(email, password);
            if (ldapResult.ok && ldapResult.user) {
                const token = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$session$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createSessionToken"])(ldapResult.user);
                const response = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    ok: true,
                    source: "ldap",
                    user: ldapResult.user
                });
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$cookies$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setSessionCookie"])(response, token);
                return response;
            }
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Credenciales inválidas."
        }, {
            status: 401
        });
    } catch (error) {
        const detail = error instanceof Error && error.message ? error.message : "No se pudo procesar el login.";
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: detail
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__43e5968c._.js.map