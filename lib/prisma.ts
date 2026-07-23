import { PrismaClient } from '@prisma/client';

// Reuse a single client across hot reloads / the serverless runtime.
const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

export const prisma =
  globalForPrisma.prisma ??
  // No query/error logging in production: Prisma error output can include
  // query parameters (PII) and connection details. Errors are caught and
  // logged as a safe label at the call site instead.
  new PrismaClient({ log: process.env.NODE_ENV === 'development' ? ['warn', 'error'] : [] });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
