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
    "listStoredLocalUsers",
    ()=>listStoredLocalUsers,
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
function normalizeEmail(email) {
    return email.trim().toLowerCase();
}
function normalizeUsername(username) {
    return username.trim().toLowerCase();
}
function normalizeName(value) {
    return value.trim().replace(/\s+/g, " ");
}
function usernameFromEmail(email) {
    const localPart = normalizeEmail(email).split("@")[0] ?? "";
    return normalizeUsername(localPart || "usuario");
}
function normalizeRole(role) {
    return role === "tecnico" ? "tecnico" : "administrativo";
}
function normalizeStoredUser(item) {
    if (typeof item?.email !== "string" || typeof item?.passwordHash !== "string" || typeof item?.salt !== "string") {
        return null;
    }
    const email = normalizeEmail(item.email);
    if (!email) {
        return null;
    }
    const username = typeof item.username === "string" && item.username.trim() ? normalizeUsername(item.username) : usernameFromEmail(email);
    const firstName = typeof item.firstName === "string" ? normalizeName(item.firstName) : "";
    const lastName = typeof item.lastName === "string" ? normalizeName(item.lastName) : "";
    const role = normalizeRole(item.role);
    return {
        email,
        username,
        firstName,
        lastName,
        role,
        passwordHash: item.passwordHash,
        salt: item.salt
    };
}
function sortUsers(users) {
    return [
        ...users
    ].sort((a, b)=>a.username.localeCompare(b.username) || a.email.localeCompare(b.email));
}
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
        users: payload.users.map((item)=>normalizeStoredUser(item)).filter((item)=>item !== null)
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
            users: parsed.users.map((item)=>normalizeStoredUser(item)).filter((item)=>item !== null)
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
    return sortUsers(store.users).map((user)=>user.email);
}
async function listStoredLocalUsers() {
    const store = await readStore();
    return sortUsers(store.users).map((user)=>({
            email: user.email,
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            role: user.role
        }));
}
async function upsertStoredLocalUser(profile, password, previousIdentifier) {
    const normalizedEmail = normalizeEmail(profile.email);
    const normalizedUsername = normalizeUsername(profile.username);
    const normalizedFirstName = normalizeName(profile.firstName);
    const normalizedLastName = normalizeName(profile.lastName);
    const normalizedRole = normalizeRole(profile.role);
    const normalizedPreviousIdentifier = previousIdentifier?.trim().toLowerCase() ?? "";
    const store = await readStore();
    const existingUser = store.users.find((user)=>user.email === normalizedEmail || user.username === normalizedUsername);
    let salt = existingUser?.salt;
    let passwordHash = existingUser?.passwordHash;
    if (password && password.trim()) {
        salt = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["randomBytes"])(16).toString("hex");
        passwordHash = await hashPassword(password, salt);
    }
    if (!salt || !passwordHash) {
        throw new Error("Password is required for new local users.");
    }
    const nextUsers = store.users.filter((user)=>user.email !== normalizedEmail && user.username !== normalizedUsername && user.email !== normalizedPreviousIdentifier && user.username !== normalizedPreviousIdentifier);
    nextUsers.push({
        email: normalizedEmail,
        username: normalizedUsername,
        firstName: normalizedFirstName,
        lastName: normalizedLastName,
        role: normalizedRole,
        passwordHash,
        salt
    });
    await writeStore({
        users: sortUsers(nextUsers)
    });
}
async function removeStoredLocalUser(identifier) {
    const normalizedIdentifier = identifier.trim().toLowerCase();
    const store = await readStore();
    const nextUsers = store.users.filter((user)=>user.email !== normalizedIdentifier && user.username !== normalizedIdentifier);
    if (nextUsers.length === store.users.length) {
        return false;
    }
    await writeStore({
        users: sortUsers(nextUsers)
    });
    return true;
}
async function verifyStoredLocalUser(identifier, password) {
    const normalizedIdentifier = identifier.trim().toLowerCase();
    const store = await readStore();
    const user = store.users.find((item)=>item.email === normalizedIdentifier || item.username === normalizedIdentifier);
    if (!user) {
        return null;
    }
    const providedHash = await hashPassword(password, user.salt);
    const expected = Buffer.from(user.passwordHash, "hex");
    const actual = Buffer.from(providedHash, "hex");
    if (expected.length !== actual.length) {
        return null;
    }
    if (!(0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["timingSafeEqual"])(expected, actual)) {
        return null;
    }
    return {
        email: user.email,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role
    };
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
        source: user.source,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        displayName: user.displayName,
        role: user.role
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
        const username = typeof payload.username === "string" ? payload.username : undefined;
        const firstName = typeof payload.firstName === "string" ? payload.firstName : undefined;
        const lastName = typeof payload.lastName === "string" ? payload.lastName : undefined;
        const displayName = typeof payload.displayName === "string" ? payload.displayName : undefined;
        const role = payload.role === "administrativo" || payload.role === "tecnico" ? payload.role : undefined;
        if (!email || !source) {
            return null;
        }
        return {
            email,
            source,
            username,
            firstName,
            lastName,
            displayName,
            role
        };
    } catch  {
        return null;
    }
}
function getSessionMaxAge() {
    return SESSION_DURATION_SECONDS;
}
}),
"[project]/src/app/api/auth/local-users/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DELETE",
    ()=>DELETE,
    "GET",
    ()=>GET,
    "POST",
    ()=>POST,
    "PUT",
    ()=>PUT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$local$2d$user$2d$store$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth/local-user-store.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$session$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth/session.ts [app-route] (ecmascript)");
