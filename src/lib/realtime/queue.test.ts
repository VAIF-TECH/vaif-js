import { describe, it, expect, vi } from 'vitest';
import { OutgoingQueue, BackpressureError } from './queue';

describe('OutgoingQueue', () => {
  it('enqueues messages until maxSize', () => {
    const q = new OutgoingQueue<string>({ maxSize: 3, dropPolicy: 'oldest' });
    expect(q.enqueue('a')).toBe(true);
    expect(q.enqueue('b')).toBe(true);
    expect(q.enqueue('c')).toBe(true);
    expect(q.size).toBe(3);
  });

  it('drops oldest when full (default policy)', () => {
    const onDrop = vi.fn();
    const q = new OutgoingQueue<string>({ maxSize: 2, dropPolicy: 'oldest', onDrop });
    q.enqueue('a');
    q.enqueue('b');
    expect(q.enqueue('c')).toBe(true);
    expect(q.size).toBe(2);
    expect(onDrop).toHaveBeenCalledWith('a', 'queue_full');
  });

  it('refuses new when newest policy and full', () => {
    const onDrop = vi.fn();
    const q = new OutgoingQueue<string>({ maxSize: 2, dropPolicy: 'newest', onDrop });
    q.enqueue('a');
    q.enqueue('b');
    expect(q.enqueue('c')).toBe(false);
    expect(q.size).toBe(2);
    expect(onDrop).toHaveBeenCalledWith('c', 'queue_full');
  });

  it('throws BackpressureError when reject policy and full', () => {
    const q = new OutgoingQueue<string>({ maxSize: 1, dropPolicy: 'reject' });
    q.enqueue('a');
    expect(() => q.enqueue('b')).toThrow(BackpressureError);
  });

  it('drains FIFO order, awaiting each send', async () => {
    const q = new OutgoingQueue<string>({ maxSize: 10, dropPolicy: 'oldest' });
    q.enqueue('a');
    q.enqueue('b');
    q.enqueue('c');
    const sent: string[] = [];
    await q.drain(async (msg) => {
      await new Promise((r) => setTimeout(r, 1));
      sent.push(msg);
    });
    expect(sent).toEqual(['a', 'b', 'c']);
    expect(q.size).toBe(0);
  });

  it('drain stops on send error and leaves unsent at front', async () => {
    const q = new OutgoingQueue<string>({ maxSize: 10, dropPolicy: 'oldest' });
    q.enqueue('a');
    q.enqueue('b');
    q.enqueue('c');
    let count = 0;
    await expect(
      q.drain(async (msg) => {
        if (msg === 'b') throw new Error('send failed');
        count++;
      }),
    ).rejects.toThrow('send failed');
    expect(count).toBe(1);
    expect(q.size).toBe(2);
  });

  it('clear empties the queue', () => {
    const q = new OutgoingQueue<string>({ maxSize: 10, dropPolicy: 'oldest' });
    q.enqueue('a');
    q.enqueue('b');
    q.clear();
    expect(q.size).toBe(0);
  });

  it('throws on maxSize < 1 in constructor', () => {
    expect(() => new OutgoingQueue<string>({ maxSize: 0, dropPolicy: 'oldest' })).toThrow();
    expect(() => new OutgoingQueue<string>({ maxSize: -1, dropPolicy: 'oldest' })).toThrow();
  });

  it('throws on re-entrant drain()', async () => {
    const q = new OutgoingQueue<string>({ maxSize: 10, dropPolicy: 'oldest' });
    q.enqueue('a');
    q.enqueue('b');

    let inFlight: Promise<void> | null = null;
    const send = async (msg: string) => {
      if (msg === 'a' && !inFlight) {
        inFlight = q.drain(async () => {}); // re-entrant
        inFlight.catch(() => {}); // attach handler so rejection isn't "unhandled"
      }
      await new Promise((r) => setTimeout(r, 1));
    };

    await q.drain(send);
    await expect(inFlight).rejects.toThrow(/already in progress/);
  });

  it('throws on clear() during drain()', async () => {
    const q = new OutgoingQueue<string>({ maxSize: 10, dropPolicy: 'oldest' });
    q.enqueue('a');
    q.enqueue('b');

    let clearError: unknown = null;
    await q.drain(async (msg) => {
      if (msg === 'a') {
        try { q.clear(); } catch (e) { clearError = e; }
      }
      await new Promise((r) => setTimeout(r, 1));
    });

    expect(clearError).toBeInstanceOf(Error);
    expect((clearError as Error).message).toMatch(/cannot clear/);
  });

  it('clear() works fine between drains', async () => {
    const q = new OutgoingQueue<string>({ maxSize: 10, dropPolicy: 'oldest' });
    q.enqueue('a');
    await q.drain(async () => {});
    q.clear(); // should not throw
    q.enqueue('b');
    expect(q.size).toBe(1);
  });
});
