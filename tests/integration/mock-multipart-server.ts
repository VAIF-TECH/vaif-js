/**
 * Scriptable multipart-upload mock server for integration tests.
 *
 * Mirrors the storage SDK's HTTP contract:
 *   - POST /storage/upload                     → one-shot upload (returns UploadResult)
 *   - POST /storage/multipart/create           → returns { uploadId, key }
 *   - POST /storage/multipart/:id/part-url     → returns { url, partNumber }
 *   - PUT  /storage/parts/:id/:partNumber      → uploads a single part body
 *   - POST /storage/multipart/:id/complete     → finalize, returns UploadResult
 *   - POST /storage/multipart/:id/abort        → abort
 *
 * Failure injection:
 *   - `failNthPartPut(n)`        → reject the Nth chunk PUT once with HTTP 500
 *   - `failPartUrlOnce()`        → reject the next part-url call with HTTP 500
 *   - `delayPartUrlMs(ms)`       → add latency to part-url responses
 *   - `corruptEtagOnce()`        → return a bogus etag for the next part
 *   - `setCompleteResult(r)`     → override the final UploadResult
 *
 * State (per uploadId):
 *   - parts: array of {partNumber, etag, size}
 *   - state: 'open' | 'completed' | 'aborted'
 *
 * Use:
 *   const m = await MockMultipartServer.start();
 *   const baseUrl = m.baseUrl;
 *   ... await m.stop();
 */
import http from 'http';
import express, { type Request, type Response } from 'express';

type PartRecord = { partNumber: number; etag: string; size: number };

type UploadState = {
  uploadId: string;
  bucket: string;
  path: string;
  contentType: string;
  parts: PartRecord[];
  state: 'open' | 'completed' | 'aborted';
};

export type FailureScript = {
  failNthPartPut?: number; // 1-indexed: which PUT to fail (across the run)
  failPartUrlOnce?: boolean;
  delayPartUrlMs?: number;
  corruptEtagOnce?: boolean;
  completeResult?: { path: string; size: number; etag: string; contentType: string };
};

export class MockMultipartServer {
  private app = express();
  private server!: http.Server;
  private uploads = new Map<string, UploadState>();
  private oneShotResults: Array<{ bucket: string; path: string; bytes: number }> = [];
  private partPutCount = 0;
  private partUrlFailedOnce = false;
  private etagCorruptedOnce = false;
  private script: FailureScript = {};

  readonly port: number;

  /** Whether the test should reject the upload at /storage/upload. */
  failOneShot = false;

  private constructor(server: http.Server, port: number) {
    this.server = server;
    this.port = port;
  }

  static async start(): Promise<MockMultipartServer> {
    const m = new MockMultipartServer(null as unknown as http.Server, 0);
    m.app.use(express.json({ type: 'application/json', limit: '50mb' }));
    // Raw body for PUT chunk uploads (binary content). Skip JSON.
    m.app.use(
      express.raw({
        type: (req) => {
          const t = (req.headers['content-type'] ?? '').toString();
          return !t.startsWith('application/json');
        },
        limit: '50mb',
      }),
    );
    m.routes();
    const server = http.createServer(m.app);
    await new Promise<void>((r) => server.listen(0, () => r()));
    const addr = server.address();
    const port = typeof addr === 'object' && addr ? addr.port : 0;
    (m as unknown as { server: http.Server; port: number }).server = server;
    (m as unknown as { server: http.Server; port: number }).port = port;
    return m;
  }

  get baseUrl(): string {
    return `http://localhost:${this.port}`;
  }

  /** Apply / replace the failure script for the next series of requests. */
  setScript(script: FailureScript): void {
    this.script = { ...script };
    this.partPutCount = 0;
    this.partUrlFailedOnce = false;
    this.etagCorruptedOnce = false;
  }

  reset(): void {
    this.uploads.clear();
    this.oneShotResults = [];
    this.partPutCount = 0;
    this.partUrlFailedOnce = false;
    this.etagCorruptedOnce = false;
    this.script = {};
    this.failOneShot = false;
  }

  /** Snapshot of all upload states (for assertions). */
  snapshot(): { uploads: UploadState[]; oneShots: Array<{ bucket: string; path: string; bytes: number }>; partPutCount: number } {
    return {
      uploads: Array.from(this.uploads.values()).map((u) => ({ ...u, parts: u.parts.map((p) => ({ ...p })) })),
      oneShots: this.oneShotResults.slice(),
      partPutCount: this.partPutCount,
    };
  }

  async stop(): Promise<void> {
    return new Promise<void>((r) => this.server.close(() => r()));
  }

