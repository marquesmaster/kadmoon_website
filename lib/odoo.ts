// Minimal Odoo JSON-RPC client used to push website leads into Odoo CRM.
//
// It is intentionally dependency-free (uses fetch) and fully env-gated: if the
// Odoo variables are not set, isOdooConfigured() is false and callers skip it,
// so nothing breaks on hosts without an Odoo backend.
//
// Security: the API key is never logged. Errors are reduced to a short, safe
// label by the caller. Use an Odoo API key (Preferences > Account Security),
// never a real user password.

type OdooEnv = {
  url: string;
  db: string;
  login: string;
  apiKey: string;
};

export function odooEnv(): OdooEnv | null {
  const url = process.env.ODOO_URL?.trim();
  const db = process.env.ODOO_DB?.trim();
  const login = process.env.ODOO_LOGIN?.trim();
  const apiKey = process.env.ODOO_API_KEY?.trim();
  if (!url || !db || !login || !apiKey) return null;
  return { url: url.replace(/\/+$/, ''), db, login, apiKey };
}

export function isOdooConfigured(): boolean {
  return odooEnv() !== null;
}

async function jsonRpc(
  base: string,
  service: string,
  method: string,
  args: unknown[],
  timeoutMs = 8000,
): Promise<unknown> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(`${base}/jsonrpc`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        jsonrpc: '2.0',
        method: 'call',
        params: { service, method, args },
        id: Math.floor(Date.now() % 1e9),
      }),
      signal: controller.signal,
    });
    if (!res.ok) throw new Error(`odoo_http_${res.status}`);
    const payload = (await res.json()) as { result?: unknown; error?: { message?: string } };
    if (payload.error) {
      // Surface only the Odoo error name, never argument contents.
      throw new Error(`odoo_rpc_error`);
    }
    return payload.result;
  } finally {
    clearTimeout(timer);
  }
}

export type OdooLeadInput = {
  name: string;
  email: string;
  company: string;
  size?: string;
  need?: string;
  message: string;
};

/**
 * Create a crm.lead in Odoo. Returns the new lead id, or null if Odoo is not
 * configured. Throws on transport/auth errors so the caller can log a safe
 * label; the caller must treat this as best-effort (never fail the request on
 * it, since the lead is already stored and emailed).
 */
export async function createOdooLead(input: OdooLeadInput): Promise<number | null> {
  const env = odooEnv();
  if (!env) return null;

  const uid = await jsonRpc(env.url, 'common', 'authenticate', [
    env.db,
    env.login,
    env.apiKey,
    {},
  ]);
  if (typeof uid !== 'number' || uid <= 0) throw new Error('odoo_auth_failed');

  const descriptionLines = [
    input.message,
    '',
    input.size ? `Company size: ${input.size}` : null,
    input.need ? `Interest: ${input.need}` : null,
    'Source: kadmoon.com contact form',
  ].filter(Boolean);

  const values: Record<string, unknown> = {
    name: `Website lead — ${input.company}`,
    type: 'lead',
    contact_name: input.name,
    partner_name: input.company,
    email_from: input.email,
    description: descriptionLines.join('\n'),
  };

  const id = await jsonRpc(env.url, 'object', 'execute_kw', [
    env.db,
    uid,
    env.apiKey,
    'crm.lead',
    'create',
    [values],
  ]);

  return typeof id === 'number' ? id : null;
}
