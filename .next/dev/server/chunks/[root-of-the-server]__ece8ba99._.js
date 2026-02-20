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
    return {
        email,
        username,
        firstName,
        lastName,
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
            lastName: user.lastName
        }));
}
async function upsertStoredLocalUser(profile, password) {
    const normalizedEmail = normalizeEmail(profile.email);
    const normalizedUsername = normalizeUsername(profile.username);
    const normalizedFirstName = normalizeName(profile.firstName);
    const normalizedLastName = normalizeName(profile.lastName);
    const salt = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["randomBytes"])(16).toString("hex");
    const passwordHash = await hashPassword(password, salt);
    const store = await readStore();
    const nextUsers = store.users.filter((user)=>user.email !== normalizedEmail && user.username !== normalizedUsername);
    nextUsers.push({
        email: normalizedEmail,
        username: normalizedUsername,
        firstName: normalizedFirstName,
        lastName: normalizedLastName,
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
        lastName: user.lastName
    };
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
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$local$2d$user$2d$store$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth/local-user-store.ts [app-route] (ecmascript)");
;
;
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
async function GET() {
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
    try {
        const body = await request.json();
        const username = normalizeUsername(body.username ?? "");
        const firstName = normalizeName(body.firstName ?? "");
        const lastName = normalizeName(body.lastName ?? "");
        const email = normalizeEmail(body.email ?? "");
        const password = body.password?.trim() ?? "";
        if (!username || !firstName || !lastName || !email || !password) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Debes enviar usuario, nombre, apellido, correo y contraseña."
            }, {
                status: 400
            });
        }
        if (!isValidUsername(username)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "El usuario debe tener entre 3 y 32 caracteres (a-z, 0-9, punto, guión o guión bajo)."
            }, {
                status: 400
            });
        }
        if (!isValidEmail(email)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "El correo no tiene formato válido."
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
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$local$2d$user$2d$store$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["upsertStoredLocalUser"])({
            username,
            firstName,
            lastName,
            email
        }, password);
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
async function DELETE(request) {
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

//# sourceMappingURL=%5Broot-of-the-server%5D__ece8ba99._.js.map