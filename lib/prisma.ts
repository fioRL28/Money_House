import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const globalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined;
  pool: Pool | undefined;
};

function getPool() {
  if (globalForPrisma.pool) return globalForPrisma.pool;

  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error("DATABASE_URL no está definido");
  }

  globalForPrisma.pool = new Pool({
    connectionString,
  });

  return globalForPrisma.pool;
}

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    adapter: new PrismaPg(getPool()),
    log: ["query"],
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}