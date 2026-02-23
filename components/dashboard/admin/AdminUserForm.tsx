"use client";

type Role = "USER" | "ADMIN";

export default function AdminUserForm({
  isEditing,
  name,
  email,
  role,
  password,
  onNameChange,
  onEmailChange,
  onRoleChange,
  onPasswordChange,
  onSubmit,
  onCancel,
  onReload,
}: {
  isEditing: boolean;
  name: string;
  email: string;
  role: Role;
  password: string;
  onNameChange: (v: string) => void;
  onEmailChange: (v: string) => void;
  onRoleChange: (v: Role) => void;
  onPasswordChange: (v: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  onCancel: () => void;
  onReload: () => void;
}) {
  return (
    <div className="rounded-3xl border p-6">
      <h3 className="text-lg font-extrabold text-gray-900">
        {isEditing ? "Editar usuario" : "Crear usuario"}
      </h3>

      <form
        onSubmit={onSubmit}
        className="mt-4 grid gap-4 md:grid-cols-2"
      >
        <input
          value={name}
          onChange={(e) => onNameChange(e.target.value)}
          placeholder="Nombre"
          className="rounded-xl border px-4 py-3 outline-none focus:ring-2"
          required
        />

        <input
          value={email}
          onChange={(e) => onEmailChange(e.target.value)}
          placeholder="Correo"
          type="email"
          className="rounded-xl border px-4 py-3 outline-none focus:ring-2"
          required
        />

        <select
          value={role}
          onChange={(e) => onRoleChange(e.target.value as Role)}
          className="rounded-xl border px-4 py-3 outline-none focus:ring-2"
        >
          <option value="USER">USER</option>
          <option value="ADMIN">ADMIN</option>
        </select>

        <input
          value={password}
          onChange={(e) => onPasswordChange(e.target.value)}
          placeholder={
            isEditing
              ? "Nueva contraseña (opcional)"
              : "Contraseña (mínimo 6)"
          }
          type="password"
          className="rounded-xl border px-4 py-3 outline-none focus:ring-2"
          required={!isEditing}
        />

        <div className="md:col-span-2 flex flex-wrap items-center gap-3">
          <button
            type="submit"
            className="rounded-xl bg-[#1540b7] px-5 py-3 font-semibold text-white hover:opacity-95"
          >
            {isEditing ? "Actualizar" : "Guardar"}
          </button>

          <button
            type="button"
            onClick={onReload}
            className="rounded-xl border px-5 py-3 font-semibold hover:bg-gray-50"
          >
            Recargar
          </button>

          {isEditing && (
            <button
              type="button"
              onClick={onCancel}
              className="rounded-xl border px-5 py-3 font-semibold hover:bg-gray-50"
            >
              Cancelar
            </button>
          )}
        </div>
      </form>
    </div>
  );
}