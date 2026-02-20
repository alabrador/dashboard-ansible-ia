import { type Language } from "@/lang/core";

export type UsersTranslation = {
  logoAlt: string;
  languageSelectAria: string;
  settingsMenuAria: string;
  userMenuAria: string;
  menuGoApp: string;
  menuUsers: string;
  menuLdapSettings: string;
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
  sectionUsers: string;
  reloadList: string;
  roleLabel: string;
  roleAdmin: string;
  roleTech: string;
  usernamePlaceholder: string;
  firstNamePlaceholder: string;
  lastNamePlaceholder: string;
  emailPlaceholder: string;
  passwordPlaceholder: string;
  saveUser: string;
  updateUser: string;
  editUser: string;
  cancelEdit: string;
  deleteUser: string;
  emptyUsers: string;
  requiredCredentials: string;
  localUsersLoadError: string;
  localUsersSaveError: string;
  localUsersDeleteError: string;
  localUsersSaved: string;
  localUsersDeleted: string;
};

export const usersTranslations: Record<Language, UsersTranslation> = {
  es: {
    logoAlt: "Logo",
    languageSelectAria: "Cambiar idioma",
    settingsMenuAria: "Abrir menú de configuración",
    userMenuAria: "Abrir menú de usuario",
    menuGoApp: "Ir a la app",
    menuUsers: "Gestión de usuarios",
    menuLdapSettings: "Configuración LDAP",
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
    localUsersDeleted: "Usuario eliminado correctamente.",
  },
  en: {
    logoAlt: "Logo",
    languageSelectAria: "Change language",
    settingsMenuAria: "Open settings menu",
    userMenuAria: "Open user menu",
    menuGoApp: "Go to app",
    menuUsers: "User management",
    menuLdapSettings: "LDAP settings",
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
    localUsersDeleted: "User deleted successfully.",
  },
  it: {
    logoAlt: "Logo",
    languageSelectAria: "Cambia lingua",
    settingsMenuAria: "Apri menu impostazioni",
    userMenuAria: "Apri menu utente",
    menuGoApp: "Vai all'app",
    menuUsers: "Gestione utenti",
    menuLdapSettings: "Configurazione LDAP",
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
    localUsersDeleted: "Utente eliminato correttamente.",
  },
  pt: {
    logoAlt: "Logo",
    languageSelectAria: "Alterar idioma",
    settingsMenuAria: "Abrir menu de configurações",
    userMenuAria: "Abrir menu do usuário",
    menuGoApp: "Ir para o app",
    menuUsers: "Gestão de usuários",
    menuLdapSettings: "Configuração LDAP",
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
    localUsersDeleted: "Usuário removido com sucesso.",
  },
};