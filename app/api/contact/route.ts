import { NextResponse } from 'next/server';
import crypto from 'node:crypto';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';
import { rateLimit } from '@/lib/rate-limit';
import { sendLeadEmail } from '@/lib/mailer';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// Strict input contract. Anything outside this is rejected before it touches
// the database. Prisma parameterizes queries, so there is no SQL injection
// surface; these bounds mainly stop oversized/garbage payloads and abuse.
const schema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(200),
  company: z.string().trim().min(1).max(160),
  size: z.string().trim().max(60).optional().default(''),
  need: z.string().trim().max(60).optional().default(''),
  message: z.string().trim().min(1).max(5000),
  // Honeypot: accepted by the schema but checked below. If a bot fills it we
  // return a generic success and store nothing, so it learns nothing.
  company_website: z.string().max(200).optional(),
  // Timing trap: client stamps when the form became interactive.
  startedAt: z.number().optional(),
});

function clientIp(req: Request): string {
  const xff = req.headers.get('x-forwarded-for');
  if (xff) return xff.split(',')[0].trim();
  return req.headers.get('x-real-ip') || 'unknown';
}

function hashIp(ip: string): string {
  const salt = process.env.LEAD_IP_SALT || 'kadmoon-default-salt';
  return crypto.createHash('sha256').update(`${salt}:${ip}`).digest('hex').slice(0, 32);
}

// Generic success so probing tells an attacker nothing.
const ok = () => NextResponse.json({ ok: true });

export async function POST(req: Request) {
  // Only accept JSON.
  const ctype = req.headers.get('content-type') || '';
  if (!ctype.includes('application/json')) {
    return NextResponse.json({ ok: false }, { status: 415 });
  }

  const ip = clientIp(req);
  const key = hashIp(ip);

  // Rate limit: 5 submissions per 10 minutes per IP.
  const rl = rateLimit(`contact:${key}`, { limit: 5, windowMs: 10 * 60 * 1000 });
  if (!rl.ok) {
    return NextResponse.json(
      { ok: false, error: 'rate_limited' },
      { status: 429, headers: { 'Retry-After': String(rl.retryAfterSec) } },
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: 'invalid' }, { status: 400 });
  }
  const data = parsed.data;

  // Honeypot tripped: pretend success, store nothing.
  if (data.company_website) return ok();

  // Timing trap: a real person needs at least a couple seconds. If the stamp
  // is missing or the submission is implausibly fast, drop it silently.
  if (data.startedAt && Date.now() - data.startedAt < 2500) return ok();

  // Persisting the lead is best-effort. If the database is unavailable (for
  // example on a host without Postgres), we still send the email so the lead is
  // never lost. Log only a safe label, never the full error or any submitted data.
  let persisted = false;
  try {
    await prisma.lead.create({
      data: {
        name: data.name,
        email: data.email,
        company: data.company,
        size: data.size || null,
        need: data.need || null,
        message: data.message,
        ipHash: key,
        userAgent: (req.headers.get('user-agent') || '').slice(0, 300),
      },
    });
    persisted = true;
  } catch (err) {
    console.error('[contact] lead persist failed:', safeErr(err));
  }

  let emailed = false;
  try {
    emailed = await sendLeadEmail({
      name: data.name,
      email: data.email,
      company: data.company,
      size: data.size,
      need: data.need,
      message: data.message,
    });
  } catch (err) {
    console.error('[contact] lead email failed:', safeErr(err));
  }

  // Only fail the request if neither channel captured the lead.
  if (!persisted && !emailed) {
    return NextResponse.json({ ok: false, error: 'server' }, { status: 500 });
  }

  return ok();
}

// A short, safe error label (name + optional code). Never the message/data.
function safeErr(err: unknown): string {
  if (err instanceof Error) {
    const code = (err as { code?: string }).code;
    return code ? `${err.name}:${code}` : err.name;
  }
  return 'unknown';
}

// Any other method: not allowed.
export function GET() {
  return NextResponse.json({ ok: false }, { status: 405 });
}
