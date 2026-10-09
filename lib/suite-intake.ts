import { createHmac, randomUUID } from 'node:crypto';

// Forwards each lead to the Conecta CRM: POST {SUITE_URL}/crm/intake/forms/kadmoon. The JSON
// body is signed with HMAC-SHA256 over `${x-timestamp}.${body}` using the site secret (generated
// on the CRM server with `site-secret --site kadmoon`), and every retry reuses the same
// Idempotency-Key so the CRM never duplicates the lead. Without SUITE_URL or
// SUITE_INTAKE_SECRET nothing is sent. Contract: docs/integracao-sites.md in the CRM repository.

const SITE = 'kadmoon';
const ATTEMPTS = 3;
const TIMEOUT_MS = 8_000;

type UtmKey = 'source' | 'medium' | 'campaign' | 'term' | 'content';
const UTM_KEYS: UtmKey[] = ['source', 'medium', 'campaign', 'term', 'content'];

/** CRM intake body, already within the contract limits. */
export interface SuiteLead {
  name: string;
  email: string | null;
  company: string | null;
  message: string | null;
  offer: string | null;
  page_url: string | null;
  locale: 'en-US';
  utm: Partial<Record<UtmKey, string>> | null;
  extra: Record<string, unknown>;
}

/** What /api/contact accepts from the contact form. */
export interface ContactLead {
  name: string;
  email: string;
  company: string;
  size?: string;
  need?: string;
  message: string;
}

function cut(value: string | null | undefined, max: number): string | null {
  const v = value?.trim();
  return v ? v.slice(0, max) : null;
}

function utmFrom(pageUrl: string | null): SuiteLead['utm'] {
  if (!pageUrl) return null;
  try {
    const params = new URL(pageUrl).searchParams;
    const utm: Partial<Record<UtmKey, string>> = {};
    for (const key of UTM_KEYS) {
      const value = cut(params.get(`utm_${key}`), 200);
      if (value) utm[key] = value;
    }
    return Object.keys(utm).length > 0 ? utm : null;
  } catch {
    return null;
  }
}

/** The contact form lead in the CRM intake format. */
export function toSuiteLead(data: ContactLead, pageUrl: string | null): SuiteLead {
  const page = cut(pageUrl, 2000);
  return {
    name: cut(data.name, 200) ?? data.name,
    email: cut(data.email, 254),
    company: cut(data.company, 200),
    message: cut(data.message, 5000),
    // "What you need" is the offer, except the catch-all "Other".
    offer: data.need === 'Other' ? null : cut(data.need, 120),
    page_url: page,
    locale: 'en-US',
    utm: utmFrom(page),
    extra: {
      ...(data.size ? { size: data.size } : {}),
      ...(data.need ? { need: data.need } : {}),
    },
  };
}

export type SuiteResult = { status: number; result: string | null } | null;

/**
 * Sends the lead to the CRM: up to 3 attempts on network errors, 429 or 5xx. Returns the CRM
 * response status (null when not configured or unreachable) and never throws.
 */
export async function sendToSuite(lead: SuiteLead): Promise<SuiteResult> {
  const base = process.env.SUITE_URL?.trim().replace(/\/+$/, '');
  const secret = process.env.SUITE_INTAKE_SECRET?.trim();
  if (!base || !secret) return null;
  const body = JSON.stringify(lead);
  const key = randomUUID();
  for (let attempt = 1; attempt <= ATTEMPTS; attempt++) {
    const timestamp = Math.floor(Date.now() / 1000).toString();
    const signature = createHmac('sha256', secret).update(`${timestamp}.${body}`).digest('hex');
    try {
      const res = await fetch(`${base}/crm/intake/forms/${SITE}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-timestamp': timestamp,
          'x-signature': signature,
          'Idempotency-Key': key,
        },
        body,
        cache: 'no-store',
        signal: AbortSignal.timeout(TIMEOUT_MS),
      });
      const data = (await res.json().catch(() => null)) as {
        result?: string;
        detail?: string;
      } | null;
      if (res.ok) return { status: res.status, result: data?.result ?? null };
      if (res.status !== 429 && res.status < 500) {
        // 401, 404, 413 and 422: wrong secret or contract; retrying will not help.
        console.error(`[contact] CRM rejected the lead (${res.status}): ${data?.detail ?? ''}`);
        return { status: res.status, result: null };
      }
    } catch {
      // Network error or timeout: try again.
    }
    if (attempt < ATTEMPTS) await new Promise((r) => setTimeout(r, attempt * 1000));
  }
  console.error(`[contact] CRM unreachable: lead not sent after ${ATTEMPTS} attempts`);
  return null;
}
