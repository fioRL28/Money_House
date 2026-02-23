import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";

type Role = "USER" | "ADMIN";

function requireAuth(req: Request) {
  // MVP (igual que tu enfoque actual): confiar en headers
  const email = req.headers.get("x-user-email");
  const role = req.headers.get("x-user-role") as Role | null;
  if (!email || !role) return null;
  return { email, role };
}

// GET /api/user/profile  -> devuelve perfil del usuario logueado
export async function GET(req: Request) {
  try {
    const auth = requireAuth(req);
    if (!auth) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: { email: auth.email },
      select: { id: true, name: true, email: true, role: true, createdAt: true },
    });

    if (!user) return NextResponse.json({ error: "No existe" }, { status: 404 });

    return NextResponse.json({ user }, { status: 200 });
  } catch (e) {
    console.error("Error GET profile:", e);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}

// PATCH /api/user/profile -> actualiza name y/o password del usuario logueado
export async function PATCH(req: Request) {
  try {
    const auth = requireAuth(req);
    if (!auth) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }

    const body = await req.json();
    const data: any = {};

    if (body.name !== undefined) {
      const name = String(body.name).trim();
      if (!name) return NextResponse.json({ error: "Nombre inválido" }, { status: 400 });
      data.name = name;
    }

    if (body.password !== undefined) {
      const password = String(body.password);
      if (password.length < 6) {
        return NextResponse.json({ error: "Contraseña muy corta (mínimo 6)" }, { status: 400 });
      }
      data.password = await bcrypt.hash(password, 10);
    }

    if (Object.keys(data).length === 0) {
      return NextResponse.json({ error: "Nada para actualizar" }, { status: 400 });
    }

    const updated = await prisma.user.update({
      where: { email: auth.email },
      data,
      select: { id: true, name: true, email: true, role: true, createdAt: true },
    });

    return NextResponse.json({ user: updated }, { status: 200 });
  } catch (e) {
    console.error("Error PATCH profile:", e);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}