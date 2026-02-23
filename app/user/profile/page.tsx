"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Modal from "@/components/ui/Modal";

type Role = "USER" | "ADMIN";

type SessionUser = {
  email: string;
  name: string;
  role: Role;
};

export default function UserProfilePage() {
  const router = useRouter();

  const [user, setUser] = useState<SessionUser | null>(null);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Aviso");
  const [modalMessage, setModalMessage] = useState("");

  function openInfo(message: string, title = "Listo") {
    setModalTitle(title);
    setModalMessage(message);
    setModalOpen(true);
  }

  useEffect(() => {
    const email = localStorage.getItem("user_email");
    const nameLS = localStorage.getItem("user_name");
    const role = localStorage.getItem("user_role") as Role | null;

    if (!email || !nameLS || !role) {
      router.replace("/user/login");
      return;
    }

    setUser({ email, name: nameLS, role });
    setName(nameLS);
  }, [router]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!user) return;

    try {
      const payload: any = { name };
      if (password.trim()) payload.password = password;

      const res = await fetch("/api/user/profile", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "x-user-email": user.email,
          "x-user-role": user.role,
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Error al actualizar");

      // actualizar localStorage
      localStorage.setItem("user_name", data.user.name);

      setPassword("");
      openInfo("Perfil actualizado correctamente");
    } catch (e: any) {
      openInfo(e.message || "Error", "Error");
    }
  }

  if (!user) return null;

  return (
    <main className="min-h-screen bg-gray-50">
      <Modal
        open={modalOpen}
        title={modalTitle}
        message={modalMessage}
        confirmText="Aceptar"
        onClose={() => setModalOpen(false)}
        onConfirm={() => setModalOpen(false)}
      />

      <section className="mx-auto max-w-3xl px-6 py-10">
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-extrabold text-[#1540b7]">
            Editar perfil
          </h2>

          <p className="mt-2 text-gray-600">
            Aquí puedes actualizar tu nombre o cambiar tu contraseña.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-6 grid gap-4"
          >
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Correo
              </label>
              <input
                value={user.email}
                disabled
                className="mt-1 w-full rounded-xl border px-4 py-3 bg-gray-100"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Nombre
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 w-full rounded-xl border px-4 py-3 outline-none focus:ring-2"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Nueva contraseña (opcional)
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Mínimo 6 caracteres"
                className="mt-1 w-full rounded-xl border px-4 py-3 outline-none focus:ring-2"
              />
            </div>

            <div className="flex gap-3 mt-4">
              <button
                type="submit"
                className="rounded-xl bg-[#1540b7] px-5 py-3 font-semibold text-white hover:opacity-95"
              >
                Guardar cambios
              </button>

              <button
                type="button"
                onClick={() => router.back()}
                className="rounded-xl border px-5 py-3 font-semibold hover:bg-gray-50"
              >
                Volver
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}