"use client";

import Link from "next/link";
import LogoutButton from "@/components/ui/LogoutButton";

type Role = "USER" | "ADMIN";

type SessionUser = {
  email: string;
  name: string;
  role: Role;
};

function Card({
  title,
  desc,
  href,
  cta,
  variant = "primary",
}: {
  title: string;
  desc: string;
  href: string;
  cta: string;
  variant?: "primary" | "outline";
}) {
  const btn =
    variant === "primary"
      ? "rounded-xl bg-[#1540b7] px-4 py-2 font-semibold text-white hover:opacity-95"
      : "rounded-xl border px-4 py-2 font-semibold hover:bg-gray-50";

  return (
    <div className="rounded-2xl border p-6 flex flex-col">
      <h3 className="font-bold text-gray-900">{title}</h3>
      <p className="text-sm text-gray-600 mt-2 flex-1">{desc}</p>

      <Link href={href} className={`mt-4 inline-flex w-fit ${btn}`}>
        {cta}
      </Link>
    </div>
  );
}

export default function UserDashboard({ user }: { user: SessionUser }) {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          {/* Header */}
          <div className="flex items-start justify-between gap-6">
            <div>
              <h2 className="text-3xl font-extrabold text-[#1540b7]">
                ¡Bienvenido, {user.name}!
              </h2>

              <p className="mt-2 text-gray-600">
                Has iniciado sesión como{" "}
                <span className="font-semibold">{user.email}</span>
              </p>
            </div>

            <LogoutButton />
          </div>

          {/* Cards */}
          <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <Card
              title="Mi perfil"
              desc="Edita tu nombre y cambia tu contraseña."
              href="/user/profile"
              cta="Editar perfil"
              variant="primary"
            />

            <Card
              title="Cambiar moneda"
              desc="Próximamente podrás hacer operaciones de cambio desde aquí."
              href=""
              cta="Ir a cambiar"
              variant="outline"
            />

            <Card
              title="Historial"
              desc="Aún no tienes operaciones registradas. Aquí verás tus movimientos cuando empieces a cambiar."
              href=""
              cta="Ver historial"
              variant="outline"
            />
          </div>

          {/* Nota simple (opcional, no depende de data) */}
          <div className="mt-8 rounded-2xl border bg-gray-50 p-5">
            <p className="text-sm text-gray-700">
              * Este panel es tu centro de control. A medida que actives funciones (cambio e historial),
              aparecerán aquí tus datos y movimientos.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}