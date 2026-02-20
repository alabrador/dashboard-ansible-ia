export type UserRole = "administrativo" | "tecnico";

export type AuthUser = {
  email: string;
  username?: string;
  firstName?: string;
  lastName?: string;
  displayName?: string;
  role?: UserRole;
  source: "local" | "ldap";
};

export type AuthResult = {
  ok: boolean;
  user?: AuthUser;
  error?: string;
};