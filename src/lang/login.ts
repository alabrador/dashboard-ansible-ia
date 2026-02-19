import { type Language } from "@/lang/core";

export type LoginTranslation = {
  logoAlt: string;
  appBadge: string;
  pageTitle: string;
  emailLabel: string;
  emailPlaceholder: string;
  passwordLabel: string;
  passwordPlaceholder: string;
  submitIdle: string;
  submitLoading: string;
  languageSelectAria: string;
  themeToggleAria: string;
  themeLight: string;
  themeDark: string;
  loginFailed: string;
  authServiceError: string;
};

export const loginTranslations: Record<Language, LoginTranslation> = {
  es: {
    logoAlt: "Logo",
    appBadge: "Dashboard Ansible IA",
    pageTitle: "Iniciar sesión",
    emailLabel: "Correo",
    emailPlaceholder: "usuario@empresa.com",
    passwordLabel: "Contraseña",
    passwordPlaceholder: "••••••••",
    submitIdle: "Entrar",
    submitLoading: "Validando...",
    languageSelectAria: "Cambiar idioma",
    themeToggleAria: "Cambiar tema",
    themeLight: "☀️ Claro",
    themeDark: "🌙 Oscuro",
    loginFailed: "No se pudo iniciar sesión.",
    authServiceError: "No se pudo conectar con el servicio de autenticación.",
  },
  en: {
    logoAlt: "Logo",
    appBadge: "Ansible AI Dashboard",
    pageTitle: "Sign in",
    emailLabel: "Email",
    emailPlaceholder: "user@company.com",
    passwordLabel: "Password",
    passwordPlaceholder: "••••••••",
    submitIdle: "Sign in",
    submitLoading: "Validating...",
    languageSelectAria: "Change language",
    themeToggleAria: "Toggle theme",
    themeLight: "☀️ Light",
    themeDark: "🌙 Dark",
    loginFailed: "Could not sign in.",
    authServiceError: "Could not connect to the authentication service.",
  },
  it: {
    logoAlt: "Logo",
    appBadge: "Dashboard Ansible IA",
    pageTitle: "Accedi",
    emailLabel: "Email",
    emailPlaceholder: "utente@azienda.com",
    passwordLabel: "Password",
    passwordPlaceholder: "••••••••",
    submitIdle: "Accedi",
    submitLoading: "Convalida...",
    languageSelectAria: "Cambia lingua",
    themeToggleAria: "Cambia tema",
    themeLight: "☀️ Chiaro",
    themeDark: "🌙 Scuro",
    loginFailed: "Impossibile accedere.",
    authServiceError: "Impossibile connettersi al servizio di autenticazione.",
  },
  pt: {
    logoAlt: "Logo",
    appBadge: "Dashboard Ansible IA",
    pageTitle: "Entrar",
    emailLabel: "E-mail",
    emailPlaceholder: "usuario@empresa.com",
    passwordLabel: "Senha",
    passwordPlaceholder: "••••••••",
    submitIdle: "Entrar",
    submitLoading: "Validando...",
    languageSelectAria: "Alterar idioma",
    themeToggleAria: "Alternar tema",
    themeLight: "☀️ Claro",
    themeDark: "🌙 Escuro",
    loginFailed: "Não foi possível entrar.",
    authServiceError: "Não foi possível conectar ao serviço de autenticação.",
  },
};