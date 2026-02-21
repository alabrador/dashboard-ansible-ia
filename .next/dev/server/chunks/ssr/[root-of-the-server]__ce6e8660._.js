module.exports = [
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

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
"[project]/src/lang/core.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "detectBrowserLanguage",
    ()=>detectBrowserLanguage,
    "isSupportedLanguage",
    ()=>isSupportedLanguage,
    "languageOptions",
    ()=>languageOptions
]);
const languageOptions = [
    {
        code: "es",
        label: "🇪🇸 ES"
    },
    {
        code: "en",
        label: "🇺🇸 EN"
    },
    {
        code: "it",
        label: "🇮🇹 IT"
    },
    {
        code: "pt",
        label: "🇵🇹 PT"
    }
];
const supportedLanguages = [
    "es",
    "en",
    "it",
    "pt"
];
function isSupportedLanguage(value) {
    return supportedLanguages.includes(value);
}
function detectBrowserLanguage(preferredLanguages = []) {
    for (const candidate of preferredLanguages){
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
}),
"[project]/src/lang/ldap-settings.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ldapSettingsTranslations",
    ()=>ldapSettingsTranslations
]);
const ldapSettingsTranslations = {
    es: {
        logoAlt: "Logo",
        languageSelectAria: "Cambiar idioma",
        settingsMenuAria: "Abrir menú de configuración",
        userMenuAria: "Abrir menú de usuario",
        menuGoApp: "Ir a la app",
        menuUsers: "Gestión de usuarios",
        menuLdapSettings: "Configuración LDAP",
        menuAnsibleSettings: "Configuración Ansible",
        menuWhisperSettings: "Configuración Whisper",
        currentUserLabel: "Usuario",
        unknownUser: "Sin usuario",
        signOut: "Cerrar sesión",
        signOutError: "No se pudo cerrar sesión.",
        themeToggleAria: "Cambiar tema",
        themeLight: "☀️ Claro",
        themeDark: "🌙 Oscuro",
        headerTag: "Administración",
        headerTitle: "Configuración LDAP",
        headerDescription: "Configura conexión LDAP desde la interfaz y valida conectividad.",
        sectionConfig: "Parámetros LDAP",
        ldapUrlLabel: "URL LDAP",
        baseDnLabel: "Base DN",
        userFilterLabel: "Filtro de usuario",
        bindDnLabel: "Bind DN",
        bindPasswordLabel: "Bind Password",
        timeoutLabel: "Timeout (ms)",
        adminEmailsLabel: "Correos admin LDAP (separados por ';')",
        save: "Guardar",
        testConnection: "Probar conexión",
        loading: "Cargando...",
        loadError: "No se pudo cargar la configuración LDAP.",
        saveSuccess: "Configuración LDAP guardada.",
        saveError: "No se pudo guardar la configuración LDAP.",
        testSuccess: "Conexión LDAP exitosa.",
        testError: "No se pudo validar la conexión LDAP."
    },
    en: {
        logoAlt: "Logo",
        languageSelectAria: "Change language",
        settingsMenuAria: "Open settings menu",
        userMenuAria: "Open user menu",
        menuGoApp: "Go to app",
        menuUsers: "User management",
        menuLdapSettings: "LDAP settings",
        menuAnsibleSettings: "Ansible settings",
        menuWhisperSettings: "Whisper settings",
        currentUserLabel: "User",
        unknownUser: "No user",
        signOut: "Sign out",
        signOutError: "Could not sign out.",
        themeToggleAria: "Toggle theme",
        themeLight: "☀️ Light",
        themeDark: "🌙 Dark",
        headerTag: "Administration",
        headerTitle: "LDAP settings",
        headerDescription: "Configure LDAP from UI and test connectivity.",
        sectionConfig: "LDAP parameters",
        ldapUrlLabel: "LDAP URL",
        baseDnLabel: "Base DN",
        userFilterLabel: "User filter",
        bindDnLabel: "Bind DN",
        bindPasswordLabel: "Bind Password",
        timeoutLabel: "Timeout (ms)",
        adminEmailsLabel: "LDAP admin emails (semicolon-separated)",
        save: "Save",
        testConnection: "Test connection",
        loading: "Loading...",
        loadError: "Could not load LDAP configuration.",
        saveSuccess: "LDAP configuration saved.",
        saveError: "Could not save LDAP configuration.",
        testSuccess: "LDAP connection successful.",
        testError: "Could not validate LDAP connection."
    },
    it: {
        logoAlt: "Logo",
        languageSelectAria: "Cambia lingua",
        settingsMenuAria: "Apri menu impostazioni",
        userMenuAria: "Apri menu utente",
        menuGoApp: "Vai all'app",
        menuUsers: "Gestione utenti",
        menuLdapSettings: "Configurazione LDAP",
        menuAnsibleSettings: "Configurazione Ansible",
        menuWhisperSettings: "Configurazione Whisper",
        currentUserLabel: "Utente",
        unknownUser: "Nessun utente",
        signOut: "Esci",
        signOutError: "Impossibile uscire.",
        themeToggleAria: "Cambia tema",
        themeLight: "☀️ Chiaro",
        themeDark: "🌙 Scuro",
        headerTag: "Amministrazione",
        headerTitle: "Configurazione LDAP",
        headerDescription: "Configura LDAP dall'interfaccia e verifica la connettività.",
        sectionConfig: "Parametri LDAP",
        ldapUrlLabel: "URL LDAP",
        baseDnLabel: "Base DN",
        userFilterLabel: "Filtro utente",
        bindDnLabel: "Bind DN",
        bindPasswordLabel: "Bind Password",
        timeoutLabel: "Timeout (ms)",
        adminEmailsLabel: "Email admin LDAP (separate da ';')",
        save: "Salva",
        testConnection: "Test connessione",
        loading: "Caricamento...",
        loadError: "Impossibile caricare la configurazione LDAP.",
        saveSuccess: "Configurazione LDAP salvata.",
        saveError: "Impossibile salvare la configurazione LDAP.",
        testSuccess: "Connessione LDAP riuscita.",
        testError: "Impossibile validare la connessione LDAP."
    },
    pt: {
        logoAlt: "Logo",
        languageSelectAria: "Alterar idioma",
        settingsMenuAria: "Abrir menu de configurações",
        userMenuAria: "Abrir menu do usuário",
        menuGoApp: "Ir para o app",
        menuUsers: "Gestão de usuários",
        menuLdapSettings: "Configuração LDAP",
        menuAnsibleSettings: "Configuração Ansible",
        menuWhisperSettings: "Configuração Whisper",
        currentUserLabel: "Usuário",
        unknownUser: "Sem usuário",
        signOut: "Sair",
        signOutError: "Não foi possível encerrar a sessão.",
        themeToggleAria: "Alternar tema",
        themeLight: "☀️ Claro",
        themeDark: "🌙 Escuro",
        headerTag: "Administração",
        headerTitle: "Configuração LDAP",
        headerDescription: "Configure LDAP pela interface e teste conectividade.",
        sectionConfig: "Parâmetros LDAP",
        ldapUrlLabel: "URL LDAP",
        baseDnLabel: "Base DN",
        userFilterLabel: "Filtro de usuário",
        bindDnLabel: "Bind DN",
        bindPasswordLabel: "Bind Password",
        timeoutLabel: "Timeout (ms)",
        adminEmailsLabel: "E-mails admin LDAP (separados por ';')",
        save: "Salvar",
        testConnection: "Testar conexão",
        loading: "Carregando...",
        loadError: "Não foi possível carregar a configuração LDAP.",
        saveSuccess: "Configuração LDAP salva.",
        saveError: "Não foi possível salvar a configuração LDAP.",
        testSuccess: "Conexão LDAP bem-sucedida.",
        testError: "Não foi possível validar a conexão LDAP."
    }
};
}),
"[project]/src/app/settings/ldap/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LdapSettingsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lang$2f$core$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lang/core.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lang$2f$ldap$2d$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lang/ldap-settings.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function LdapSettingsPage() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("dark");
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("es");
    const [isThemeInitialized, setIsThemeInitialized] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSessionReady, setIsSessionReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSettingsMenuOpen, setIsSettingsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [userEmail, setUserEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [userDisplayName, setUserDisplayName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [userRole, setUserRole] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [url, setUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [baseDn, setBaseDn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [userFilter, setUserFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("(mail={{email}})");
    const [bindDn, setBindDn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [bindPassword, setBindPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [timeoutMs, setTimeoutMs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("5000");
    const [adminEmails, setAdminEmails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const settingsMenuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const userMenuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const t = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lang$2f$ldap$2d$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ldapSettingsTranslations"][language];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) {
            return;
        }
        //TURBOPACK unreachable
        ;
        const savedLanguage = undefined;
        const savedTheme = undefined;
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) {
            return;
        }
        //TURBOPACK unreachable
        ;
    }, [
        language
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) {
            return;
        }
        //TURBOPACK unreachable
        ;
    }, [
        isThemeInitialized,
        theme
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleDocumentPointerDown = (event)=>{
            const target = event.target;
            if (!(target instanceof Node)) {
                return;
            }
            const clickedSettingsMenu = settingsMenuRef.current?.contains(target) ?? false;
            const clickedUserMenu = userMenuRef.current?.contains(target) ?? false;
            if (!clickedSettingsMenu && !clickedUserMenu) {
                setIsSettingsMenuOpen(false);
                setIsUserMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handleDocumentPointerDown);
        return ()=>{
            document.removeEventListener("mousedown", handleDocumentPointerDown);
        };
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const loadAll = async ()=>{
            try {
                const sessionResponse = await fetch("/api/auth/session", {
                    cache: "no-store"
                });
                if (!sessionResponse.ok) {
                    setIsSessionReady(true);
                    router.replace("/login");
                    return;
                }
                const sessionPayload = await sessionResponse.json();
                const role = sessionPayload.user?.role;
                if (!sessionPayload.authenticated || role !== "administrativo") {
                    setIsSessionReady(true);
                    router.replace("/");
                    return;
                }
                setUserRole(role);
                setUserEmail(sessionPayload.user?.email?.trim() ?? "");
                setUserDisplayName(sessionPayload.user?.displayName?.trim() ?? "");
                const configResponse = await fetch("/api/auth/ldap-config", {
                    cache: "no-store"
                });
                const configPayload = await configResponse.json();
                if (!configResponse.ok) {
                    setError(configPayload.error ?? t.loadError);
                    setIsSessionReady(true);
                    return;
                }
                if (configPayload.config) {
                    setUrl(configPayload.config.url?.trim() ?? "");
                    setBaseDn(configPayload.config.baseDn?.trim() ?? "");
                    setUserFilter(configPayload.config.userFilter?.trim() || "(mail={{email}})");
                    setBindDn(configPayload.config.bindDn?.trim() ?? "");
                    setBindPassword(configPayload.config.bindPassword ?? "");
                    setTimeoutMs(String(configPayload.config.timeoutMs ?? 5000));
                    setAdminEmails(configPayload.config.adminEmails ?? "");
                }
                setIsSessionReady(true);
            } catch  {
                setError(t.loadError);
                setIsSessionReady(true);
            }
        };
        void loadAll();
    }, [
        router,
        t.loadError
    ]);
    const handleSave = async ()=>{
        setIsLoading(true);
        setError("");
        setMessage("");
        try {
            const response = await fetch("/api/auth/ldap-config", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    url,
                    baseDn,
                    userFilter,
                    bindDn,
                    bindPassword,
                    timeoutMs: Number(timeoutMs),
                    adminEmails
                })
            });
            const payload = await response.json();
            if (!response.ok || !payload.ok) {
                setError(payload.error ?? t.saveError);
                return;
            }
            setMessage(t.saveSuccess);
        } catch  {
            setError(t.saveError);
        } finally{
            setIsLoading(false);
        }
    };
    const handleTest = async ()=>{
        setIsLoading(true);
        setError("");
        setMessage("");
        try {
            const response = await fetch("/api/auth/ldap-config/test", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    url,
                    baseDn,
                    userFilter,
                    bindDn,
                    bindPassword,
                    timeoutMs: Number(timeoutMs),
                    adminEmails
                })
            });
            const payload = await response.json();
            if (!response.ok || !payload.ok) {
                setError(payload.error ?? payload.message ?? t.testError);
                return;
            }
            setMessage(payload.message ?? t.testSuccess);
        } catch  {
            setError(t.testError);
        } finally{
            setIsLoading(false);
        }
    };
    const handleSignOut = async ()=>{
        try {
            await fetch("/api/auth/logout", {
                method: "POST"
            });
            router.replace("/login");
            router.refresh();
        } catch  {
            setError(t.signOutError);
        }
    };
    const panelClass = theme === "dark" ? "rounded-xl border border-white/15 bg-white/5 p-4 shadow-[0_8px_24px_-16px_rgba(59,130,246,0.35)] backdrop-blur-2xl sm:rounded-2xl sm:p-5" : "rounded-xl border border-zinc-200 bg-white p-4 shadow-[0_8px_24px_-16px_rgba(15,23,42,0.2)] sm:rounded-2xl sm:p-5";
    const mainClass = theme === "dark" ? "min-h-[100dvh] bg-zinc-950 text-zinc-100 sm:min-h-screen" : "min-h-[100dvh] bg-zinc-50 text-zinc-900 sm:min-h-screen";
    const topLabelClass = theme === "dark" ? "text-zinc-400" : "text-zinc-500";
    const subtitleClass = theme === "dark" ? "text-zinc-300" : "text-zinc-600";
    const titleClass = theme === "dark" ? "bg-gradient-to-r from-white via-zinc-100 to-zinc-300 bg-clip-text text-2xl font-semibold tracking-tight text-transparent sm:text-4xl" : "bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-500 bg-clip-text text-2xl font-semibold tracking-tight text-transparent sm:text-4xl";
    const menuButtonClass = theme === "dark" ? "inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-zinc-200 transition hover:bg-white/15 sm:h-10 sm:w-10" : "inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-300 bg-white text-zinc-700 transition hover:bg-zinc-100 sm:h-10 sm:w-10";
    const menuPanelClass = theme === "dark" ? "absolute right-0 top-12 z-20 w-56 rounded-xl border border-white/15 bg-zinc-900/95 p-2 shadow-xl" : "absolute right-0 top-12 z-20 w-56 rounded-xl border border-zinc-200 bg-white p-2 shadow-xl";
    const userButtonClass = theme === "dark" ? "inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-zinc-100 transition hover:bg-white/15 sm:h-10 sm:w-10" : "inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-300 bg-white text-zinc-800 transition hover:bg-zinc-100 sm:h-10 sm:w-10";
    const iconButtonClass = theme === "dark" ? "inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-zinc-200 transition hover:bg-white/15 sm:h-10 sm:w-10" : "inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-300 bg-white text-zinc-700 transition hover:bg-zinc-100 sm:h-10 sm:w-10";
    const menuItemClass = theme === "dark" ? "flex h-9 items-center rounded-lg px-3 text-xs font-medium text-zinc-200 transition hover:bg-white/10" : "flex h-9 items-center rounded-lg px-3 text-xs font-medium text-zinc-700 transition hover:bg-zinc-100";
    const inputClass = theme === "dark" ? "w-full rounded-lg border border-white/15 bg-zinc-900/70 px-3 py-2 text-sm text-zinc-100 outline-none ring-sky-400 transition focus:ring" : "w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-800 outline-none ring-sky-500 transition focus:ring";
    const userName = userDisplayName || (userEmail ? userEmail.split("@")[0] : t.unknownUser);
    const isAdmin = userRole === "administrativo";
    const cycleLanguage = ()=>{
        const currentIndex = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lang$2f$core$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["languageOptions"].findIndex((option)=>option.code === language);
        const nextIndex = currentIndex >= 0 ? (currentIndex + 1) % __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lang$2f$core$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["languageOptions"].length : 0;
        const nextLanguage = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lang$2f$core$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["languageOptions"][nextIndex]?.code;
        if (nextLanguage && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lang$2f$core$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSupportedLanguage"])(nextLanguage)) {
            setLanguage(nextLanguage);
        }
    };
    if (!isThemeInitialized || !isSessionReady || !isAdmin) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: mainClass,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: `sticky top-0 z-30 border-b backdrop-blur ${theme === "dark" ? "border-white/10 bg-zinc-950/80" : "border-zinc-200 bg-zinc-50/90"}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto w-full max-w-4xl space-y-2 px-3 py-2 sm:space-y-3 sm:px-6 sm:py-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap items-center justify-between gap-2 sm:gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: theme === "dark" ? "inline-flex h-8 items-center gap-2 rounded-full border border-white/20 bg-white/5 px-2.5 text-xs font-semibold tracking-wider text-zinc-200" : "inline-flex h-8 items-center gap-2 rounded-full border border-zinc-300 bg-white px-2.5 text-xs font-semibold tracking-wider text-zinc-700",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/logo.png",
                                            alt: t.logoAlt,
                                            width: 28,
                                            height: 28,
                                            className: "h-5 w-auto object-contain",
                                            priority: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/settings/ldap/page.tsx",
                                            lineNumber: 338,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "hidden sm:inline",
                                            children: t.headerTag
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/settings/ldap/page.tsx",
                                            lineNumber: 339,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/settings/ldap/page.tsx",
                                    lineNumber: 330,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap items-center justify-end gap-1.5 sm:gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: cycleLanguage,
                                            className: iconButtonClass,
                                            "aria-label": t.languageSelectAria,
                                            title: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lang$2f$core$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["languageOptions"].find((option)=>option.code === language)?.label ?? t.languageSelectAria,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                className: "h-4 w-4",
                                                "aria-hidden": "true",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        cx: "12",
                                                        cy: "12",
                                                        r: "10"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/settings/ldap/page.tsx",
                                                        lineNumber: 351,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M2 12h20"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/settings/ldap/page.tsx",
                                                        lineNumber: 352,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M12 2a15 15 0 0 1 0 20"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/settings/ldap/page.tsx",
                                                        lineNumber: 353,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M12 2a15 15 0 0 0 0 20"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/settings/ldap/page.tsx",
                                                        lineNumber: 354,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/settings/ldap/page.tsx",
                                                lineNumber: 350,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/settings/ldap/page.tsx",
                                            lineNumber: 343,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setTheme((current)=>current === "dark" ? "light" : "dark"),
                                            className: iconButtonClass,
                                            "aria-label": t.themeToggleAria,
                                            children: theme === "dark" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                className: "h-4 w-4",
                                                "aria-hidden": "true",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/settings/ldap/page.tsx",
                                                    lineNumber: 365,
                                                    columnNumber: 213
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/settings/ldap/page.tsx",
                                                lineNumber: 365,
                                                columnNumber: 19
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                className: "h-4 w-4",
                                                "aria-hidden": "true",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        cx: "12",
                                                        cy: "12",
                                                        r: "4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/settings/ldap/page.tsx",
                                                        lineNumber: 367,
                                                        columnNumber: 213
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M12 2v2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/settings/ldap/page.tsx",
                                                        lineNumber: 367,
                                                        columnNumber: 245
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M12 20v2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/settings/ldap/page.tsx",
                                                        lineNumber: 367,
                                                        columnNumber: 265
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M4.93 4.93l1.41 1.41"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/settings/ldap/page.tsx",
                                                        lineNumber: 367,
                                                        columnNumber: 286
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M17.66 17.66l1.41 1.41"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/settings/ldap/page.tsx",
                                                        lineNumber: 367,
                                                        columnNumber: 319
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M2 12h2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/settings/ldap/page.tsx",
                                                        lineNumber: 367,
                                                        columnNumber: 354
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M20 12h2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/settings/ldap/page.tsx",
                                                        lineNumber: 367,
                                                        columnNumber: 374
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M6.34 17.66l-1.41 1.41"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/settings/ldap/page.tsx",
                                                        lineNumber: 367,
                                                        columnNumber: 395
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M19.07 4.93l-1.41 1.41"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/settings/ldap/page.tsx",
                                                        lineNumber: 367,
                                                        columnNumber: 430
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/settings/ldap/page.tsx",
                                                lineNumber: 367,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/settings/ldap/page.tsx",
                                            lineNumber: 358,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            ref: settingsMenuRef,
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>{
                                                        setIsSettingsMenuOpen((current)=>!current);
                                                        setIsUserMenuOpen(false);
                                                    },
                                                    className: menuButtonClass,
                                                    "aria-label": t.settingsMenuAria,
                                                    "aria-expanded": isSettingsMenuOpen,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        className: "h-4 w-4",
                                                        "aria-hidden": "true",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                cx: "12",
                                                                cy: "12",
                                                                r: "3"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/settings/ldap/page.tsx",
                                                                lineNumber: 383,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33h.01a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h.01a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.01a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/settings/ldap/page.tsx",
                                                                lineNumber: 384,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/settings/ldap/page.tsx",
                                                        lineNumber: 382,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/settings/ldap/page.tsx",
                                                    lineNumber: 372,
                                                    columnNumber: 17
                                                }, this),
                                                isSettingsMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: menuPanelClass,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "/",
                                                            className: menuItemClass,
                                                            onClick: ()=>setIsSettingsMenuOpen(false),
                                                            children: t.menuGoApp
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/settings/ldap/page.tsx",
                                                            lineNumber: 389,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "/users",
                                                            className: menuItemClass,
                                                            onClick: ()=>setIsSettingsMenuOpen(false),
                                                            children: t.menuUsers
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/settings/ldap/page.tsx",
                                                            lineNumber: 390,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "/settings/ldap",
                                                            className: menuItemClass,
                                                            onClick: ()=>setIsSettingsMenuOpen(false),
                                                            children: t.menuLdapSettings
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/settings/ldap/page.tsx",
                                                            lineNumber: 391,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "/settings/ansible",
                                                            className: menuItemClass,
                                                            onClick: ()=>setIsSettingsMenuOpen(false),
                                                            children: t.menuAnsibleSettings
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/settings/ldap/page.tsx",
                                                            lineNumber: 392,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "/settings/whisper",
                                                            className: menuItemClass,
                                                            onClick: ()=>setIsSettingsMenuOpen(false),
                                                            children: t.menuWhisperSettings
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/settings/ldap/page.tsx",
                                                            lineNumber: 393,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/settings/ldap/page.tsx",
                                                    lineNumber: 388,
                                                    columnNumber: 19
                                                }, this) : null
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/settings/ldap/page.tsx",
                                            lineNumber: 371,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            ref: userMenuRef,
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>{
                                                        setIsUserMenuOpen((current)=>!current);
                                                        setIsSettingsMenuOpen(false);
                                                    },
                                                    className: userButtonClass,
                                                    "aria-label": t.userMenuAria,
                                                    "aria-expanded": isUserMenuOpen,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        className: "h-4 w-4",
                                                        "aria-hidden": "true",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M20 21a8 8 0 0 0-16 0"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/settings/ldap/page.tsx",
                                                                lineNumber: 410,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                cx: "12",
                                                                cy: "8",
                                                                r: "4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/settings/ldap/page.tsx",
                                                                lineNumber: 411,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/settings/ldap/page.tsx",
                                                        lineNumber: 409,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/settings/ldap/page.tsx",
                                                    lineNumber: 399,
                                                    columnNumber: 17
                                                }, this),
                                                isUserMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: menuPanelClass,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: `${menuItemClass} cursor-default`,
                                                            children: [
                                                                t.currentUserLabel,
                                                                ": ",
                                                                userName
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/settings/ldap/page.tsx",
                                                            lineNumber: 416,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>{
                                                                setIsUserMenuOpen(false);
                                                                void handleSignOut();
                                                            },
                                                            className: `${menuItemClass} w-full`,
                                                            children: t.signOut
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/settings/ldap/page.tsx",
                                                            lineNumber: 417,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/settings/ldap/page.tsx",
                                                    lineNumber: 415,
                                                    columnNumber: 19
                                                }, this) : null
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/settings/ldap/page.tsx",
                                            lineNumber: 398,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/settings/ldap/page.tsx",
                                    lineNumber: 342,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/settings/ldap/page.tsx",
                            lineNumber: 329,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: `${titleClass} text-center`,
                            children: t.headerTitle
                        }, void 0, false, {
                            fileName: "[project]/src/app/settings/ldap/page.tsx",
                            lineNumber: 426,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: `mx-auto max-w-2xl text-center text-xs sm:text-sm ${subtitleClass}`,
                            children: t.headerDescription
                        }, void 0, false, {
                            fileName: "[project]/src/app/settings/ldap/page.tsx",
                            lineNumber: 427,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/settings/ldap/page.tsx",
                    lineNumber: 328,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/settings/ldap/page.tsx",
                lineNumber: 327,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto flex min-h-[100dvh] w-full max-w-4xl flex-col justify-start gap-2 px-3 pb-2 pt-2 sm:min-h-screen sm:justify-start sm:gap-6 sm:px-6 sm:pb-10 sm:pt-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: panelClass,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: `text-xs font-semibold uppercase tracking-wider ${topLabelClass}`,
                            children: t.sectionConfig
                        }, void 0, false, {
                            fileName: "[project]/src/app/settings/ldap/page.tsx",
                            lineNumber: 434,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 grid grid-cols-1 gap-3 md:grid-cols-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-xs sm:text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `mb-1 block ${topLabelClass}`,
                                            children: t.ldapUrlLabel
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/settings/ldap/page.tsx",
                                            lineNumber: 438,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: url,
                                            onChange: (event)=>setUrl(event.target.value),
                                            className: inputClass
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/settings/ldap/page.tsx",
                                            lineNumber: 439,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/settings/ldap/page.tsx",
                                    lineNumber: 437,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-xs sm:text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `mb-1 block ${topLabelClass}`,
                                            children: t.baseDnLabel
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/settings/ldap/page.tsx",
                                            lineNumber: 442,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: baseDn,
                                            onChange: (event)=>setBaseDn(event.target.value),
                                            className: inputClass
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/settings/ldap/page.tsx",
                                            lineNumber: 443,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/settings/ldap/page.tsx",
                                    lineNumber: 441,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-xs sm:text-sm md:col-span-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `mb-1 block ${topLabelClass}`,
                                            children: t.userFilterLabel
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/settings/ldap/page.tsx",
                                            lineNumber: 446,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: userFilter,
                                            onChange: (event)=>setUserFilter(event.target.value),
                                            className: inputClass
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/settings/ldap/page.tsx",
                                            lineNumber: 447,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/settings/ldap/page.tsx",
                                    lineNumber: 445,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-xs sm:text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `mb-1 block ${topLabelClass}`,
                                            children: t.bindDnLabel
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/settings/ldap/page.tsx",
                                            lineNumber: 450,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: bindDn,
                                            onChange: (event)=>setBindDn(event.target.value),
                                            className: inputClass
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/settings/ldap/page.tsx",
                                            lineNumber: 451,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/settings/ldap/page.tsx",
                                    lineNumber: 449,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-xs sm:text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `mb-1 block ${topLabelClass}`,
                                            children: t.bindPasswordLabel
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/settings/ldap/page.tsx",
                                            lineNumber: 454,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "password",
                                            value: bindPassword,
                                            onChange: (event)=>setBindPassword(event.target.value),
                                            className: inputClass
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/settings/ldap/page.tsx",
                                            lineNumber: 455,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/settings/ldap/page.tsx",
                                    lineNumber: 453,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-xs sm:text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `mb-1 block ${topLabelClass}`,
                                            children: t.timeoutLabel
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/settings/ldap/page.tsx",
                                            lineNumber: 458,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            min: 1000,
                                            max: 20000,
                                            step: 100,
                                            value: timeoutMs,
                                            onChange: (event)=>setTimeoutMs(event.target.value),
                                            className: inputClass
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/settings/ldap/page.tsx",
                                            lineNumber: 459,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/settings/ldap/page.tsx",
                                    lineNumber: 457,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-xs sm:text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `mb-1 block ${topLabelClass}`,
                                            children: t.adminEmailsLabel
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/settings/ldap/page.tsx",
                                            lineNumber: 462,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: adminEmails,
                                            onChange: (event)=>setAdminEmails(event.target.value),
                                            className: inputClass
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/settings/ldap/page.tsx",
                                            lineNumber: 463,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/settings/ldap/page.tsx",
                                    lineNumber: 461,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/settings/ldap/page.tsx",
                            lineNumber: 436,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 flex flex-wrap gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>void handleSave(),
                                    disabled: isLoading,
                                    className: "inline-flex h-10 items-center justify-center rounded-lg bg-gradient-to-br from-sky-400 via-cyan-400 to-blue-500 px-4 text-sm font-semibold text-zinc-950 transition hover:from-sky-300 hover:to-blue-400 disabled:cursor-not-allowed disabled:opacity-60",
                                    children: isLoading ? t.loading : t.save
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/ldap/page.tsx",
                                    lineNumber: 468,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>void handleTest(),
                                    disabled: isLoading,
                                    className: theme === "dark" ? "inline-flex h-10 items-center justify-center rounded-lg border border-white/20 bg-white/10 px-4 text-sm font-medium text-zinc-100 transition hover:bg-white/15 disabled:cursor-not-allowed disabled:opacity-60" : "inline-flex h-10 items-center justify-center rounded-lg border border-zinc-300 bg-white px-4 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-60",
                                    children: t.testConnection
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/ldap/page.tsx",
                                    lineNumber: 476,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/settings/ldap/page.tsx",
                            lineNumber: 467,
                            columnNumber: 11
                        }, this),
                        error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-3 rounded-lg border border-red-500/40 bg-red-500/10 px-3 py-2 text-xs text-red-300 sm:text-sm",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/src/app/settings/ldap/page.tsx",
                            lineNumber: 491,
                            columnNumber: 13
                        }, this) : null,
                        message ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-3 rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-3 py-2 text-xs text-emerald-300 sm:text-sm",
                            children: message
                        }, void 0, false, {
                            fileName: "[project]/src/app/settings/ldap/page.tsx",
                            lineNumber: 495,
                            columnNumber: 13
                        }, this) : null
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/settings/ldap/page.tsx",
                    lineNumber: 433,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/settings/ldap/page.tsx",
                lineNumber: 431,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/settings/ldap/page.tsx",
        lineNumber: 326,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ce6e8660._.js.map