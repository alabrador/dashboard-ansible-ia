import { type Language } from "@/lang/core";

export type HomeTranslation = {
  logoAlt: string;
  headerTitle: string;
  themeLight: string;
  themeDark: string;
  themeToggleAria: string;
  languageSelectAria: string;
  headerSubtitle: string;
  pageDescription: string;
  buttonProcessing: string;
  buttonStop: string;
  buttonSpeak: string;
  statusProcessing: string;
  statusListening: string;
  statusCaptured: string;
  statusReady: string;
  sectionTranscript: string;
  transcriptPlaceholder: string;
  sectionResult: string;
  commandDetected: string;
  templateIdLabel: string;
  jobIdLabel: string;
  viewAwx: string;
  noExecution: string;
  availableCommands: string;
  micAccessError: string;
  unknownError: string;
  invalidAudioCommand: string;
  settingsMenuAria: string;
  userMenuAria: string;
  menuUsers: string;
  menuLdapSettings: string;
  currentUserLabel: string;
  unknownUser: string;
  signOut: string;
  signOutError: string;
};

export const speechLocales: Record<Language, string> = {
  es: "es-ES",
  en: "en-US",
  it: "it-IT",
  pt: "pt-PT",
};

export const homeTranslations: Record<Language, HomeTranslation> = {
  es: {
    logoAlt: "Logo",
    headerTitle: "Whisper + AWX",
    themeLight: "☀️ Claro",
    themeDark: "🌙 Oscuro",
    themeToggleAria: "Cambiar tema",
    languageSelectAria: "Cambiar idioma",
    headerSubtitle: "Dashboard Ansible - Whisper IA",
    pageDescription:
      "Presiona el botón, habla que tarea quieres ejecutar y se ejecutará automáticamente en AWX.",
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
    templateIdLabel: "Template ID",
    jobIdLabel: "Job ID",
    viewAwx: "Ver ejecución en AWX",
    noExecution: "Aún no hay ejecución.",
    availableCommands: "Comandos disponibles:",
    micAccessError: "No se pudo acceder al micrófono.",
    unknownError: "Error inesperado.",
    invalidAudioCommand: "No se encontró un comando válido en el audio.",
    settingsMenuAria: "Abrir menú de configuración",
    userMenuAria: "Abrir menú de usuario",
    menuUsers: "Gestión de usuarios",
    menuLdapSettings: "Configuración LDAP",
    currentUserLabel: "Usuario",
    unknownUser: "Sin usuario",
    signOut: "Cerrar sesión",
    signOutError: "No se pudo cerrar sesión.",
  },
  en: {
    logoAlt: "Logo",
    headerTitle: "Whisper + AWX",
    themeLight: "☀️ Light",
    themeDark: "🌙 Dark",
    themeToggleAria: "Toggle theme",
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
    templateIdLabel: "Template ID",
    jobIdLabel: "Job ID",
    viewAwx: "View execution in AWX",
    noExecution: "No execution yet.",
    availableCommands: "Available commands:",
    micAccessError: "Could not access the microphone.",
    unknownError: "Unexpected error.",
    invalidAudioCommand: "No valid command was found in the audio.",
    settingsMenuAria: "Open settings menu",
    userMenuAria: "Open user menu",
    menuUsers: "User management",
    menuLdapSettings: "LDAP settings",
    currentUserLabel: "User",
    unknownUser: "No user",
    signOut: "Sign out",
    signOutError: "Could not sign out.",
  },
  it: {
    logoAlt: "Logo",
    headerTitle: "Whisper + AWX",
    themeLight: "☀️ Chiaro",
    themeDark: "🌙 Scuro",
    themeToggleAria: "Cambia tema",
    languageSelectAria: "Cambia lingua",
    headerSubtitle: "Dashboard Ansible - Whisper IA",
    pageDescription:
      "Premi il pulsante, pronuncia l'attività da eseguire e verrà avviata automaticamente in AWX.",
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
    templateIdLabel: "Template ID",
    jobIdLabel: "Job ID",
    viewAwx: "Vedi esecuzione in AWX",
    noExecution: "Nessuna esecuzione ancora.",
    availableCommands: "Comandi disponibili:",
    micAccessError: "Impossibile accedere al microfono.",
    unknownError: "Errore imprevisto.",
    invalidAudioCommand: "Nessun comando valido trovato nell'audio.",
    settingsMenuAria: "Apri menu impostazioni",
    userMenuAria: "Apri menu utente",
    menuUsers: "Gestione utenti",
    menuLdapSettings: "Configurazione LDAP",
    currentUserLabel: "Utente",
    unknownUser: "Nessun utente",
    signOut: "Esci",
    signOutError: "Impossibile uscire.",
  },
  pt: {
    logoAlt: "Logo",
    headerTitle: "Whisper + AWX",
    themeLight: "☀️ Claro",
    themeDark: "🌙 Escuro",
    themeToggleAria: "Alternar tema",
    languageSelectAria: "Alterar idioma",
    headerSubtitle: "Dashboard Ansible - Whisper IA",
    pageDescription:
      "Pressione o botão, diga a tarefa que deseja executar e ela será executada automaticamente no AWX.",
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
    templateIdLabel: "Template ID",
    jobIdLabel: "Job ID",
    viewAwx: "Ver execução no AWX",
    noExecution: "Ainda não há execução.",
    availableCommands: "Comandos disponíveis:",
    micAccessError: "Não foi possível acessar o microfone.",
    unknownError: "Erro inesperado.",
    invalidAudioCommand: "Nenhum comando válido foi encontrado no áudio.",
    settingsMenuAria: "Abrir menu de configurações",
    userMenuAria: "Abrir menu do usuário",
    menuUsers: "Gestão de usuários",
    menuLdapSettings: "Configuração LDAP",
    currentUserLabel: "Usuário",
    unknownUser: "Sem usuário",
    signOut: "Sair",
    signOutError: "Não foi possível encerrar a sessão.",
  },
};
