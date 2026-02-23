"use client";

type Role = "USER" | "ADMIN";

type UserRow = {
  id: string;
  name: string;
  email: string;
  role: Role;
  createdAt: string;
};

export default function UsersTable({
  rows,
  loading,
  view,
  adminCount,
  onEdit,
  onDelete,
}: {
  rows: UserRow[];
  loading: boolean;
  view: "CLIENTES" | "ADMINS";
  adminCount: number;
  onEdit: (r: UserRow) => void;
  onDelete: (id: string) => void;
}) {
  return (
    <div className="rounded-3xl border p-6">
      <h3 className="text-lg font-extrabold text-gray-900">
        {view === "ADMINS" ? "Administradores" : "Clientes registrados"}
      </h3>

      {loading ? (
        <p className="mt-4 text-gray-600">Cargando...</p>
      ) : (
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-left">
            <thead className="text-sm text-gray-600">
              <tr className="border-b">
                <th className="py-3">Nombre</th>
                <th className="py-3">Correo</th>
                <th className="py-3">Rol</th>
                <th className="py-3">Creado</th>
                <th className="py-3">Acciones</th>
              </tr>
            </thead>

            <tbody>
              {rows.map((r) => {
                const disableDelete = r.role === "ADMIN" && adminCount <= 1;

                return (
                  <tr key={r.id} className="border-b">
                    <td className="py-3">{r.name}</td>
                    <td className="py-3">{r.email}</td>
                    <td className="py-3">
                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ${
                          r.role === "ADMIN"
                            ? "bg-green-100 text-green-700"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {r.role}
                      </span>
                    </td>
                    <td className="py-3">
                      {new Date(r.createdAt).toLocaleString()}
                    </td>
                    <td className="py-3 flex gap-2">
                      <button
                        className="rounded-lg border px-3 py-1 text-sm font-semibold hover:bg-gray-50"
                        onClick={() => onEdit(r)}
                      >
                        Editar
                      </button>

                      <button
                        className={`rounded-lg px-3 py-1 text-sm font-semibold border ${
                          disableDelete
                            ? "opacity-40 cursor-not-allowed"
                            : "hover:bg-red-50"
                        }`}
                        disabled={disableDelete}
                        onClick={() => onDelete(r.id)}
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {rows.length === 0 && (
            <p className="mt-4 text-gray-600">No hay registros.</p>
          )}

          {view === "ADMINS" && adminCount <= 1 && (
            <p className="mt-3 text-sm text-gray-600">
              * No se puede eliminar el último administrador.
            </p>
          )}
        </div>
      )}
    </div>
  );
}