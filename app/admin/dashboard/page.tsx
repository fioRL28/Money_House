"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import AdminDashboard from "@/components/dashboard/admin/AdminDashboard";

type Role = "USER" | "ADMIN";

type SessionUser = {
  email: string;
  name: string;
  role: Role;
};

export default function AdminDashboardPage() {
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

    if (role !== "ADMIN") {
      router.replace("/user/dashboard");
      return;
    }

    setUser({ email, name, role });
  }, [router]);

  if (!user) return null;

  return <AdminDashboard user={user} />;
}
