"use client";

import { useEffect, useMemo, useState } from "react";
import Modal from "@/components/ui/Modal";
import UsersTable from "@/components/dashboard/admin/UsersTable";
import AdminUserForm from "@/components/dashboard/admin/AdminUserForm";
import LogoutButton from "@/components/ui/LogoutButton";
import { listUsers, createUser, updateUser, deleteUser } from "@/lib/adminUsersApi";

type Role = "USER" | "ADMIN";

type SessionUser = {
  email: string;
  name: string;
  role: Role;
};

type UserRow = {
  id: string;
  name: string;
  email: string;
  role: Role;
  createdAt: string;
};

type ViewMode = "CLIENTES" | "ADMINS";
type ModalMode = "INFO" | "CONFIRM";

export default function AdminDashboard({ user }: { user: SessionUser }) {
  const [view, setView] = useState<ViewMode>("CLIENTES");
  const [rows, setRows] = useState<UserRow[]>([]);
  const [loading, setLoading] = useState(false);

  // Form (crear / editar)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<Role>("USER");
  const [password, setPassword] = useState("");

  // Edit mode
  const [editingId, setEditingId] = useState<string | null>(null);
  const isEditing = editingId !== null;

  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<ModalMode>("INFO");
  const [modalTitle, setModalTitle] = useState("Aviso");
  const [modalMessage, setModalMessage] = useState("");
  const [modalConfirmText, setModalConfirmText] = useState("Aceptar");
  const [modalCancelText, setModalCancelText] = useState("Cancelar");
  const [modalOnConfirm, setModalOnConfirm] = useState<() => void>(() => {});

  function openInfo(message: string, title = "Listo") {
    setModalMode("INFO");
    setModalTitle(title);
    setModalMessage(message);
    setModalConfirmText("Aceptar");
    setModalCancelText("Cancelar");
    setModalOnConfirm(() => () => setModalOpen(false));
    setModalOpen(true);
  }

  function openConfirm(
    message: string,
    onConfirm: () => void,
    title = "Confirmar"
  ) {
    setModalMode("CONFIRM");
    setModalTitle(title);
    setModalMessage(message);
    setModalConfirmText("Aceptar");
    setModalCancelText("Cancelar");
    setModalOnConfirm(() => () => {
      setModalOpen(false);
      onConfirm();
    });
    setModalOpen(true);
  }

  function resetForm() {
    setName("");
    setEmail("");
    setRole("USER");
    setPassword("");
    setEditingId(null);
  }

  const adminCount = useMemo(
    () => rows.filter((r) => r.role === "ADMIN").length,
    [rows]
  );

  async function loadList(nextView = view) {
  setLoading(true);

  try {
    const roleParam = nextView === "ADMINS" ? "ADMIN" : "USER";
    const users = await listUsers(roleParam);
    setRows(users);
  } catch (e: any) {
    openInfo(e.message || "Error", "Error");
  } finally {
    setLoading(false);
  }
}

  useEffect(() => {
    loadList(view);
  }, [view]);

  function handleEditClick(r: UserRow) {
    setEditingId(r.id);
    setName(r.name);
    setEmail(r.email);
    setRole(r.role);
    setPassword("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
        // UPDATE
        if (isEditing && editingId) {
        const payload: any = { name, email, role };
        if (password.trim()) payload.password = password;

        await updateUser(editingId, payload);

        openInfo("Usuario actualizado");
        resetForm();
        await loadList(view);
        return;
        }

        // CREATE
        await createUser({ name, email, role, password });

        openInfo("Usuario registrado");
        resetForm();
        await loadList(view);
    } catch (e: any) {
        openInfo(e.message || "Error", "Error");
    }
    }

    function handleDelete(id: string) {
    openConfirm("¿Deseas eliminar este usuario?", async () => {
        try {
        await deleteUser(id);

        openInfo("Usuario eliminado");
        if (editingId === id) resetForm();
        await loadList(view);
        } catch (e: any) {
        openInfo(e.message || "Error", "Error");
        }
    });
    }

  useEffect(() => {
    resetForm();
  }, [view]);

  return (
    <main className="min-h-screen bg-gray-50">
      <Modal
        open={modalOpen}
        title={modalTitle}
        message={modalMessage}
        confirmText={modalConfirmText}
        cancelText={modalCancelText}
        showCancel={modalMode === "CONFIRM"}
        onClose={() => setModalOpen(false)}
        onConfirm={modalOnConfirm}
      />

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-3xl bg-white p-8 shadow-sm">
            
            <div className="flex items-start justify-between">
                <div >
                <h2 className="text-3xl font-extrabold text-[#1540b7] text-[28px] sm:text-[30px]">
                    ¡Bienvenido, {user.name}!
                </h2>

                <p className="mt-2 text-gray-600">
                     Has iniciado sesión como{" "}
                    <span className="font-semibold">{user.email}</span>
                </p>
            </div>

            <LogoutButton />
        </div>
            
            
          <div className="mt-8 grid gap-6 grid-cols-1 lg:grid-cols-[240px_1fr] text-[11px] sm:text-[16px]">
    
            <aside className="rounded-3xl border p-4 flex gap-2 lg:block ">
              <button
                onClick={() => setView("CLIENTES")}
                className={`w-full text-center px-2 py-3 rounded-2xl font-semibold transition ${
                  view === "CLIENTES"
                    ? "bg-[#1540b7] text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                Ver clientes
              </button>

              <button
                onClick={() => setView("ADMINS")}
                className={`mt-2 w-full text-center px-4 py-3 rounded-2xl font-semibold transition ${
                  view === "ADMINS"
                    ? "bg-[#1540b7] text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                Ver administradores
              </button>
            </aside>

            <div className="space-y-6">

              {/* Form crear/editar */}

              <AdminUserForm
                isEditing={isEditing}
                name={name}
                email={email}
                role={role}
                password={password}
                onNameChange={setName}
                onEmailChange={setEmail}
                onRoleChange={setRole}
                onPasswordChange={setPassword}
                onSubmit={handleSubmit}
                onCancel={resetForm}
                onReload={() => loadList(view)}
                />

              {/* Tabla */}

              <UsersTable
                rows={rows}
                loading={loading}
                view={view}
                adminCount={adminCount}
                onEdit={handleEditClick}
                onDelete={handleDelete}
                />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}