import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";

type Role = "USER" | "ADMIN";

function requireAdmin(req: Request) {
  return req.headers.get("x-user-role") === "ADMIN";
}

export async function GET(req: Request) {
  try {
    if (!requireAdmin(req)) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }

    const url = new URL(req.url);
    const roleParam = url.searchParams.get("role") as Role | null;

    const where =
      roleParam === "ADMIN" || roleParam === "USER" ? { role: roleParam } : {};

    const users = await prisma.user.findMany({
      where,
      orderBy: { createdAt: "desc" },
      select: { id: true, name: true, email: true, role: true, createdAt: true },
    });

    return NextResponse.json({ users }, { status: 200 });
  } catch (e) {
    console.error("Error listando usuarios:", e);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    if (!requireAdmin(req)) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }

    const body = await req.json();
    const name = String(body?.name || "").trim();
    const email = String(body?.email || "").trim().toLowerCase();
    const role = body?.role as Role;
    const password = String(body?.password || "");

    if (!name || !email || !password) {
      return NextResponse.json({ error: "Faltan campos" }, { status: 400 });
    }

    if (password.length < 6) {
      return NextResponse.json(
        { error: "Contraseña muy corta (mínimo 6)" },
        { status: 400 }
      );
    }

    if (role !== "USER" && role !== "ADMIN") {
      return NextResponse.json({ error: "Rol inválido" }, { status: 400 });
    }

    const exists = await prisma.user.findUnique({ where: { email } });
    if (exists) {
      return NextResponse.json({ error: "El correo ya existe" }, { status: 409 });
    }

    const hashed = await bcrypt.hash(password, 10);

    const created = await prisma.user.create({
      data: { name, email, role, password: hashed },
      select: { id: true, name: true, email: true, role: true, createdAt: true },
    });

    return NextResponse.json({ user: created }, { status: 201 });
  } catch (e: any) {
    if (e?.code === "P2002") {
      return NextResponse.json({ error: "El correo ya existe" }, { status: 409 });
    }
    console.error("Error creando usuario:", e);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}