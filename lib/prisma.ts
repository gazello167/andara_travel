import { PrismaClient } from "@prisma/client";

// Hindari bikin banyak koneksi Prisma saat hot-reload di dev mode
const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
