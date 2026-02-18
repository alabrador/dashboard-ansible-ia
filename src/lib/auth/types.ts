export type AuthUser = {
  email: string;
  source: "local" | "ldap";
};

export type AuthResult = {
  ok: boolean;
  user?: AuthUser;
  error?: string;
};