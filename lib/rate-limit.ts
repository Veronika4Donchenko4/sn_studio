/**
 * Minimal in-memory, per-key fixed-window rate limiter.
 *
 * Suitable for a single-instance deployment / basic abuse protection. For a
 * horizontally-scaled deployment, swap this for a shared store (e.g. Upstash
 * Redis); the call site only depends on the `rateLimit()` signature.
 */

type Bucket = { count: number; resetAt: number };

const buckets = new Map<string, Bucket>();

export type RateLimitResult = {
  ok: boolean;
  /** Seconds until the window resets (only meaningful when !ok). */
  retryAfter: number;
};

export function rateLimit(
  key: string,
  limit = 5,
  windowMs = 60_000,
): RateLimitResult {
  const now = Date.now();
  const existing = buckets.get(key);

  if (!existing || existing.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return { ok: true, retryAfter: 0 };
  }

  if (existing.count >= limit) {
    return {
      ok: false,
      retryAfter: Math.ceil((existing.resetAt - now) / 1000),
    };
  }

  existing.count += 1;
  return { ok: true, retryAfter: 0 };
}

// Opportunistic cleanup so the map can't grow unbounded over a long uptime.
export function pruneExpired(now = Date.now()): void {
  for (const [key, bucket] of buckets) {
    if (bucket.resetAt <= now) buckets.delete(key);
  }
}
