(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lang/core.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lang/users.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "usersTranslations",
    ()=>usersTranslations
]);
const usersTranslations = {
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
        headerTitle: "Gestión de usuarios locales",
        headerDescription: "Crea, actualiza o elimina usuarios locales de acceso.",
        sectionUsers: "Usuarios",
        reloadList: "Actualizar lista",
        roleLabel: "Rol",
        roleAdmin: "Administrativo",
        roleTech: "Técnico",
        usernamePlaceholder: "Usuario",
        firstNamePlaceholder: "Nombre",
        lastNamePlaceholder: "Apellido",
        emailPlaceholder: "Correo",
        passwordPlaceholder: "Contraseña",
        saveUser: "Guardar",
        updateUser: "Actualizar usuario",
        editUser: "Editar",
        cancelEdit: "Cancelar",
        deleteUser: "Eliminar",
        emptyUsers: "No hay usuarios locales guardados.",
        requiredCredentials: "Debes ingresar usuario, nombre, apellido, correo y contraseña.",
        localUsersLoadError: "No se pudo cargar la lista de usuarios locales.",
        localUsersSaveError: "No se pudo guardar el usuario local.",
        localUsersDeleteError: "No se pudo eliminar el usuario local.",
        localUsersSaved: "Usuario guardado correctamente.",
        localUsersDeleted: "Usuario eliminado correctamente."
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
        headerTitle: "Local user management",
        headerDescription: "Create, update, or delete local access users.",
        sectionUsers: "Users",
        reloadList: "Refresh list",
        roleLabel: "Role",
        roleAdmin: "Administrative",
        roleTech: "Technician",
        usernamePlaceholder: "Username",
        firstNamePlaceholder: "First name",
        lastNamePlaceholder: "Last name",
        emailPlaceholder: "Email",
        passwordPlaceholder: "Password",
        saveUser: "Save user",
        updateUser: "Update user",
        editUser: "Edit",
        cancelEdit: "Cancel",
        deleteUser: "Delete",
        emptyUsers: "No local users saved yet.",
        requiredCredentials: "You must enter username, first name, last name, email and password.",
        localUsersLoadError: "Could not load local users list.",
        localUsersSaveError: "Could not save local user.",
        localUsersDeleteError: "Could not delete local user.",
        localUsersSaved: "User saved successfully.",
        localUsersDeleted: "User deleted successfully."
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
        headerTitle: "Gestione utenti locali",
        headerDescription: "Crea, aggiorna o elimina utenti locali di accesso.",
        sectionUsers: "Utenti",
        reloadList: "Aggiorna elenco",
        roleLabel: "Ruolo",
        roleAdmin: "Amministrativo",
        roleTech: "Tecnico",
        usernamePlaceholder: "Utente",
        firstNamePlaceholder: "Nome",
        lastNamePlaceholder: "Cognome",
        emailPlaceholder: "Email",
        passwordPlaceholder: "Password",
        saveUser: "Salva utente",
        updateUser: "Aggiorna utente",
        editUser: "Modifica",
        cancelEdit: "Annulla",
        deleteUser: "Elimina",
        emptyUsers: "Nessun utente locale salvato.",
        requiredCredentials: "Devi inserire utente, nome, cognome, email e password.",
        localUsersLoadError: "Impossibile caricare l'elenco utenti locali.",
        localUsersSaveError: "Impossibile salvare l'utente locale.",
        localUsersDeleteError: "Impossibile eliminare l'utente locale.",
        localUsersSaved: "Utente salvato correttamente.",
        localUsersDeleted: "Utente eliminato correttamente."
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
        headerTitle: "Gestão de usuários locais",
        headerDescription: "Crie, atualize ou remova usuários locais de acesso.",
        sectionUsers: "Usuários",
        reloadList: "Atualizar lista",
        roleLabel: "Função",
        roleAdmin: "Administrativo",
        roleTech: "Técnico",
        usernamePlaceholder: "Usuário",
        firstNamePlaceholder: "Nome",
        lastNamePlaceholder: "Sobrenome",
        emailPlaceholder: "E-mail",
        passwordPlaceholder: "Senha",
        saveUser: "Salvar usuário",
        updateUser: "Atualizar usuário",
        editUser: "Editar",
        cancelEdit: "Cancelar",
        deleteUser: "Excluir",
        emptyUsers: "Ainda não há usuários locais salvos.",
        requiredCredentials: "Você deve informar usuário, nome, sobrenome, e-mail e senha.",
        localUsersLoadError: "Não foi possível carregar a lista de usuários locais.",
        localUsersSaveError: "Não foi possível salvar o usuário local.",
        localUsersDeleteError: "Não foi possível remover o usuário local.",
        localUsersSaved: "Usuário salvo com sucesso.",
        localUsersDeleted: "Usuário removido com sucesso."
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/users/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UsersPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lang$2f$core$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lang/core.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lang$2f$users$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lang/users.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function formatError(error, fallback) {
    if (typeof error === "string") {
        return error;
    }
    if (typeof error === "object" && error !== null && "message" in error && typeof error.message === "string") {
        return error.message;
    }
    return fallback;
}
function UsersPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("dark");
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("es");
    const [isThemeInitialized, setIsThemeInitialized] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSettingsMenuOpen, setIsSettingsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [userEmail, setUserEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [userDisplayName, setUserDisplayName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [userRole, setUserRole] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isSessionReady, setIsSessionReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const settingsMenuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const userMenuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [localUsers, setLocalUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [editingUserIdentifier, setEditingUserIdentifier] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [localUsername, setLocalUsername] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [localFirstName, setLocalFirstName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [localLastName, setLocalLastName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [localRole, setLocalRole] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("tecnico");
    const [localUserEmail, setLocalUserEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [localUserPassword, setLocalUserPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const t = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lang$2f$users$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usersTranslations"][language];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UsersPage.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const savedLanguage = window.localStorage.getItem("dashboard-language");
            if (savedLanguage && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lang$2f$core$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSupportedLanguage"])(savedLanguage)) {
                setLanguage(savedLanguage);
            } else {
                const browserLanguage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lang$2f$core$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["detectBrowserLanguage"])([
                    ...window.navigator.languages ?? [],
                    window.navigator.language
                ]);
                setLanguage(browserLanguage);
            }
            const savedTheme = window.localStorage.getItem("dashboard-theme");
            if (savedTheme === "dark" || savedTheme === "light") {
                setTheme(savedTheme);
            }
            setIsThemeInitialized(true);
        }
    }["UsersPage.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UsersPage.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            window.localStorage.setItem("dashboard-language", language);
        }
    }["UsersPage.useEffect"], [
        language
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UsersPage.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            if (!isThemeInitialized) {
                return;
            }
            window.localStorage.setItem("dashboard-theme", theme);
        }
    }["UsersPage.useEffect"], [
        isThemeInitialized,
        theme
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UsersPage.useEffect": ()=>{
            const handleDocumentPointerDown = {
                "UsersPage.useEffect.handleDocumentPointerDown": (event)=>{
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
                }
            }["UsersPage.useEffect.handleDocumentPointerDown"];
            document.addEventListener("mousedown", handleDocumentPointerDown);
            return ({
                "UsersPage.useEffect": ()=>{
                    document.removeEventListener("mousedown", handleDocumentPointerDown);
                }
            })["UsersPage.useEffect"];
        }
    }["UsersPage.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UsersPage.useEffect": ()=>{
            const loadSession = {
                "UsersPage.useEffect.loadSession": async ()=>{
                    try {
                        const response = await fetch("/api/auth/session", {
                            method: "GET",
                            cache: "no-store"
                        });
                        if (!response.ok) {
                            setIsSessionReady(true);
                            router.replace("/");
                            return;
                        }
                        const payload = await response.json();
                        const displayName = payload.user?.displayName?.trim();
                        const email = payload.user?.email?.trim();
                        const role = payload.user?.role;
                        if (role !== "administrativo") {
                            setIsSessionReady(true);
                            router.replace("/");
                            return;
                        }
                        setUserRole(role);
                        if (displayName) {
                            setUserDisplayName(displayName);
                        }
                        if (email) {
                            setUserEmail(email);
                        }
                        setIsSessionReady(true);
                    } catch  {
                        setUserEmail("");
                        setUserDisplayName("");
                        setUserRole("");
                        setIsSessionReady(true);
                    }
                }
            }["UsersPage.useEffect.loadSession"];
            void loadSession();
        }
    }["UsersPage.useEffect"], [
        router
    ]);
    const loadLocalUsers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "UsersPage.useCallback[loadLocalUsers]": async ()=>{
            setIsLoading(true);
            setError("");
            try {
                const response = await fetch("/api/auth/local-users");
                const payload = await response.json();
                if (!response.ok) {
                    throw new Error(payload.error ?? t.localUsersLoadError);
                }
                setLocalUsers(payload.users ?? []);
            } catch (loadError) {
                setError(formatError(loadError, t.localUsersLoadError));
            } finally{
                setIsLoading(false);
            }
        }
    }["UsersPage.useCallback[loadLocalUsers]"], [
        t.localUsersLoadError
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UsersPage.useEffect": ()=>{
            void loadLocalUsers();
        }
    }["UsersPage.useEffect"], [
        loadLocalUsers
    ]);
    const resetUserForm = ()=>{
        setEditingUserIdentifier("");
        setLocalUsername("");
        setLocalFirstName("");
        setLocalLastName("");
        setLocalRole("tecnico");
        setLocalUserEmail("");
        setLocalUserPassword("");
    };
    const handleSaveLocalUser = async ()=>{
        if (!localUsername.trim() || !localFirstName.trim() || !localLastName.trim() || !localUserEmail.trim()) {
            setError(t.requiredCredentials);
            return;
        }
        if (!editingUserIdentifier && !localUserPassword.trim()) {
            setError(t.requiredCredentials);
            return;
        }
        setIsLoading(true);
        setError("");
        setMessage("");
        try {
            const response = await fetch("/api/auth/local-users", {
                method: editingUserIdentifier ? "PUT" : "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    identifier: editingUserIdentifier || undefined,
                    username: localUsername,
                    firstName: localFirstName,
                    lastName: localLastName,
                    role: localRole,
                    email: localUserEmail,
                    password: localUserPassword.trim() ? localUserPassword : undefined
                })
            });
            const payload = await response.json();
            if (!response.ok) {
                throw new Error(payload.error ?? t.localUsersSaveError);
            }
            setMessage(editingUserIdentifier ? t.localUsersSaved : t.localUsersSaved);
            resetUserForm();
            await loadLocalUsers();
        } catch (saveError) {
            setError(formatError(saveError, t.localUsersSaveError));
        } finally{
            setIsLoading(false);
        }
    };
    const handleEditLocalUser = (user)=>{
        setEditingUserIdentifier(user.username);
        setLocalUsername(user.username);
        setLocalFirstName(user.firstName);
        setLocalLastName(user.lastName);
        setLocalRole(user.role);
        setLocalUserEmail(user.email);
        setLocalUserPassword("");
        setError("");
        setMessage("");
    };
    const handleDeleteLocalUser = async (identifier)=>{
        setIsLoading(true);
        setError("");
        setMessage("");
        try {
            const response = await fetch("/api/auth/local-users", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    identifier
                })
            });
            const payload = await response.json();
            if (!response.ok) {
                throw new Error(payload.error ?? t.localUsersDeleteError);
            }
            setMessage(t.localUsersDeleted);
            if (editingUserIdentifier === identifier) {
                resetUserForm();
            }
            await loadLocalUsers();
        } catch (deleteError) {
            setError(formatError(deleteError, t.localUsersDeleteError));
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
    const hintBoxClass = theme === "dark" ? "mt-4 rounded-lg border border-zinc-700 bg-zinc-950/70 p-3 text-xs text-zinc-300" : "mt-4 rounded-lg border border-zinc-200 bg-zinc-100 p-3 text-xs text-zinc-700";
    const userName = userDisplayName || (userEmail ? userEmail.split("@")[0] : t.unknownUser);
    const isAdmin = userRole === "administrativo";
    const cycleLanguage = ()=>{
        const currentIndex = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lang$2f$core$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["languageOptions"].findIndex((option)=>option.code === language);
        const nextIndex = currentIndex >= 0 ? (currentIndex + 1) % __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lang$2f$core$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["languageOptions"].length : 0;
        const nextLanguage = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lang$2f$core$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["languageOptions"][nextIndex]?.code;
        if (nextLanguage && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lang$2f$core$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSupportedLanguage"])(nextLanguage)) {
            setLanguage(nextLanguage);
        }
    };
    if (!isThemeInitialized || !isSessionReady || !isAdmin) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: mainClass,
        children: [
            theme === "dark" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none fixed inset-0 -z-10 hidden md:block",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-1/2 top-16 h-72 w-72 -translate-x-1/2 rounded-full bg-sky-500/10 blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/src/app/users/page.tsx",
                        lineNumber: 393,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-10 right-20 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/src/app/users/page.tsx",
                        lineNumber: 394,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/users/page.tsx",
                lineNumber: 392,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: `sticky top-0 z-30 border-b backdrop-blur ${theme === "dark" ? "border-white/10 bg-zinc-950/80" : "border-zinc-200 bg-zinc-50/90"}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto w-full max-w-4xl space-y-2 px-3 py-2 sm:space-y-3 sm:px-6 sm:py-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap items-center justify-between gap-2 sm:gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: theme === "dark" ? "inline-flex h-8 items-center gap-2 rounded-full border border-white/20 bg-white/5 px-2.5 text-xs font-semibold tracking-wider text-zinc-200" : "inline-flex h-8 items-center gap-2 rounded-full border border-zinc-300 bg-white px-2.5 text-xs font-semibold tracking-wider text-zinc-700",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/logo.png",
                                            alt: t.logoAlt,
                                            width: 28,
                                            height: 28,
                                            className: "h-5 w-auto object-contain",
                                            priority: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/users/page.tsx",
                                            lineNumber: 409,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "hidden sm:inline",
                                            children: t.headerTag
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/users/page.tsx",
                                            lineNumber: 417,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/users/page.tsx",
                                    lineNumber: 401,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap items-center justify-end gap-1.5 sm:gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: cycleLanguage,
                                            className: iconButtonClass,
                                            "aria-label": t.languageSelectAria,
                                            title: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lang$2f$core$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["languageOptions"].find((option)=>option.code === language)?.label ?? t.languageSelectAria,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        cx: "12",
                                                        cy: "12",
                                                        r: "10"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/users/page.tsx",
                                                        lineNumber: 438,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M2 12h20"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/users/page.tsx",
                                                        lineNumber: 439,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M12 2a15 15 0 0 1 0 20"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/users/page.tsx",
                                                        lineNumber: 440,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M12 2a15 15 0 0 0 0 20"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/users/page.tsx",
                                                        lineNumber: 441,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/users/page.tsx",
                                                lineNumber: 427,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/users/page.tsx",
                                            lineNumber: 420,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setTheme((current)=>current === "dark" ? "light" : "dark"),
                                            className: iconButtonClass,
                                            "aria-label": t.themeToggleAria,
                                            children: theme === "dark" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                className: "h-4 w-4",
                                                "aria-hidden": "true",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/users/page.tsx",
                                                    lineNumber: 451,
                                                    columnNumber: 213
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/users/page.tsx",
                                                lineNumber: 451,
                                                columnNumber: 19
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        cx: "12",
                                                        cy: "12",
                                                        r: "4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/users/page.tsx",
                                                        lineNumber: 453,
                                                        columnNumber: 213
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M12 2v2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/users/page.tsx",
                                                        lineNumber: 453,
                                                        columnNumber: 245
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M12 20v2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/users/page.tsx",
                                                        lineNumber: 453,
                                                        columnNumber: 265
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M4.93 4.93l1.41 1.41"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/users/page.tsx",
                                                        lineNumber: 453,
                                                        columnNumber: 286
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M17.66 17.66l1.41 1.41"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/users/page.tsx",
                                                        lineNumber: 453,
                                                        columnNumber: 319
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M2 12h2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/users/page.tsx",
                                                        lineNumber: 453,
                                                        columnNumber: 354
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M20 12h2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/users/page.tsx",
                                                        lineNumber: 453,
                                                        columnNumber: 374
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M6.34 17.66l-1.41 1.41"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/users/page.tsx",
                                                        lineNumber: 453,
                                                        columnNumber: 395
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M19.07 4.93l-1.41 1.41"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/users/page.tsx",
                                                        lineNumber: 453,
                                                        columnNumber: 430
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/users/page.tsx",
                                                lineNumber: 453,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/users/page.tsx",
                                            lineNumber: 444,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            ref: settingsMenuRef,
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>{
                                                        setIsSettingsMenuOpen((current)=>!current);
                                                        setIsUserMenuOpen(false);
                                                    },
                                                    className: menuButtonClass,
                                                    "aria-label": t.settingsMenuAria,
                                                    "aria-expanded": isSettingsMenuOpen,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                cx: "12",
                                                                cy: "12",
                                                                r: "3"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/users/page.tsx",
                                                                lineNumber: 478,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33h.01a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h.01a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.01a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/users/page.tsx",
                                                                lineNumber: 479,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/users/page.tsx",
                                                        lineNumber: 467,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/users/page.tsx",
                                                    lineNumber: 457,
                                                    columnNumber: 17
                                                }, this),
                                                isSettingsMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: menuPanelClass,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "/",
                                                            className: menuItemClass,
                                                            onClick: ()=>setIsSettingsMenuOpen(false),
                                                            children: t.menuGoApp
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/users/page.tsx",
                                                            lineNumber: 484,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "/users",
                                                            className: menuItemClass,
                                                            onClick: ()=>setIsSettingsMenuOpen(false),
                                                            children: t.menuUsers
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/users/page.tsx",
                                                            lineNumber: 491,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "/settings/ldap",
                                                            className: menuItemClass,
                                                            onClick: ()=>setIsSettingsMenuOpen(false),
                                                            children: t.menuLdapSettings
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/users/page.tsx",
                                                            lineNumber: 498,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "/settings/ansible",
                                                            className: menuItemClass,
                                                            onClick: ()=>setIsSettingsMenuOpen(false),
                                                            children: t.menuAnsibleSettings
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/users/page.tsx",
                                                            lineNumber: 505,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "/settings/whisper",
                                                            className: menuItemClass,
                                                            onClick: ()=>setIsSettingsMenuOpen(false),
                                                            children: t.menuWhisperSettings
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/users/page.tsx",
                                                            lineNumber: 512,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/users/page.tsx",
                                                    lineNumber: 483,
                                                    columnNumber: 19
                                                }, this) : null
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/users/page.tsx",
                                            lineNumber: 456,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            ref: userMenuRef,
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>{
                                                        setIsUserMenuOpen((current)=>!current);
                                                        setIsSettingsMenuOpen(false);
                                                    },
                                                    className: userButtonClass,
                                                    "aria-label": t.userMenuAria,
                                                    "aria-expanded": isUserMenuOpen,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M20 21a8 8 0 0 0-16 0"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/users/page.tsx",
                                                                lineNumber: 544,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                cx: "12",
                                                                cy: "8",
                                                                r: "4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/users/page.tsx",
                                                                lineNumber: 545,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/users/page.tsx",
                                                        lineNumber: 533,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/users/page.tsx",
                                                    lineNumber: 523,
                                                    columnNumber: 17
                                                }, this),
                                                isUserMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: menuPanelClass,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: `${menuItemClass} cursor-default`,
                                                            children: [
                                                                t.currentUserLabel,
                                                                ": ",
                                                                userName
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/users/page.tsx",
                                                            lineNumber: 550,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>{
                                                                setIsUserMenuOpen(false);
                                                                void handleSignOut();
                                                            },
                                                            className: `${menuItemClass} w-full`,
                                                            children: t.signOut
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/users/page.tsx",
                                                            lineNumber: 553,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/users/page.tsx",
                                                    lineNumber: 549,
                                                    columnNumber: 19
                                                }, this) : null
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/users/page.tsx",
                                            lineNumber: 522,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/users/page.tsx",
                                    lineNumber: 419,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/users/page.tsx",
                            lineNumber: 400,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: `hidden text-center text-sm uppercase tracking-[0.2em] sm:block ${topLabelClass}`,
                            children: t.headerTag
                        }, void 0, false, {
                            fileName: "[project]/src/app/users/page.tsx",
                            lineNumber: 568,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: `${titleClass} text-center`,
                            children: t.headerTitle
                        }, void 0, false, {
                            fileName: "[project]/src/app/users/page.tsx",
                            lineNumber: 569,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: `mx-auto max-w-2xl text-center text-xs sm:text-sm ${subtitleClass}`,
                            children: t.headerDescription
                        }, void 0, false, {
                            fileName: "[project]/src/app/users/page.tsx",
                            lineNumber: 570,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/users/page.tsx",
                    lineNumber: 399,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/users/page.tsx",
                lineNumber: 398,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto flex min-h-[100dvh] w-full max-w-4xl flex-col justify-start gap-2 px-3 pb-2 pt-2 sm:min-h-screen sm:justify-start sm:gap-6 sm:px-6 sm:pb-10 sm:pt-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: panelClass,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap items-center justify-between gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: `text-xs font-semibold uppercase tracking-wider ${topLabelClass}`,
                                    children: t.sectionUsers
                                }, void 0, false, {
                                    fileName: "[project]/src/app/users/page.tsx",
                                    lineNumber: 580,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>void loadLocalUsers(),
                                    disabled: isLoading,
                                    className: theme === "dark" ? "inline-flex h-8 items-center rounded-full border border-white/20 bg-white/10 px-3 text-xs font-medium text-zinc-200 transition hover:bg-white/15 disabled:cursor-not-allowed disabled:opacity-60" : "inline-flex h-8 items-center rounded-full border border-zinc-300 bg-white px-3 text-xs font-medium text-zinc-700 transition hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-60",
                                    children: t.reloadList
                                }, void 0, false, {
                                    fileName: "[project]/src/app/users/page.tsx",
                                    lineNumber: 581,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/users/page.tsx",
                            lineNumber: 579,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-7",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: localUsername,
                                    onChange: (event)=>setLocalUsername(event.target.value),
                                    placeholder: t.usernamePlaceholder,
                                    className: theme === "dark" ? "rounded-lg border border-white/15 bg-zinc-900/70 px-3 py-2 text-sm text-zinc-100 outline-none ring-sky-400 transition focus:ring" : "rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-800 outline-none ring-sky-500 transition focus:ring"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/users/page.tsx",
                                    lineNumber: 596,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: localFirstName,
                                    onChange: (event)=>setLocalFirstName(event.target.value),
                                    placeholder: t.firstNamePlaceholder,
                                    className: theme === "dark" ? "rounded-lg border border-white/15 bg-zinc-900/70 px-3 py-2 text-sm text-zinc-100 outline-none ring-sky-400 transition focus:ring" : "rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-800 outline-none ring-sky-500 transition focus:ring"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/users/page.tsx",
                                    lineNumber: 607,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: localLastName,
                                    onChange: (event)=>setLocalLastName(event.target.value),
                                    placeholder: t.lastNamePlaceholder,
                                    className: theme === "dark" ? "rounded-lg border border-white/15 bg-zinc-900/70 px-3 py-2 text-sm text-zinc-100 outline-none ring-sky-400 transition focus:ring" : "rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-800 outline-none ring-sky-500 transition focus:ring"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/users/page.tsx",
                                    lineNumber: 618,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: localRole,
                                    onChange: (event)=>{
                                        const nextRole = event.target.value;
                                        if (nextRole === "administrativo" || nextRole === "tecnico") {
                                            setLocalRole(nextRole);
                                        }
                                    },
                                    className: theme === "dark" ? "rounded-lg border border-white/15 bg-zinc-900/70 px-3 py-2 text-sm text-zinc-100 outline-none ring-sky-400 transition focus:ring" : "rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-800 outline-none ring-sky-500 transition focus:ring",
                                    "aria-label": t.roleLabel,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "administrativo",
                                            children: t.roleAdmin
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/users/page.tsx",
                                            lineNumber: 644,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "tecnico",
                                            children: t.roleTech
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/users/page.tsx",
                                            lineNumber: 645,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/users/page.tsx",
                                    lineNumber: 629,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "email",
                                    value: localUserEmail,
                                    onChange: (event)=>setLocalUserEmail(event.target.value),
                                    placeholder: t.emailPlaceholder,
                                    className: theme === "dark" ? "rounded-lg border border-white/15 bg-zinc-900/70 px-3 py-2 text-sm text-zinc-100 outline-none ring-sky-400 transition focus:ring" : "rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-800 outline-none ring-sky-500 transition focus:ring"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/users/page.tsx",
                                    lineNumber: 647,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "password",
                                    value: localUserPassword,
                                    onChange: (event)=>setLocalUserPassword(event.target.value),
                                    placeholder: t.passwordPlaceholder,
                                    className: theme === "dark" ? "rounded-lg border border-white/15 bg-zinc-900/70 px-3 py-2 text-sm text-zinc-100 outline-none ring-sky-400 transition focus:ring" : "rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-800 outline-none ring-sky-500 transition focus:ring"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/users/page.tsx",
                                    lineNumber: 658,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>void handleSaveLocalUser(),
                                    disabled: isLoading,
                                    className: "inline-flex h-10 items-center justify-center rounded-lg bg-gradient-to-br from-sky-400 via-cyan-400 to-blue-500 px-4 text-sm font-semibold text-zinc-950 transition hover:from-sky-300 hover:to-blue-400 disabled:cursor-not-allowed disabled:opacity-60",
                                    children: editingUserIdentifier ? t.updateUser : t.saveUser
                                }, void 0, false, {
                                    fileName: "[project]/src/app/users/page.tsx",
                                    lineNumber: 669,
                                    columnNumber: 13
                                }, this),
                                editingUserIdentifier ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: resetUserForm,
                                    disabled: isLoading,
                                    className: theme === "dark" ? "inline-flex h-10 items-center justify-center rounded-lg border border-white/20 bg-white/10 px-4 text-sm font-medium text-zinc-100 transition hover:bg-white/15 disabled:cursor-not-allowed disabled:opacity-60" : "inline-flex h-10 items-center justify-center rounded-lg border border-zinc-300 bg-white px-4 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-60",
                                    children: t.cancelEdit
                                }, void 0, false, {
                                    fileName: "[project]/src/app/users/page.tsx",
                                    lineNumber: 678,
                                    columnNumber: 15
                                }, this) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/users/page.tsx",
                            lineNumber: 595,
                            columnNumber: 11
                        }, this),
                        error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-2 rounded-lg border border-red-500/40 bg-red-500/10 px-3 py-2 text-xs text-red-300 sm:mt-3 sm:text-sm",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/src/app/users/page.tsx",
                            lineNumber: 694,
                            columnNumber: 13
                        }, this) : null,
                        message ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-2 rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-3 py-2 text-xs text-emerald-300 sm:mt-3 sm:text-sm",
                            children: message
                        }, void 0, false, {
                            fileName: "[project]/src/app/users/page.tsx",
                            lineNumber: 700,
                            columnNumber: 13
                        }, this) : null,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: hintBoxClass,
                            children: localUsers.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: localUsers.map((localUser)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "truncate font-medium",
                                                        children: [
                                                            localUser.firstName,
                                                            " ",
                                                            localUser.lastName,
                                                            " (@",
                                                            localUser.username,
                                                            ") · ",
                                                            localUser.role === "administrativo" ? t.roleAdmin : t.roleTech
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/users/page.tsx",
                                                        lineNumber: 711,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "truncate text-[11px] opacity-80",
                                                        children: localUser.email
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/users/page.tsx",
                                                        lineNumber: 714,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/users/page.tsx",
                                                lineNumber: 710,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>handleEditLocalUser(localUser),
                                                        disabled: isLoading,
                                                        className: theme === "dark" ? "inline-flex h-8 items-center rounded-lg border border-white/20 bg-white/10 px-3 text-xs font-medium text-zinc-100 transition hover:bg-white/15 disabled:cursor-not-allowed disabled:opacity-60" : "inline-flex h-8 items-center rounded-lg border border-zinc-300 bg-white px-3 text-xs font-medium text-zinc-700 transition hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-60",
                                                        children: t.editUser
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/users/page.tsx",
                                                        lineNumber: 717,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>void handleDeleteLocalUser(localUser.username),
                                                        disabled: isLoading,
                                                        className: "inline-flex h-8 items-center rounded-lg border border-red-500/40 bg-red-500/10 px-3 text-xs font-medium text-red-300 transition hover:bg-red-500/20 disabled:cursor-not-allowed disabled:opacity-60",
                                                        children: t.deleteUser
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/users/page.tsx",
                                                        lineNumber: 729,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/users/page.tsx",
                                                lineNumber: 716,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, localUser.username, true, {
                                        fileName: "[project]/src/app/users/page.tsx",
                                        lineNumber: 709,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/users/page.tsx",
                                lineNumber: 707,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: t.emptyUsers
                            }, void 0, false, {
                                fileName: "[project]/src/app/users/page.tsx",
                                lineNumber: 742,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/users/page.tsx",
                            lineNumber: 705,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/users/page.tsx",
                    lineNumber: 578,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/users/page.tsx",
                lineNumber: 576,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/users/page.tsx",
        lineNumber: 390,
        columnNumber: 5
    }, this);
}
_s(UsersPage, "aK1/PNENezkfJijHSt25YAevJ4E=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = UsersPage;
var _c;
__turbopack_context__.k.register(_c, "UsersPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_d368fdae._.js.map