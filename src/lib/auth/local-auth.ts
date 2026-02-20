import type { AuthResult, AuthUser } from "@/lib/auth/types";
import { verifyStoredLocalUser } from "@/lib/auth/local-user-store";

type LocalCredential = {
  email: string;
  username: string;
  password: string;
  role: "administrativo";
};

function parseLocalUsers(): LocalCredential[] {
  const raw = process.env.LOCAL_AUTH_USERS ?? "";
  if (!raw.trim()) {
    return [];
  }

  return raw
    .split(";")
    .map((entry) => entry.trim())
    .filter(Boolean)
    .map((entry) => {
      const separator = entry.indexOf(":");
      if (separator <= 0) {
        return null;
      }

      const loginValue = entry.slice(0, separator).trim().toLowerCase();
      const password = entry.slice(separator + 1).trim();

      if (!loginValue || !password) {
        return null;
      }

      if (loginValue.includes("@")) {
        return {
          email: loginValue,
          username: loginValue.split("@")[0] ?? "",
          password,
          role: "administrativo",
        };
      }

      return {
        email: `${loginValue}@local`,
        username: loginValue,
        password,
        role: "administrativo",
      };
    })
    .filter((item): item is LocalCredential => item !== null);
}

export async function authenticateLocal(identifier: string, password: string): Promise<AuthResult> {
  const normalizedIdentifier = identifier.trim().toLowerCase();
  let storedUser = null;

  try {
    storedUser = await verifyStoredLocalUser(normalizedIdentifier, password);
  } catch {
    storedUser = null;
  }

  if (storedUser) {
    const displayName = [storedUser.firstName, storedUser.lastName].filter(Boolean).join(" ");

    return {
      ok: true,
      user: {
        email: storedUser.email,
        username: storedUser.username,
        firstName: storedUser.firstName,
        lastName: storedUser.lastName,
        displayName: displayName || storedUser.username,
        role: storedUser.role,
        source: "local",
      },
    };
  }

  {
    const users = parseLocalUsers();
    const localUser = users.find(
      (user) => user.email === normalizedIdentifier || user.username === normalizedIdentifier,
    );

    if (!localUser || localUser.password !== password) {
      return { ok: false, error: "Credenciales locales inválidas." };
    }

    const user: AuthUser = {
      email: localUser.email,
      username: localUser.username,
      displayName: localUser.username,
      role: localUser.role,
      source: "local",
    };

    return { ok: true, user };
  }
}