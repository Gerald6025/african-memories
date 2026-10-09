/** Match the browser-facing origin, including requests forwarded by a hosting proxy. */
export function isValidRequestOrigin(headers: Headers, internalOrigin: string): boolean {
  const site = headers.get('sec-fetch-site');
  if (site === 'cross-site') return false;
  const origin = headers.get('origin');
  if (!origin) return true;
  try {
    const parsed = new URL(origin);
    if (!['http:', 'https:'].includes(parsed.protocol) || parsed.origin !== origin) return false;
    const host = headers.get('x-forwarded-host')?.split(',')[0].trim() || headers.get('host');
    const protocol = headers.get('x-forwarded-proto')?.split(',')[0].trim() || new URL(internalOrigin).protocol.slice(0, -1);
    if (host) {
      if (!['http', 'https'].includes(protocol)) return false;
      return origin === new URL(protocol + '://' + host).origin;
    }
    return origin === new URL(internalOrigin).origin;
  } catch { return false; }
}
