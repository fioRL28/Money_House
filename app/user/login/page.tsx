"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error ?? "Error al iniciar sesión");
        return;
      }

      // Sesión MVP
      localStorage.setItem("user_email", data.user.email);
      localStorage.setItem("user_name", data.user.name);
      localStorage.setItem("user_role", data.user.role);

      router.push("/user/dashboard");
    } catch {
      setError("Error de red o servidor");
    } finally {
      setLoading(false);
    }
  }

  const robotSrc = "/img/robot/icon_robot1.png"; 
  return (
    <main className=" bg-white">
      <div className="mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-10 py-10 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          
          <section className="text-center ">
            <div className="mx-auto lg:mx-0 w-full max-w-[520px]">
              <div className="flex justify-center ">
                  <div className="animate-pendulum origin-top">
                    <Image
                      src={robotSrc}
                      alt="Robot Money House"
                      width={420}
                      height={320}
                      priority
                      className="h-auto w-[260px] sm:w-[320px] lg:w-[360px] object-contain"
                    />
                  </div>
                </div>

              <p className="mt-6 text-slate-500 text-[16px] sm:text-[18px] leading-relaxed">
                Cambia de forma fácil y segura, con el mejor
                <br className="hidden sm:block" />
                tipo de cambio del Perú.
              </p>

              <h1 className="mt-5 font-black uppercase tracking-tight  text-[#1540b7] leading-[1.05] text-[28px] sm:text-[10px] lg:text-[27px]">
                ¡Cambia dólares y soles
                <br />
                con el mejor tipo de
                <br />
                cambio!
              </h1>
            </div>
          </section>

          {/* DERECHA */}
          <section className="flex justify-center lg:justify-end">
            <div className="w-full max-w-[560px] rounded-[34px] bg-[#EAF1FF] p-6 sm:p-10">
              <h2 className="text-center text-[#1540b7] font-semibold uppercase tracking-tight text-[20px] sm:text-[25px]">
                Ingresar
              </h2>

              {error && (
                <div className="mt-5 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="mt-7 space-y-6">
                {/* Email */}
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tuemail@correo.com"
                    required
                    className={[
                      "w-full rounded-2xl border border-[#1a3fba] bg-white",
                      "px-5 py-3.5 outline-none",
                      "focus:ring-2 focus:ring-[#1540b7]/25",
                    ].join(" ")}
                  />
                </div>

                {/* Password con ojo */}
                <div className="relative">
                  <input
                    type={showPass ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    required
                    className={[
                      "w-full rounded-2xl border border-[#1a3fba] bg-white",
                      "px-5 py-3.5 pr-12 outline-none",
                      "focus:ring-2 focus:ring-[#1540b7]/25",
                    ].join(" ")}
                  />

                  <button
                    type="button"
                    onClick={() => setShowPass((v) => !v)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-600 hover:text-slate-900"
                    aria-label={showPass ? "Ocultar contraseña" : "Mostrar contraseña"}
                  >
                    {showPass ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>

                {/* Botón */}
                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={loading}
                    className={[
                      "w-full sm:w-[260px]",
                      "rounded-2xl bg-[#1540b7] px-6 py-3.5",
                      "font-extrabold text-white text-[18px]",
                      "transition hover:opacity-95 active:scale-[0.99]",
                      "disabled:opacity-60 disabled:cursor-not-allowed",
                    ].join(" ")}
                  >
                    {loading ? "Ingresando..." : "Iniciar Sesión"}
                  </button>
                </div>

                {/* Links */}
                <div className="pt-2 text-center space-y-3">
                  <Link
                    href="/user/forgot-password"
                    className="block text-[#FF9A00] font-semibold underline underline-offset-4 hover:opacity-90 text-[14px] sm:text-[16px]"
                  >
                    ¿Olvidaste tu clave? Recupérala aquí
                  </Link>

                  <Link
                    href="/user/register"
                    className="block text-[#1540b7] font-semibold underline underline-offset-4 hover:opacity-90 text-[14px] sm:text-[16px]"
                  >
                    Eres nuevo aquí? Crea tu cuenta
                  </Link>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}