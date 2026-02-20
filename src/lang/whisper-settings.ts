import { type Language } from "@/lang/core";

export type WhisperSettingsTranslation = {
  logoAlt: string;
  languageSelectAria: string;
  settingsMenuAria: string;
  userMenuAria: string;
  menuGoApp: string;
  menuUsers: string;
  menuLdapSettings: string;
  menuAnsibleSettings: string;
  menuWhisperSettings: string;
  currentUserLabel: string;
  unknownUser: string;
  signOut: string;
  signOutError: string;
  themeToggleAria: string;
  themeLight: string;
  themeDark: string;
  headerTag: string;
  headerTitle: string;
  headerDescription: string;
  sectionConfig: string;
  baseUrlLabel: string;
  baseUrlPlaceholder: string;
  baseUrlHelp: string;
  save: string;
  testConnection: string;
  loading: string;
  loadError: string;
  saveSuccess: string;
  saveError: string;
  testSuccess: string;
  testError: string;
};

export const whisperSettingsTranslations: Record<Language, WhisperSettingsTranslation> = {
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
    headerTitle: "Configuración Whisper",
    headerDescription: "Configura la URL del servidor Whisper desde la interfaz.",
    sectionConfig: "Parámetros de conexión",
    baseUrlLabel: "URL base del servidor",
    baseUrlPlaceholder: "http://127.0.0.1:5000",
    baseUrlHelp: "Ingresa solo la URL base. No agregues /transcribe.",
    save: "Guardar",
    testConnection: "Probar conexión",
    loading: "Guardando...",
    loadError: "No se pudo cargar la configuración de Whisper.",
    saveSuccess: "Configuración de Whisper guardada.",
    saveError: "No se pudo guardar la configuración de Whisper.",
    testSuccess: "Conexión Whisper exitosa.",
    testError: "No se pudo validar la conexión Whisper.",
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
    headerTitle: "Whisper settings",
    headerDescription: "Configure the Whisper server URL from the UI.",
    sectionConfig: "Connection settings",
    baseUrlLabel: "Server base URL",
    baseUrlPlaceholder: "http://127.0.0.1:5000",
    baseUrlHelp: "Enter only the base URL. Do not add /transcribe.",
    save: "Save",
    testConnection: "Test connection",
    loading: "Saving...",
    loadError: "Could not load Whisper configuration.",
    saveSuccess: "Whisper configuration saved.",
    saveError: "Could not save Whisper configuration.",
    testSuccess: "Whisper connection successful.",
    testError: "Could not validate Whisper connection.",
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
    headerTitle: "Configurazione Whisper",
    headerDescription: "Configura l'URL del server Whisper dall'interfaccia.",
    sectionConfig: "Parametri di connessione",
    baseUrlLabel: "URL base del server",
    baseUrlPlaceholder: "http://127.0.0.1:5000",
    baseUrlHelp: "Inserisci solo l'URL base. Non aggiungere /transcribe.",
    save: "Salva",
    testConnection: "Test connessione",
    loading: "Salvataggio...",
    loadError: "Impossibile caricare la configurazione Whisper.",
    saveSuccess: "Configurazione Whisper salvata.",
    saveError: "Impossibile salvare la configurazione Whisper.",
    testSuccess: "Connessione Whisper riuscita.",
    testError: "Impossibile validare la connessione Whisper.",
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
    headerTitle: "Configuração Whisper",
    headerDescription: "Configure a URL do servidor Whisper pela interface.",
    sectionConfig: "Parâmetros de conexão",
    baseUrlLabel: "URL base do servidor",
    baseUrlPlaceholder: "http://127.0.0.1:5000",
    baseUrlHelp: "Informe apenas a URL base. Não adicione /transcribe.",
    save: "Salvar",
    testConnection: "Testar conexão",
    loading: "Salvando...",
    loadError: "Não foi possível carregar a configuração Whisper.",
    saveSuccess: "Configuração Whisper salva.",
    saveError: "Não foi possível salvar a configuração Whisper.",
    testSuccess: "Conexão Whisper bem-sucedida.",
    testError: "Não foi possível validar a conexão Whisper.",
  },
};
