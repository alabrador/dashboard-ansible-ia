import type { AuthResult, AuthUser } from "@/lib/auth/types";
import { verifyStoredLocalUser } from "@/lib/auth/local-user-store";

type LocalCredential = {
  email: string;
  password: string;
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

      const email = entry.slice(0, separator).trim().toLowerCase();
      const password = entry.slice(separator + 1).trim();

      if (!email || !password) {
        return null;
      }

      return { email, password };
    })
    .filter((item): item is LocalCredential => item !== null);
}

export async function authenticateLocal(email: string, password: string): Promise<AuthResult> {
  const normalizedEmail = email.trim().toLowerCase();
  let storedUserOk = false;

  try {
    storedUserOk = await verifyStoredLocalUser(normalizedEmail, password);
  } catch {
    storedUserOk = false;
  }

  if (!storedUserOk) {
    const users = parseLocalUsers();
    const localUser = users.find((user) => user.email === normalizedEmail);

    if (!localUser || localUser.password !== password) {
      return { ok: false, error: "Credenciales locales inválidas." };
    }
  }

  const user: AuthUser = {
    email: normalizedEmail,
    source: "local",
  };

  return { ok: true, user };
}