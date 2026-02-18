(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const speechLocales = {
    es: "es-ES",
    en: "en-US",
    it: "it-IT",
    pt: "pt-PT"
};
const languageOptions = [
    {
        code: "es",
        label: "ES"
    },
    {
        code: "en",
        label: "EN"
    },
    {
        code: "it",
        label: "IT"
    },
    {
        code: "pt",
        label: "PT"
    }
];
const translations = {
    es: {
        themeLight: "☀️ Claro",
        themeDark: "🌙 Oscuro",
        themeToggleAria: "Cambiar tema",
        languageLabel: "Idioma",
        languageSelectAria: "Cambiar idioma",
        headerSubtitle: "Dashboard Ansible - Whisper IA",
        pageDescription: "Presiona el botón, habla que tarea quieres ejecutar y se ejecutará automáticamente en AWX.",
        buttonProcessing: "Procesando...",
        buttonStop: "Detener grabación",
        buttonSpeak: "Hablar ahora",
        statusProcessing: "Procesando audio y ejecutando en AWX...",
        statusListening: "Escuchando y transcribiendo en vivo...",
        statusCaptured: "Audio capturado. Ejecutando comando...",
        statusReady: "Listo para escuchar tu orden",
        sectionTranscript: "Transcripción",
        transcriptPlaceholder: "Aquí aparecerá el texto reconocido por Whisper.",
        sectionResult: "Resultado AWX",
        commandDetected: "Comando detectado",
        viewAwx: "Ver ejecución en AWX",
        noExecution: "Aún no hay ejecución.",
        availableCommands: "Comandos disponibles:",
        micAccessError: "No se pudo acceder al micrófono.",
        unknownError: "Error inesperado.",
        invalidAudioCommand: "No se encontró un comando válido en el audio.",
        signOut: "Cerrar sesión",
        signOutError: "No se pudo cerrar sesión.",
        localUsersTitle: "Usuarios locales",
        localUsersDescription: "Crear, actualizar o eliminar accesos locales por correo y contraseña.",
        localUsersEmail: "Correo",
        localUsersPassword: "Contraseña",
        localUsersSave: "Guardar usuario",
        localUsersReload: "Actualizar lista",
        localUsersEmpty: "No hay usuarios locales guardados.",
        localUsersDelete: "Eliminar",
        localUsersSaved: "Usuario guardado correctamente.",
        localUsersDeleted: "Usuario eliminado correctamente.",
        localUsersLoadError: "No se pudo cargar la lista de usuarios locales.",
        localUsersSaveError: "No se pudo guardar el usuario local.",
        localUsersDeleteError: "No se pudo eliminar el usuario local."
    },
    en: {
        themeLight: "☀️ Light",
        themeDark: "🌙 Dark",
        themeToggleAria: "Toggle theme",
        languageLabel: "Language",
        languageSelectAria: "Change language",
        headerSubtitle: "Ansible Dashboard - Whisper AI",
        pageDescription: "Press the button, say the task you want to run, and it will execute automatically in AWX.",
        buttonProcessing: "Processing...",
        buttonStop: "Stop recording",
        buttonSpeak: "Speak now",
        statusProcessing: "Processing audio and executing in AWX...",
        statusListening: "Listening and transcribing live...",
        statusCaptured: "Audio captured. Executing command...",
        statusReady: "Ready to listen to your command",
        sectionTranscript: "Transcript",
        transcriptPlaceholder: "Whisper transcript will appear here.",
        sectionResult: "AWX Result",
        commandDetected: "Detected command",
        viewAwx: "View execution in AWX",
        noExecution: "No execution yet.",
        availableCommands: "Available commands:",
        micAccessError: "Could not access the microphone.",
        unknownError: "Unexpected error.",
        invalidAudioCommand: "No valid command was found in the audio.",
        signOut: "Sign out",
        signOutError: "Could not sign out.",
        localUsersTitle: "Local users",
        localUsersDescription: "Create, update, or delete local credentials by email and password.",
        localUsersEmail: "Email",
        localUsersPassword: "Password",
        localUsersSave: "Save user",
        localUsersReload: "Refresh list",
        localUsersEmpty: "No local users saved yet.",
        localUsersDelete: "Delete",
        localUsersSaved: "User saved successfully.",
        localUsersDeleted: "User deleted successfully.",
        localUsersLoadError: "Could not load local users list.",
        localUsersSaveError: "Could not save local user.",
        localUsersDeleteError: "Could not delete local user."
    },
    it: {
        themeLight: "☀️ Chiaro",
        themeDark: "🌙 Scuro",
        themeToggleAria: "Cambia tema",
        languageLabel: "Lingua",
        languageSelectAria: "Cambia lingua",
        headerSubtitle: "Dashboard Ansible - Whisper IA",
        pageDescription: "Premi il pulsante, pronuncia l'attività da eseguire e verrà avviata automaticamente in AWX.",
        buttonProcessing: "Elaborazione...",
        buttonStop: "Ferma registrazione",
        buttonSpeak: "Parla ora",
        statusProcessing: "Elaborazione audio ed esecuzione in AWX...",
        statusListening: "Ascolto e trascrizione in tempo reale...",
        statusCaptured: "Audio acquisito. Esecuzione comando...",
        statusReady: "Pronto ad ascoltare il tuo comando",
        sectionTranscript: "Trascrizione",
        transcriptPlaceholder: "Qui apparirà il testo riconosciuto da Whisper.",
        sectionResult: "Risultato AWX",
        commandDetected: "Comando rilevato",
        viewAwx: "Vedi esecuzione in AWX",
        noExecution: "Nessuna esecuzione ancora.",
        availableCommands: "Comandi disponibili:",
        micAccessError: "Impossibile accedere al microfono.",
        unknownError: "Errore imprevisto.",
        invalidAudioCommand: "Nessun comando valido trovato nell'audio.",
        signOut: "Esci",
        signOutError: "Impossibile uscire.",
        localUsersTitle: "Utenti locali",
        localUsersDescription: "Crea, aggiorna o elimina accessi locali con email e password.",
        localUsersEmail: "Email",
        localUsersPassword: "Password",
        localUsersSave: "Salva utente",
        localUsersReload: "Aggiorna elenco",
        localUsersEmpty: "Nessun utente locale salvato.",
        localUsersDelete: "Elimina",
        localUsersSaved: "Utente salvato correttamente.",
        localUsersDeleted: "Utente eliminato correttamente.",
        localUsersLoadError: "Impossibile caricare l'elenco utenti locali.",
        localUsersSaveError: "Impossibile salvare l'utente locale.",
        localUsersDeleteError: "Impossibile eliminare l'utente locale."
    },
    pt: {
        themeLight: "☀️ Claro",
        themeDark: "🌙 Escuro",
        themeToggleAria: "Alternar tema",
        languageLabel: "Idioma",
        languageSelectAria: "Alterar idioma",
        headerSubtitle: "Dashboard Ansible - Whisper IA",
        pageDescription: "Pressione o botão, diga a tarefa que deseja executar e ela será executada automaticamente no AWX.",
        buttonProcessing: "Processando...",
        buttonStop: "Parar gravação",
        buttonSpeak: "Falar agora",
        statusProcessing: "Processando áudio e executando no AWX...",
        statusListening: "Ouvindo e transcrevendo ao vivo...",
        statusCaptured: "Áudio capturado. Executando comando...",
        statusReady: "Pronto para ouvir seu comando",
        sectionTranscript: "Transcrição",
        transcriptPlaceholder: "Aqui aparecerá o texto reconhecido pelo Whisper.",
        sectionResult: "Resultado AWX",
        commandDetected: "Comando detectado",
        viewAwx: "Ver execução no AWX",
        noExecution: "Ainda não há execução.",
        availableCommands: "Comandos disponíveis:",
        micAccessError: "Não foi possível acessar o microfone.",
        unknownError: "Erro inesperado.",
        invalidAudioCommand: "Nenhum comando válido foi encontrado no áudio.",
        signOut: "Sair",
        signOutError: "Não foi possível encerrar a sessão.",
        localUsersTitle: "Usuários locais",
        localUsersDescription: "Criar, atualizar ou remover acessos locais por e-mail e senha.",
        localUsersEmail: "E-mail",
        localUsersPassword: "Senha",
        localUsersSave: "Salvar usuário",
        localUsersReload: "Atualizar lista",
        localUsersEmpty: "Ainda não há usuários locais salvos.",
        localUsersDelete: "Excluir",
        localUsersSaved: "Usuário salvo com sucesso.",
        localUsersDeleted: "Usuário removido com sucesso.",
        localUsersLoadError: "Não foi possível carregar a lista de usuários locais.",
        localUsersSaveError: "Não foi possível salvar o usuário local.",
        localUsersDeleteError: "Não foi possível remover o usuário local."
    }
};
function getSpeechRecognitionConstructor() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const browserWindow = window;
    return browserWindow.SpeechRecognition ?? browserWindow.webkitSpeechRecognition ?? null;
}
function formatError(error, fallback) {
    if (typeof error === "string") {
        return error;
    }
    if (typeof error === "object" && error !== null && "message" in error && typeof error.message === "string") {
        return error.message;
    }
    return fallback;
}
function Home() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const SILENCE_AUTOSTOP_MS = 1300;
    const MIN_RECORDING_MS = 900;
    const [isRecording, setIsRecording] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [audioBlob, setAudioBlob] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [transcript, setTranscript] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [result, setResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [hints, setHints] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [liveTranscript, setLiveTranscript] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("dark");
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("es");
    const [localUsers, setLocalUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [localUserEmail, setLocalUserEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [localUserPassword, setLocalUserPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [localUsersLoading, setLocalUsersLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [localUsersError, setLocalUsersError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [localUsersMessage, setLocalUsersMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const t = translations[language];
    const mediaRecorderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const chunksRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const speechRecognitionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const silenceTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const speechDetectedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const recordingStartedAtRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const savedTheme = window.localStorage.getItem("dashboard-theme");
            if (savedTheme === "dark" || savedTheme === "light") {
                setTheme(savedTheme);
            }
        }
    }["Home.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            window.localStorage.setItem("dashboard-theme", theme);
        }
    }["Home.useEffect"], [
        theme
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const savedLanguage = window.localStorage.getItem("dashboard-language");
            if (savedLanguage === "es" || savedLanguage === "en" || savedLanguage === "it" || savedLanguage === "pt") {
                setLanguage(savedLanguage);
            }
        }
    }["Home.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            window.localStorage.setItem("dashboard-language", language);
        }
    }["Home.useEffect"], [
        language
    ]);
    const loadLocalUsers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[loadLocalUsers]": async ()=>{
            setLocalUsersLoading(true);
            setLocalUsersError("");
            try {
                const response = await fetch("/api/auth/local-users");
                const payload = await response.json();
                if (!response.ok) {
                    throw new Error(payload.error ?? t.localUsersLoadError);
                }
                setLocalUsers(payload.users ?? []);
            } catch (loadError) {
                setLocalUsersError(formatError(loadError, t.localUsersLoadError));
            } finally{
                setLocalUsersLoading(false);
            }
        }
    }["Home.useCallback[loadLocalUsers]"], [
        t.localUsersLoadError
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            void loadLocalUsers();
        }
    }["Home.useEffect"], [
        loadLocalUsers
    ]);
    const clearSilenceTimer = ()=>{
        if (silenceTimeoutRef.current) {
            clearTimeout(silenceTimeoutRef.current);
            silenceTimeoutRef.current = null;
        }
    };
    const scheduleSilenceAutostop = ()=>{
        clearSilenceTimer();
        silenceTimeoutRef.current = setTimeout(()=>{
            const elapsed = Date.now() - recordingStartedAtRef.current;
            if (speechDetectedRef.current && elapsed >= MIN_RECORDING_MS && mediaRecorderRef.current?.state === "recording") {
                stopRecording();
            }
        }, SILENCE_AUTOSTOP_MS);
    };
    const runExecution = async (audio)=>{
        setIsLoading(true);
        setError("");
        setResult(null);
        setHints([]);
        try {
            const formData = new FormData();
            formData.append("audio", audio, "voice-command.webm");
            const response = await fetch("/api/execute", {
                method: "POST",
                body: formData
            });
            const payload = await response.json();
            if (payload.transcript) {
                setTranscript(payload.transcript);
                setLiveTranscript("");
            }
            if (!response.ok) {
                if (payload.supportedCommands?.length) {
                    setHints(payload.supportedCommands);
                }
                throw new Error(payload.error ?? t.invalidAudioCommand);
            }
            setResult(payload);
            setAudioBlob(null);
        } catch (executionError) {
            setError(formatError(executionError, t.unknownError));
        } finally{
            setIsLoading(false);
        }
    };
    const startRecording = async ()=>{
        setError("");
        setResult(null);
        setLiveTranscript("");
        setTranscript("");
        clearSilenceTimer();
        speechDetectedRef.current = false;
        recordingStartedAtRef.current = Date.now();
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                audio: true
            });
            const recorder = new MediaRecorder(stream, {
                mimeType: "audio/webm"
            });
            chunksRef.current = [];
            const SpeechRecognitionCtor = getSpeechRecognitionConstructor();
            if (SpeechRecognitionCtor) {
                const recognition = new SpeechRecognitionCtor();
                recognition.lang = speechLocales[language];
                recognition.interimResults = true;
                recognition.continuous = true;
                recognition.onresult = (event)=>{
                    const finalSegments = [];
                    const interimSegments = [];
                    for(let index = 0; index < event.results.length; index += 1){
                        const resultItem = event.results[index];
                        const segment = resultItem[0]?.transcript ?? "";
                        if (resultItem.isFinal) {
                            finalSegments.push(segment);
                        } else {
                            interimSegments.push(segment);
                        }
                    }
                    const mergedText = `${finalSegments.join(" ")} ${interimSegments.join(" ")}`.replace(/\s+/g, " ").trim();
                    if (mergedText) {
                        speechDetectedRef.current = true;
                        scheduleSilenceAutostop();
                        setLiveTranscript(mergedText);
                        setTranscript(mergedText);
                    }
                };
                recognition.onerror = ()=>{
                    setLiveTranscript("");
                };
                recognition.start();
                speechRecognitionRef.current = recognition;
            }
            recorder.ondataavailable = (event)=>{
                if (event.data.size > 0) {
                    chunksRef.current.push(event.data);
                }
            };
            recorder.onstop = ()=>{
                const blob = new Blob(chunksRef.current, {
                    type: "audio/webm"
                });
                setAudioBlob(blob);
                stream.getTracks().forEach((track)=>track.stop());
                speechRecognitionRef.current?.stop();
                clearSilenceTimer();
                speechDetectedRef.current = false;
                void runExecution(blob);
            };
            recorder.start();
            mediaRecorderRef.current = recorder;
            setIsRecording(true);
        } catch  {
            setError(t.micAccessError);
        }
    };
    const stopRecording = ()=>{
        clearSilenceTimer();
        if (mediaRecorderRef.current?.state === "recording") {
            mediaRecorderRef.current.stop();
        }
        speechRecognitionRef.current?.stop();
        setIsRecording(false);
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
    const handleSaveLocalUser = async ()=>{
        if (!localUserEmail.trim() || !localUserPassword.trim()) {
            setLocalUsersError(t.localUsersSaveError);
            return;
        }
        setLocalUsersLoading(true);
        setLocalUsersError("");
        setLocalUsersMessage("");
        try {
            const response = await fetch("/api/auth/local-users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: localUserEmail,
                    password: localUserPassword
                })
            });
            const payload = await response.json();
            if (!response.ok) {
                throw new Error(payload.error ?? t.localUsersSaveError);
            }
            setLocalUsersMessage(t.localUsersSaved);
            setLocalUserPassword("");
            await loadLocalUsers();
        } catch (saveError) {
            setLocalUsersError(formatError(saveError, t.localUsersSaveError));
        } finally{
            setLocalUsersLoading(false);
        }
    };
    const handleDeleteLocalUser = async (email)=>{
        setLocalUsersLoading(true);
        setLocalUsersError("");
        setLocalUsersMessage("");
        try {
            const response = await fetch("/api/auth/local-users", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email
                })
            });
            const payload = await response.json();
            if (!response.ok) {
                throw new Error(payload.error ?? t.localUsersDeleteError);
            }
            setLocalUsersMessage(t.localUsersDeleted);
            await loadLocalUsers();
        } catch (deleteError) {
            setLocalUsersError(formatError(deleteError, t.localUsersDeleteError));
        } finally{
            setLocalUsersLoading(false);
        }
    };
    const primaryButtonClass = isRecording ? "bg-red-500 text-white hover:bg-red-400" : "bg-gradient-to-br from-sky-400 via-cyan-400 to-blue-500 text-zinc-950 hover:from-sky-300 hover:to-blue-400";
    const primaryButtonLabel = isLoading ? t.buttonProcessing : isRecording ? t.buttonStop : t.buttonSpeak;
    const panelClass = theme === "dark" ? "rounded-2xl border border-white/15 bg-white/5 p-5 shadow-[0_8px_24px_-16px_rgba(59,130,246,0.35)] backdrop-blur-2xl" : "rounded-2xl border border-zinc-200 bg-white p-5 shadow-[0_8px_24px_-16px_rgba(15,23,42,0.2)]";
    const mainClass = theme === "dark" ? "min-h-screen bg-zinc-950 text-zinc-100" : "min-h-screen bg-zinc-50 text-zinc-900";
    const subtitleClass = theme === "dark" ? "text-zinc-300" : "text-zinc-600";
    const helperCardClass = theme === "dark" ? "rounded-xl border border-white/10 bg-zinc-950/70 px-4 py-2 text-xs text-zinc-300" : "rounded-xl border border-zinc-200 bg-zinc-100 px-4 py-2 text-xs text-zinc-700";
    const topPanelClass = theme === "dark" ? "rounded-3xl border border-white/15 bg-white/5 p-6 shadow-[0_10px_28px_-18px_rgba(56,189,248,0.45)] backdrop-blur-2xl md:min-h-[260px]" : "rounded-3xl border border-zinc-200 bg-white p-6 shadow-[0_10px_28px_-18px_rgba(15,23,42,0.25)] md:min-h-[260px]";
    const titleClass = theme === "dark" ? "bg-gradient-to-r from-white via-zinc-100 to-zinc-300 bg-clip-text text-3xl font-semibold tracking-tight text-transparent sm:text-4xl" : "bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-500 bg-clip-text text-3xl font-semibold tracking-tight text-transparent sm:text-4xl";
    const topLabelClass = theme === "dark" ? "text-zinc-400" : "text-zinc-500";
    const statusTextClass = theme === "dark" ? "text-zinc-200" : "text-zinc-700";
    const transcriptTextClass = theme === "dark" ? "text-zinc-100" : "text-zinc-800";
    const emptyTextClass = theme === "dark" ? "text-zinc-400" : "text-zinc-500";
    const linkClass = theme === "dark" ? "inline-flex items-center gap-1 font-medium text-sky-300 hover:text-sky-200" : "inline-flex items-center gap-1 font-medium text-sky-700 hover:text-sky-600";
    const hintBoxClass = theme === "dark" ? "mt-4 rounded-lg border border-zinc-700 bg-zinc-950/70 p-3 text-xs text-zinc-300" : "mt-4 rounded-lg border border-zinc-200 bg-zinc-100 p-3 text-xs text-zinc-700";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: mainClass,
        children: [
            theme === "dark" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none fixed inset-0 -z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-1/2 top-16 h-72 w-72 -translate-x-1/2 rounded-full bg-sky-500/10 blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 684,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-10 right-20 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 685,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 683,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto flex min-h-screen w-full max-w-4xl flex-col justify-center gap-6 px-6 py-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "space-y-3 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-center justify-end gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: theme === "dark" ? "inline-flex h-10 items-center rounded-full border border-white/20 bg-white/5 px-2" : "inline-flex h-10 items-center rounded-full border border-zinc-300 bg-white px-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            role: "group",
                                            "aria-label": t.languageSelectAria,
                                            className: theme === "dark" ? "inline-flex h-8 overflow-hidden rounded-full border border-white/15 bg-zinc-900/60" : "inline-flex h-8 overflow-hidden rounded-full border border-zinc-300 bg-zinc-100",
                                            children: languageOptions.map((option)=>{
                                                const isActive = language === option.code;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>setLanguage(option.code),
                                                    className: isActive ? theme === "dark" ? "inline-flex h-8 items-center bg-sky-500/90 px-2.5 text-xs font-semibold text-white" : "inline-flex h-8 items-center bg-sky-600 px-2.5 text-xs font-semibold text-white" : theme === "dark" ? "inline-flex h-8 items-center px-2.5 text-xs font-medium text-zinc-300 transition hover:bg-white/10" : "inline-flex h-8 items-center px-2.5 text-xs font-medium text-zinc-700 transition hover:bg-zinc-200",
                                                    "aria-pressed": isActive,
                                                    children: option.label
                                                }, option.code, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 711,
                                                    columnNumber: 21
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 698,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 691,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setTheme((current)=>current === "dark" ? "light" : "dark"),
                                        className: theme === "dark" ? "inline-flex h-10 items-center rounded-full border border-white/20 bg-white/10 px-4 text-xs font-medium text-zinc-200 transition hover:bg-white/15" : "inline-flex h-10 items-center rounded-full border border-zinc-300 bg-white px-4 text-xs font-medium text-zinc-700 transition hover:bg-zinc-100",
                                        "aria-label": t.themeToggleAria,
                                        children: theme === "dark" ? t.themeLight : t.themeDark
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 732,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: handleSignOut,
                                        className: theme === "dark" ? "inline-flex h-10 items-center rounded-full border border-white/20 bg-white/10 px-4 text-xs font-medium text-zinc-200 transition hover:bg-white/15" : "inline-flex h-10 items-center rounded-full border border-zinc-300 bg-white px-4 text-xs font-medium text-zinc-700 transition hover:bg-zinc-100",
                                        children: t.signOut
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 744,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 690,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `text-sm uppercase tracking-[0.2em] ${topLabelClass}`,
                                children: t.headerSubtitle
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 756,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: titleClass,
                                children: "Whisper + AWX"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 757,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `mx-auto max-w-2xl text-sm ${subtitleClass}`,
                                children: t.pageDescription
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 760,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 689,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 gap-6 md:grid-cols-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: topPanelClass,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex h-full flex-col items-center justify-center gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: isRecording ? stopRecording : startRecording,
                                            className: `group relative flex h-20 w-20 items-center justify-center rounded-full border border-white/35 text-2xl font-semibold shadow-lg shadow-sky-500/20 ring-2 ring-white/15 transition-all duration-200 active:scale-95 disabled:cursor-not-allowed disabled:opacity-60 ${primaryButtonClass}`,
                                            disabled: isLoading,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `absolute inset-0 rounded-full ${isRecording ? "animate-ping bg-red-500/30" : ""}`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 773,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "relative",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2.2",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        className: "h-8 w-8",
                                                        "aria-hidden": "true",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                x: "9",
                                                                y: "3",
                                                                width: "6",
                                                                height: "12",
                                                                rx: "3"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 788,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M5 11a7 7 0 0 0 14 0"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 789,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M12 18v3"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 790,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M8 21h8"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 791,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 777,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 776,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 768,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: `text-sm font-medium ${statusTextClass}`,
                                            children: primaryButtonLabel
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 796,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: helperCardClass,
                                            children: isLoading ? t.statusProcessing : liveTranscript ? t.statusListening : audioBlob ? t.statusCaptured : t.statusReady
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 798,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 767,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 766,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: `${panelClass} h-full md:min-h-[260px]`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: `text-xs font-semibold uppercase tracking-wider ${topLabelClass}`,
                                        children: t.sectionTranscript
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 811,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: `mt-3 min-h-16 text-sm leading-relaxed ${transcriptTextClass}`,
                                        children: transcript || t.transcriptPlaceholder
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 812,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 810,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 765,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: panelClass,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: `text-xs font-semibold uppercase tracking-wider ${topLabelClass}`,
                                children: t.sectionResult
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 819,
                                columnNumber: 11
                            }, this),
                            error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-3 rounded-lg border border-red-500/40 bg-red-500/10 px-3 py-2 text-sm text-red-300",
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 822,
                                columnNumber: 13
                            }, this) : null,
                            result ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `mt-3 space-y-2 text-sm ${transcriptTextClass}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            t.commandDetected,
                                            ": ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: result.matchedCommand
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 830,
                                                columnNumber: 38
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 829,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            "Template ID: ",
                                            result.templateId
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 832,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            "Job ID: ",
                                            result.jobId
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 833,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: result.awxUrl,
                                        target: "_blank",
                                        rel: "noreferrer",
                                        className: linkClass,
                                        children: [
                                            t.viewAwx,
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "↗"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 840,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 834,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 828,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `mt-3 text-sm ${emptyTextClass}`,
                                children: t.noExecution
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 844,
                                columnNumber: 13
                            }, this),
                            hints.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: hintBoxClass,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-semibold",
                                        children: t.availableCommands
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 849,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: hints.join(", ")
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 850,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 848,
                                columnNumber: 13
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 818,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: panelClass,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-center justify-between gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: `text-xs font-semibold uppercase tracking-wider ${topLabelClass}`,
                                        children: t.localUsersTitle
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 857,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>void loadLocalUsers(),
                                        disabled: localUsersLoading,
                                        className: theme === "dark" ? "inline-flex h-8 items-center rounded-full border border-white/20 bg-white/10 px-3 text-xs font-medium text-zinc-200 transition hover:bg-white/15 disabled:cursor-not-allowed disabled:opacity-60" : "inline-flex h-8 items-center rounded-full border border-zinc-300 bg-white px-3 text-xs font-medium text-zinc-700 transition hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-60",
                                        children: t.localUsersReload
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 858,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 856,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `mt-2 text-sm ${subtitleClass}`,
                                children: t.localUsersDescription
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 872,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 grid grid-cols-1 gap-3 md:grid-cols-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "email",
                                        value: localUserEmail,
                                        onChange: (event)=>setLocalUserEmail(event.target.value),
                                        placeholder: t.localUsersEmail,
                                        className: theme === "dark" ? "rounded-lg border border-white/15 bg-zinc-900/70 px-3 py-2 text-sm text-zinc-100 outline-none ring-sky-400 transition focus:ring" : "rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-800 outline-none ring-sky-500 transition focus:ring"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 875,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "password",
                                        value: localUserPassword,
                                        onChange: (event)=>setLocalUserPassword(event.target.value),
                                        placeholder: t.localUsersPassword,
                                        className: theme === "dark" ? "rounded-lg border border-white/15 bg-zinc-900/70 px-3 py-2 text-sm text-zinc-100 outline-none ring-sky-400 transition focus:ring" : "rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-800 outline-none ring-sky-500 transition focus:ring"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 886,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>void handleSaveLocalUser(),
                                        disabled: localUsersLoading,
                                        className: "inline-flex h-10 items-center justify-center rounded-lg bg-gradient-to-br from-sky-400 via-cyan-400 to-blue-500 px-4 text-sm font-semibold text-zinc-950 transition hover:from-sky-300 hover:to-blue-400 disabled:cursor-not-allowed disabled:opacity-60",
                                        children: t.localUsersSave
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 897,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 874,
                                columnNumber: 11
                            }, this),
                            localUsersError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-3 rounded-lg border border-red-500/40 bg-red-500/10 px-3 py-2 text-sm text-red-300",
                                children: localUsersError
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 908,
                                columnNumber: 13
                            }, this) : null,
                            localUsersMessage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-3 rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-3 py-2 text-sm text-emerald-300",
                                children: localUsersMessage
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 914,
                                columnNumber: 13
                            }, this) : null,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: hintBoxClass,
                                children: localUsers.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: localUsers.map((email)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "truncate",
                                                    children: email
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 924,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>void handleDeleteLocalUser(email),
                                                    disabled: localUsersLoading,
                                                    className: "inline-flex h-8 items-center rounded-lg border border-red-500/40 bg-red-500/10 px-3 text-xs font-medium text-red-300 transition hover:bg-red-500/20 disabled:cursor-not-allowed disabled:opacity-60",
                                                    children: t.localUsersDelete
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 925,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, email, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 923,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 921,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: t.localUsersEmpty
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 937,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 919,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 855,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 688,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 681,
        columnNumber: 5
    }, this);
}
_s(Home, "X8PbcZt9sAWsJACq8kdcubg0dp8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_d4cb3365._.js.map