  private routes(): void {
    // One-shot upload — body is raw bytes.
    this.app.post('/storage/upload', (req: Request, res: Response) => {
      if (this.failOneShot) {
        res.status(500).send('one-shot failed');
        return;
      }
      const bucket = String(req.headers['x-bucket'] ?? '');
      const path = String(req.headers['x-path'] ?? '');
      const body = req.body as Buffer | undefined;
      const bytes = Buffer.isBuffer(body) ? body.length : 0;
      this.oneShotResults.push({ bucket, path, bytes });
      const result = {
        path,
        size: bytes,
        etag: `oneshot-${Date.now()}`,
        contentType: String(req.headers['content-type'] ?? 'application/octet-stream'),
      };
      res.json(result);
    });

    // Create multipart upload.
    this.app.post('/storage/multipart/create', (req: Request, res: Response) => {
      const body = req.body as { bucket: string; path: string; contentType?: string };
      const uploadId = `up-${Math.random().toString(36).slice(2, 10)}`;
      const state: UploadState = {
        uploadId,
        bucket: body.bucket,
        path: body.path,
        contentType: body.contentType ?? 'application/octet-stream',
        parts: [],
        state: 'open',
      };
      this.uploads.set(uploadId, state);
      res.json({ uploadId, key: `${body.bucket}/${body.path}` });
    });

    // Issue a PUT URL for a part.
    this.app.post('/storage/multipart/:uploadId/part-url', (req: Request, res: Response) => {
      const uploadId = String((req.params as Record<string, string>).uploadId);
      const u = this.uploads.get(uploadId!);
      if (!u || u.state !== 'open') {
        res.status(404).send('unknown or closed uploadId');
        return;
      }
      if (this.script.failPartUrlOnce && !this.partUrlFailedOnce) {
        this.partUrlFailedOnce = true;
        res.status(500).send('part-url injected failure');
        return;
      }
      const partNumber = Number((req.body as { partNumber: number }).partNumber);
      const url = `${this.baseUrl}/storage/parts/${encodeURIComponent(uploadId!)}/${partNumber}`;
      const respond = (): void => {
        res.json({ url, partNumber });
      };
      if (this.script.delayPartUrlMs) {
        setTimeout(respond, this.script.delayPartUrlMs);
      } else {
        respond();
      }
    });

    // Receive a part PUT.
    this.app.put('/storage/parts/:uploadId/:partNumber', (req: Request, res: Response) => {
      this.partPutCount++;
      const uploadId = String((req.params as Record<string, string>).uploadId);
      const partNumber = String((req.params as Record<string, string>).partNumber);
      const u = this.uploads.get(uploadId!);
      if (!u || u.state !== 'open') {
        res.status(404).send('unknown or closed uploadId');
        return;
      }
      if (this.script.failNthPartPut && this.script.failNthPartPut === this.partPutCount) {
        // Inject a 500 once.
        res.status(500).send('part PUT injected failure');
        return;
      }
      const body = req.body as Buffer | undefined;
      const size = Buffer.isBuffer(body) ? body.length : 0;
      let etag = `etag-${uploadId}-${partNumber}-${size}`;
      if (this.script.corruptEtagOnce && !this.etagCorruptedOnce) {
        this.etagCorruptedOnce = true;
        etag = '!!corrupted!!';
      }
      const pn = Number(partNumber);
      const existing = u.parts.find((p) => p.partNumber === pn);
      if (existing) {
        existing.etag = etag;
        existing.size = size;
      } else {
        u.parts.push({ partNumber: pn, etag, size });
      }
      res.setHeader('etag', etag);
      res.status(200).send('');
    });

    // Complete multipart.
    this.app.post('/storage/multipart/:uploadId/complete', (req: Request, res: Response) => {
      const uploadId = String((req.params as Record<string, string>).uploadId);
      const u = this.uploads.get(uploadId!);
      if (!u) {
        res.status(404).send('unknown uploadId');
        return;
      }
      const body = req.body as {
        parts: Array<{ partNumber: number; etag: string; size: number }>;
      };
      // Basic validation: parts ordered & complete.
      const sorted = body.parts.slice().sort((a, b) => a.partNumber - b.partNumber);
      const totalSize = sorted.reduce((s, p) => s + p.size, 0);
      u.state = 'completed';
      const result = this.script.completeResult ?? {
        path: u.path,
        size: totalSize,
        etag: `final-${u.uploadId}`,
        contentType: u.contentType,
      };
      res.json(result);
    });

    // Abort multipart.
    this.app.post('/storage/multipart/:uploadId/abort', (req: Request, res: Response) => {
      const uploadId = String((req.params as Record<string, string>).uploadId);
      const u = this.uploads.get(uploadId!);
      if (u) {
        u.state = 'aborted';
      }
      res.status(204).send('');
    });
  }
}
