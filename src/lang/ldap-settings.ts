import { type Language } from "@/lang/core";

export type LdapSettingsTranslation = {
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
  ldapUrlLabel: string;
  baseDnLabel: string;
  userFilterLabel: string;
  bindDnLabel: string;
  bindPasswordLabel: string;
  timeoutLabel: string;
  adminEmailsLabel: string;
  save: string;
  testConnection: string;
  loading: string;
  loadError: string;
  saveSuccess: string;
  saveError: string;
  testSuccess: string;
  testError: string;
};

export const ldapSettingsTranslations: Record<Language, LdapSettingsTranslation> = {
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
    testError: "No se pudo validar la conexión LDAP.",
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
    testError: "Could not validate LDAP connection.",
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
    testError: "Impossibile validare la connessione LDAP.",
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
    testError: "Não foi possível validar a conexão LDAP.",
  },
};
