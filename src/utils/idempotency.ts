const seen = new Map<string, { status: number; body: unknown; at: number }>();
const TTL_MS = 24 * 60 * 60 * 1000;

export function remember(key: string, status: number, body: unknown) {
  seen.set(key, { status, body, at: Date.now() });
}

export function recall(key: string) {
  const hit = seen.get(key);
  if (!hit || Date.now() - hit.at > TTL_MS) return undefined;
  return hit;
}
