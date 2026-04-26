/**
 * Constructs realtime endpoint URLs from a base API URL plus an ephemeral
 * auth token. Pure logic; no I/O. Token is URL-encoded for safety.
 */
export class RealtimeUrlBuilder {
  private base: URL;

  constructor(baseUrl: string) {
    try {
      this.base = new URL(baseUrl);
    } catch (err) {
      throw new Error(`RealtimeUrlBuilder: invalid baseUrl "${baseUrl}": ${(err as Error).message}`);
    }
  }

  /** Returns ws:// or wss:// URL for the realtime WebSocket endpoint, with token in query. */
  ws(token: string): string {
    if (!token) throw new Error('token must be a non-empty string');
    const u = this.cloneBase();
    u.protocol = u.protocol === 'https:' ? 'wss:' : 'ws:';
    u.pathname = this.joinPath(u.pathname, 'realtime');
    u.searchParams.set('token', token);
    return u.toString();
  }

  /** Returns http:// or https:// URL for the SSE fallback endpoint. */
  sse(token: string): string {
    if (!token) throw new Error('token must be a non-empty string');
    const u = this.cloneBase();
    u.pathname = this.joinPath(u.pathname, 'realtime/sse');
    u.searchParams.set('token', token);
    return u.toString();
  }

  /** Returns the URL clients POST to for sending messages over SSE. Auth via Authorization header. */
  send(): string {
    const u = this.cloneBase();
    u.pathname = this.joinPath(u.pathname, 'realtime/send');
    return u.toString();
  }

  private cloneBase(): URL {
    return new URL(this.base.toString());
  }

  private joinPath(prefix: string, suffix: string): string {
    const p = prefix.endsWith('/') ? prefix.slice(0, -1) : prefix;
    return `${p}/${suffix}`;
  }
}
