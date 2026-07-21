/**
 * Tiny in-memory sliding-window rate limiter. Good enough for a single-container
 * marketing site. Keyed by a caller identifier (hashed IP). Not shared across
 * replicas; if the site is ever scaled horizontally, move this to Redis.
 */

type Bucket = { count: number; resetAt: number };

const buckets = new Map<string, Bucket>();

// Periodically drop expired buckets so the map does not grow without bound.
let lastSweep = 0;
function sweep(now: number) {
  if (now - lastSweep < 60_000) return;
  lastSweep = now;
  for (const [key, b] of buckets) {
    if (b.resetAt <= now) buckets.delete(key);
  }
}

export function rateLimit(
  key: string,
  { limit = 5, windowMs = 10 * 60 * 1000 }: { limit?: number; windowMs?: number } = {},
): { ok: boolean; remaining: number; retryAfterSec: number } {
  const now = Date.now();
  sweep(now);
  const existing = buckets.get(key);

  if (!existing || existing.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return { ok: true, remaining: limit - 1, retryAfterSec: 0 };
  }

  if (existing.count >= limit) {
    return { ok: false, remaining: 0, retryAfterSec: Math.ceil((existing.resetAt - now) / 1000) };
  }

  existing.count += 1;
  return { ok: true, remaining: limit - existing.count, retryAfterSec: 0 };
}
