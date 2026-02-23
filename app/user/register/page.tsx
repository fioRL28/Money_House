"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error ?? "Error al registrarse");
        return;
      }

      // Opción A (recomendada MVP): mandarlo a login
      // router.push("/user/login");

      // Opción B: auto-login (guardas sesión y lo mandas a dashboard)
      localStorage.setItem("user_email", data.user.email);
      localStorage.setItem("user_name", data.user.name);
      localStorage.setItem("user_role", data.user.role ?? "USER");
      router.push("/user/dashboard");
    } catch (err) {
      setError("Error de red o servidor");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-sm border">
        <h1 className="text-2xl font-extrabold text-[#1540b7]">Crear cuenta</h1>
        <p className="mt-2 text-gray-600 text-sm">
          Regístrate con tu nombre, correo y contraseña
        </p>

        {error && (
          <div className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-800">
              Nombre
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-2 w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-[#1540b7]/30"
              placeholder="Fiorela"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-800">
              Correo
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-[#1540b7]/30"
              placeholder="fiorela@test.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-800">
              Contraseña
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-[#1540b7]/30"
              placeholder="Mínimo 6 caracteres"
              minLength={6}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-[#1540b7] px-4 py-3 font-semibold text-white hover:opacity-95 transition disabled:opacity-60"
          >
            {loading ? "Creando..." : "Crear cuenta"}
          </button>
        </form>

        <p className="mt-5 text-sm text-gray-600">
          ¿Ya tienes cuenta?{" "}
          <a className="font-semibold text-[#1540b7]" href="/user/login">
            Iniciar sesión
          </a>
        </p>
      </div>
    </main>
  );
}