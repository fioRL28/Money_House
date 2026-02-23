"use client";

import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  function handleLogout() {
    localStorage.removeItem("user_email");
    localStorage.removeItem("user_name");
    localStorage.removeItem("user_role");

    router.replace("/user/login");
  }

  return (
    <button
      onClick={handleLogout}
      className="rounded-xl border-2 border-[#1540b7] px-4 py-2 font-semibold text-[#1540b7] hover:bg-[#1540b7] hover:text-white transition text-[10px] sm:text-[15px]"
    >
      Cerrar sesión
    </button>
  );
}