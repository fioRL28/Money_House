"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "INICIO", href: "/inicio" },
    { name: "NOSOTROS", href: "/nosotros" },
    { name: "EMPRESAS", href: "/empresas" },
    { name: "AYUDA", href: "/ayuda" },
    { name: "BLOG", href: "/blog" },
  ];

  return (
    <nav className="bg-white w-full py-4 border-b border-gray-100 sticky top-0 z-50 overflow-x-clip">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-3 items-center min-w-0">
          {/* IZQUIERDA */}
          <div className="flex items-center justify-start min-w-0">
            <button
              onClick={() => setIsOpen(true)}
              className="lg:hidden text-[#1a3fba] p-2"
              aria-label="Abrir menú"
              type="button"
            >
              <Menu size={34} strokeWidth={3} />
            </button>

            <div className="hidden lg:block">
              <Link href="/inicio">
                <Image
                  src="/img/logo.webp"
                  alt="Money House Logo"
                  width={160}
                  height={60}
                  priority
                />
              </Link>
            </div>
          </div>

          {/* CENTRO */}
          <div className="flex items-center justify-center min-w-0">
            <div className="lg:hidden">
              <Link href="/inicio">
                <Image
                  src="/img/logo.webp"
                  alt="Money House Logo"
                  width={140}
                  height={50}
                  priority
                />
              </Link>
            </div>

            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-[#1a3fba] font-[900] text-[18px] tracking-tight relative group whitespace-nowrap"
                  >
                    {link.name}
                    <span
                      className={[
                        "absolute -bottom-1 left-1/2 -translate-x-1/2 h-1 bg-[#FFB81C] transition-all duration-300",
                        isActive
                          ? "w-8 opacity-100"
                          : "w-0 opacity-0 group-hover:w-8 group-hover:opacity-100",
                      ].join(" ")}
                    />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* DERECHA */}
          <div className="flex items-center justify-end min-w-0">
            <div className="hidden lg:flex items-center space-x-3">
              <Link
                href="/user/login"
                className="bg-[#FFB81C] text-[#1a3fba] px-5 py-2 rounded-xl font-[900] text-[10px] tracking-tighter hover:bg-[#1a3fba] hover:text-white transition-all duration-300 shadow-sm whitespace-nowrap"
              >
                INICIAR SESIÓN
              </Link>
              <Link
                href="/user/register"
                className="bg-[#FFB81C] text-[#1a3fba] px-5 py-2 rounded-xl font-[900] text-[10px] tracking-tighter hover:bg-[#1a3fba] hover:text-white transition-all duration-300 shadow-sm whitespace-nowrap"
              >
                CREAR CUENTA
              </Link>
            </div>

            {/* “Spacer” en móvil: no lo hagas grande */}
            <div className="lg:hidden w-10" />
          </div>
        </div>
      </div>

      {/* MENÚ MÓVIL */}
      <div
        className={[
          "fixed inset-0 bg-white z-[60] lg:hidden transition-all duration-500",
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none",
        ].join(" ")}
      >
        <div className="flex items-center justify-end px-4 py-3">
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-400 p-2"
            aria-label="Cerrar menú"
            type="button"
          >
            <X size={34} />
          </button>
        </div>

        <div className="flex flex-col items-center justify-center text-center px-6 pb-10">
          <div className="mb-10">
            <Image
              src="/img/logo.webp"
              alt="Money House"
              width={220}
              height={80}
              priority
              className="object-contain"
            />
          </div>

          <div className="flex flex-col items-center gap-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-[#1a3fba] font-[900] text-[22px] tracking-tight relative group whitespace-nowrap"
                >
                  {link.name}
                  <span
                    className={[
                      "absolute -bottom-2 left-1/2 -translate-x-1/2 h-1 bg-[#FFB81C] transition-all duration-300",
                      isActive
                        ? "w-10 opacity-100"
                        : "w-0 opacity-0 group-hover:w-10 group-hover:opacity-100",
                    ].join(" ")}
                  />
                </Link>
              );
            })}
          </div>

          <div className="mt-10 flex flex-col items-center gap-4">
            <Link
              href="/user/login"
              onClick={() => setIsOpen(false)}
              className="w-[240px] inline-flex items-center justify-center rounded-xl bg-[#FFB81C] px-4 py-2.5 text-[18px] font-[900] tracking-tight text-[#1a3fba] shadow-md whitespace-nowrap"
            >
              INICIAR SESIÓN
            </Link>

            <Link
              href="/user/register"
              onClick={() => setIsOpen(false)}
              className="w-[240px] inline-flex items-center justify-center rounded-xl bg-[#FFB81C] px-4 py-2.5 text-[18px] font-[900] tracking-tight text-[#1a3fba] shadow-md whitespace-nowrap"
            >
              CREAR CUENTA
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}