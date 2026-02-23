import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";

type Role = "USER" | "ADMIN";

function requireAdmin(req: Request) {
  const role = req.headers.get("x-user-role");
  return role === "ADMIN";
}

// PATCH /api/admin/users/:id
export async function PATCH(
  req: Request,
  ctx: { params: Promise<{ id: string }> }
) {
  try {
    if (!requireAdmin(req)) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }

    const { id } = await ctx.params; // ✅ AQUÍ el cambio
    const body = await req.json();

    const data: any = {};
    

    if (body.name !== undefined) {
      const name = String(body.name).trim();
      if (!name) return NextResponse.json({ error: "Nombre inválido" }, { status: 400 });
      data.name = name;
    }

    if (body.email !== undefined) {
      const email = String(body.email).trim().toLowerCase();
      if (!email) return NextResponse.json({ error: "Email inválido" }, { status: 400 });
      data.email = email;
    }

    if (body.role !== undefined) {
      const role = body.role as Role;
      if (role !== "USER" && role !== "ADMIN") {
        return NextResponse.json({ error: "Rol inválido" }, { status: 400 });
      }

      // Si quieres bajar un ADMIN a USER, evita que sea el último ADMIN
      if (role === "USER") {
        const current = await prisma.user.findUnique({
          where: { id },
          select: { role: true },
        });

        if (!current) return NextResponse.json({ error: "No existe" }, { status: 404 });

        if (current.role === "ADMIN") {
          const adminCount = await prisma.user.count({ where: { role: "ADMIN" } });
          if (adminCount <= 1) {
            return NextResponse.json(
              { error: "No puedes dejar el sistema sin administradores" },
              { status: 409 }
            );
          }
        }
      }

      data.role = role;
    }

    if (body.password !== undefined) {
      const password = String(body.password);
      if (password.length < 6) {
        return NextResponse.json(
          { error: "Contraseña muy corta (mínimo 6)" },
          { status: 400 }
        );
      }
      data.password = await bcrypt.hash(password, 10);
    }

    if (Object.keys(data).length === 0) {
      return NextResponse.json({ error: "Nada para actualizar" }, { status: 400 });
    }

    const updated = await prisma.user.update({
      where: { id },
      data,
      select: { id: true, name: true, email: true, role: true, createdAt: true },
    });

    return NextResponse.json({ user: updated }, { status: 200 });
  } catch (e: any) {
    // Email duplicado, típico
    if (e?.code === "P2002") {
      return NextResponse.json({ error: "Email ya registrado" }, { status: 409 });
    }
    console.error("Error editando usuario:", e);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}

// DELETE /api/admin/users/:id
export async function DELETE(
  req: Request,
  ctx: { params: Promise<{ id: string }> }
) {
  try {
    if (!requireAdmin(req)) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }

    const { id } = await ctx.params; // ✅ AQUÍ el cambio

    const user = await prisma.user.findUnique({
      where: { id },
      select: { role: true },
    });

    if (!user) return NextResponse.json({ error: "No existe" }, { status: 404 });

    // No borrar el último admin
    if (user.role === "ADMIN") {
      const adminCount = await prisma.user.count({ where: { role: "ADMIN" } });
      if (adminCount <= 1) {
        return NextResponse.json(
          { error: "No puedes borrar el último administrador" },
          { status: 409 }
        );
      }
    }

    await prisma.user.delete({ where: { id } });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (e) {
    console.error("Error eliminando usuario:", e);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}