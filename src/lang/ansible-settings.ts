import { type Language } from "@/lang/core";

export type AnsibleSettingsTranslation = {
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
  hostLabel: string;
  tokenLabel: string;
  save: string;
  testConnection: string;
  loading: string;
  loadError: string;
  saveSuccess: string;
  saveError: string;
  testSuccess: string;
  testError: string;
};

export const ansibleSettingsTranslations: Record<Language, AnsibleSettingsTranslation> = {
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
    headerTitle: "Configuración Ansible/AWX",
    headerDescription: "Configura host y token de Ansible/AWX desde la interfaz.",
    sectionConfig: "Parámetros de conexión",
    hostLabel: "Host / Base URL",
    tokenLabel: "Token API",
    save: "Guardar",
    testConnection: "Probar conexión",
    loading: "Guardando...",
    loadError: "No se pudo cargar la configuración de Ansible/AWX.",
    saveSuccess: "Configuración de Ansible/AWX guardada.",
    saveError: "No se pudo guardar la configuración de Ansible/AWX.",
    testSuccess: "Conexión AWX exitosa.",
    testError: "No se pudo validar la conexión AWX.",
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
    headerTitle: "Ansible/AWX settings",
    headerDescription: "Configure Ansible/AWX host and token from UI.",
    sectionConfig: "Connection settings",
    hostLabel: "Host / Base URL",
    tokenLabel: "API token",
    save: "Save",
    testConnection: "Test connection",
    loading: "Saving...",
    loadError: "Could not load Ansible/AWX configuration.",
    saveSuccess: "Ansible/AWX configuration saved.",
    saveError: "Could not save Ansible/AWX configuration.",
    testSuccess: "AWX connection successful.",
    testError: "Could not validate AWX connection.",
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
    headerTitle: "Configurazione Ansible/AWX",
    headerDescription: "Configura host e token Ansible/AWX dall'interfaccia.",
    sectionConfig: "Parametri di connessione",
    hostLabel: "Host / Base URL",
    tokenLabel: "Token API",
    save: "Salva",
    testConnection: "Test connessione",
    loading: "Salvataggio...",
    loadError: "Impossibile caricare la configurazione Ansible/AWX.",
    saveSuccess: "Configurazione Ansible/AWX salvata.",
    saveError: "Impossibile salvare la configurazione Ansible/AWX.",
    testSuccess: "Connessione AWX riuscita.",
    testError: "Impossibile validare la connessione AWX.",
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
    headerTitle: "Configuração Ansible/AWX",
    headerDescription: "Configure host e token Ansible/AWX pela interface.",
    sectionConfig: "Parâmetros de conexão",
    hostLabel: "Host / Base URL",
    tokenLabel: "Token API",
    save: "Salvar",
    testConnection: "Testar conexão",
    loading: "Salvando...",
    loadError: "Não foi possível carregar a configuração Ansible/AWX.",
    saveSuccess: "Configuração Ansible/AWX salva.",
    saveError: "Não foi possível salvar a configuração Ansible/AWX.",
    testSuccess: "Conexão AWX bem-sucedida.",
    testError: "Não foi possível validar a conexão AWX.",
  },
};