;
;
;
;
async function requireAdminSession() {
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
    if (session.role !== "administrativo") {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "No autorizado."
        }, {
            status: 403
        });
    }
    return null;
}
function normalizeEmail(email) {
    return email.trim().toLowerCase();
}
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function normalizeUsername(username) {
    return username.trim().toLowerCase();
}
function normalizeName(value) {
    return value.trim().replace(/\s+/g, " ");
}
function isValidUsername(username) {
    return /^[a-z0-9._-]{3,32}$/.test(username);
}
function normalizeRole(value) {
    return value === "tecnico" ? "tecnico" : "administrativo";
}
function parseProfile(body) {
    return {
        username: normalizeUsername(body.username ?? ""),
        firstName: normalizeName(body.firstName ?? ""),
        lastName: normalizeName(body.lastName ?? ""),
        email: normalizeEmail(body.email ?? ""),
        role: normalizeRole(body.role)
    };
}
function validateProfile(profile) {
    if (!profile.username || !profile.firstName || !profile.lastName || !profile.email) {
        return "Debes enviar usuario, nombre, apellido, correo y rol.";
    }
    if (!isValidUsername(profile.username)) {
        return "El usuario debe tener entre 3 y 32 caracteres (a-z, 0-9, punto, guión o guión bajo).";
    }
    if (!isValidEmail(profile.email)) {
        return "El correo no tiene formato válido.";
    }
    return null;
}
async function GET() {
    const unauthorizedResponse = await requireAdminSession();
    if (unauthorizedResponse) {
        return unauthorizedResponse;
    }
    try {
        const users = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$local$2d$user$2d$store$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["listStoredLocalUsers"])();
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            users
        });
    } catch  {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "No se pudo cargar la lista de usuarios locales."
        }, {
            status: 500
        });
    }
}
async function POST(request) {
    const unauthorizedResponse = await requireAdminSession();
    if (unauthorizedResponse) {
        return unauthorizedResponse;
    }
    try {
        const body = await request.json();
        const profile = parseProfile(body);
        const password = body.password?.trim() ?? "";
        const validationError = validateProfile(profile);
        if (validationError) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: validationError
            }, {
                status: 400
            });
        }
        if (!password) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Debes enviar contraseña."
            }, {
                status: 400
            });
        }
        if (password.length < 8) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "La contraseña debe tener al menos 8 caracteres."
            }, {
                status: 400
            });
        }
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$local$2d$user$2d$store$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["upsertStoredLocalUser"])(profile, password);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: true
        });
    } catch  {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "No se pudo guardar el usuario local."
        }, {
            status: 500
        });
    }
}
async function PUT(request) {
    const unauthorizedResponse = await requireAdminSession();
    if (unauthorizedResponse) {
        return unauthorizedResponse;
    }
    try {
        const body = await request.json();
        const profile = parseProfile(body);
        const previousIdentifier = normalizeUsername(body.identifier ?? "");
        const validationError = validateProfile(profile);
        if (validationError) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: validationError
            }, {
                status: 400
            });
        }
        const password = body.password?.trim();
        if (password && password.length < 8) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "La contraseña debe tener al menos 8 caracteres."
            }, {
                status: 400
            });
        }
        const users = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$local$2d$user$2d$store$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["listStoredLocalUsers"])();
        const existing = users.find((user)=>user.username === previousIdentifier || user.username === profile.username || user.email === profile.email);
        if (!existing) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Usuario no encontrado."
            }, {
                status: 404
            });
        }
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$local$2d$user$2d$store$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["upsertStoredLocalUser"])(profile, password, previousIdentifier || existing.username);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: true
        });
    } catch  {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "No se pudo actualizar el usuario local."
        }, {
            status: 500
        });
    }
}
async function DELETE(request) {
    const unauthorizedResponse = await requireAdminSession();
    if (unauthorizedResponse) {
        return unauthorizedResponse;
    }
    try {
        const body = await request.json();
        const identifier = normalizeUsername(body.identifier ?? body.username ?? body.email ?? "");
        if (!identifier) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Debes indicar el usuario o correo a eliminar."
            }, {
                status: 400
            });
        }
        const removed = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$local$2d$user$2d$store$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["removeStoredLocalUser"])(identifier);
        if (!removed) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Usuario no encontrado."
            }, {
                status: 404
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: true
        });
    } catch  {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "No se pudo eliminar el usuario local."
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__62ec225c._.js.map