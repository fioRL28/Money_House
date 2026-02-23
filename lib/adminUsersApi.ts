type Role = "USER" | "ADMIN";

export type UserRow = {
  id: string;
  name: string;
  email: string;
  role: Role;
  createdAt: string;
};

function adminHeaders(extra?: Record<string, string>) {
  return {
    "x-user-role": "ADMIN",
    ...(extra || {}),
  };
}

export async function listUsers(role: Role): Promise<UserRow[]> {
  const res = await fetch(`/api/admin/users?role=${role}`, {
    headers: adminHeaders(),
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data?.error || "Error al cargar");
  return data.users || [];
}

export async function createUser(input: {
  name: string;
  email: string;
  role: Role;
  password: string;
}): Promise<UserRow> {
  const res = await fetch("/api/admin/users", {
    method: "POST",
    headers: adminHeaders({ "Content-Type": "application/json" }),
    body: JSON.stringify(input),
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data?.error || "No se pudo crear");
  return data.user;
}

export async function updateUser(
  id: string,
  input: {
    name: string;
    email: string;
    role: Role;
    password?: string;
  }
): Promise<UserRow> {
  const res = await fetch(`/api/admin/users/${id}`, {
    method: "PATCH",
    headers: adminHeaders({ "Content-Type": "application/json" }),
    body: JSON.stringify(input),
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data?.error || "No se pudo actualizar");
  return data.user;
}

export async function deleteUser(id: string): Promise<void> {
  const res = await fetch(`/api/admin/users/${id}`, {
    method: "DELETE",
    headers: adminHeaders(),
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data?.error || "No se pudo eliminar");
}