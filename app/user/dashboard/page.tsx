"use client";

import UserDashboard from "@/components/dashboard/user/UserDashboard";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


type Role = "USER" | "ADMIN";

type SessionUser = {
  email: string;
  name: string;
  role: Role;
};

export default function UserDashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<SessionUser | null>(null);

  useEffect(() => {
    const email = localStorage.getItem("user_email");
    const name = localStorage.getItem("user_name");
    const role = localStorage.getItem("user_role") as Role | null;

    if (!email || !name || !role) {
      router.replace("/user/login");
      return;
    }

    // Si alguien admin entra aquí, lo mandas al panel admin
    if (role === "ADMIN") {
      router.replace("/admin/dashboard");
      return;
    }

    setUser({ email, name, role });
  }, [router]);

  if (!user) return null;

  return <UserDashboard user={user} />;
}