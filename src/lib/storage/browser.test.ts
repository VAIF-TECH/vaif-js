// @vitest-environment happy-dom
import { describe, it, expect, vi } from 'vitest';
import { uploadFromInput, createDropZone } from './browser';

// happy-dom provides these at runtime; declare locally to avoid pulling
// the full DOM lib into the project tsconfig.
declare const document: any;
declare const Event: any;
declare const File: any;

describe('uploadFromInput', () => {
  it('uploads each file in input.files on change', () => {
    const input = document.createElement('input');
    input.type = 'file';
    const uploadSpy = vi.fn().mockResolvedValue({ path: 'a.jpg' });
    const fakeClient = { baseUrl: 'http://x', apiKey: 'k' } as any;

    const handles = uploadFromInput(input, fakeClient, {
      bucket: 'avatars',
      pathPrefix: (f: File) => f.name,
      _uploadFn: uploadSpy,
    } as any);
    expect(handles).toEqual([]); // before any change event

    const file = new File(['data'], 'avatar.jpg', { type: 'image/jpeg' });
    Object.defineProperty(input, 'files', { value: [file], configurable: true });
    input.dispatchEvent(new Event('change'));

    expect(uploadSpy).toHaveBeenCalledWith(
      fakeClient,
      expect.objectContaining({ bucket: 'avatars', path: 'avatar.jpg', file }),
    );
  });

  it('uses pathPrefix string when provided', () => {
    const input = document.createElement('input');
    const uploadSpy = vi.fn().mockResolvedValue({ path: 'x' });
    uploadFromInput(input, {} as any, {
      bucket: 'b',
      pathPrefix: 'users/me/',
      _uploadFn: uploadSpy,
    } as any);

    const file = new File(['x'], 'pic.png', { type: 'image/png' });
    Object.defineProperty(input, 'files', { value: [file], configurable: true });
    input.dispatchEvent(new Event('change'));

    expect(uploadSpy).toHaveBeenCalledWith(
      expect.anything(),
      expect.objectContaining({ path: 'users/me/pic.png' }),
    );
  });

  it('handles multiple files in one change event', () => {
    const input = document.createElement('input');
    const uploadSpy = vi.fn().mockResolvedValue({});
    uploadFromInput(input, {} as any, { bucket: 'b', _uploadFn: uploadSpy } as any);

    const f1 = new File(['1'], 'a.txt', { type: 'text/plain' });
    const f2 = new File(['2'], 'b.txt', { type: 'text/plain' });
    Object.defineProperty(input, 'files', { value: [f1, f2], configurable: true });
    input.dispatchEvent(new Event('change'));

    expect(uploadSpy).toHaveBeenCalledTimes(2);
  });

  it('passes file.type as contentType when not overridden', () => {
    const input = document.createElement('input');
    const uploadSpy = vi.fn();
    uploadFromInput(input, {} as any, { bucket: 'b', _uploadFn: uploadSpy } as any);
    const f = new File(['x'], 'a.jpg', { type: 'image/jpeg' });
    Object.defineProperty(input, 'files', { value: [f], configurable: true });
    input.dispatchEvent(new Event('change'));
    expect(uploadSpy).toHaveBeenCalledWith(
      expect.anything(),
      expect.objectContaining({ contentType: 'image/jpeg' }),
    );
  });
});

describe('createDropZone', () => {
  it('uploads dropped files', () => {
    const div = document.createElement('div');
    const uploadSpy = vi.fn().mockResolvedValue({});
    createDropZone(div, {} as any, { bucket: 'inbox', _uploadFn: uploadSpy } as any);

    const file = new File(['data'], 'doc.pdf', { type: 'application/pdf' });
    const event = new Event('drop') as any;
    event.dataTransfer = { files: [file] };
    event.preventDefault = vi.fn();
    div.dispatchEvent(event);

    expect(uploadSpy).toHaveBeenCalled();
    expect(event.preventDefault).toHaveBeenCalled();
  });

  it('respects accept filter (image/*) — rejects pdf', () => {
    const div = document.createElement('div');
    const uploadSpy = vi.fn();
    createDropZone(div, {} as any, {
      bucket: 'b',
      accept: ['image/*'],
      _uploadFn: uploadSpy,
    } as any);

    const pdf = new File(['x'], 'doc.pdf', { type: 'application/pdf' });
    const event = new Event('drop') as any;
    event.dataTransfer = { files: [pdf] };
    event.preventDefault = vi.fn();
    div.dispatchEvent(event);

    expect(uploadSpy).not.toHaveBeenCalled();
  });

  it('respects accept filter (image/*) — accepts png', () => {
    const div = document.createElement('div');
    const uploadSpy = vi.fn().mockResolvedValue({});
    createDropZone(div, {} as any, {
      bucket: 'b',
      accept: ['image/*'],
      _uploadFn: uploadSpy,
    } as any);

    const png = new File(['x'], 'a.png', { type: 'image/png' });
    const event = new Event('drop') as any;
    event.dataTransfer = { files: [png] };
    event.preventDefault = vi.fn();
    div.dispatchEvent(event);

    expect(uploadSpy).toHaveBeenCalledOnce();
  });

  it('accept filter supports file extensions (.pdf)', () => {
    const div = document.createElement('div');
    const uploadSpy = vi.fn().mockResolvedValue({});
    createDropZone(div, {} as any, { bucket: 'b', accept: ['.pdf'], _uploadFn: uploadSpy } as any);

    const pdf = new File(['x'], 'report.pdf', { type: 'application/pdf' });
    const event = new Event('drop') as any;
    event.dataTransfer = { files: [pdf] };
    event.preventDefault = vi.fn();
    div.dispatchEvent(event);

    expect(uploadSpy).toHaveBeenCalledOnce();
  });

  it('fires onDragEnter / onDragLeave callbacks', () => {
    const div = document.createElement('div');
    const onDragEnter = vi.fn();
    const onDragLeave = vi.fn();
    createDropZone(div, {} as any, {
      bucket: 'b',
      onDragEnter,
      onDragLeave,
      _uploadFn: vi.fn(),
    } as any);

    const enter = new Event('dragenter') as any;
    enter.preventDefault = vi.fn();
    div.dispatchEvent(enter);

    const leave = new Event('dragleave') as any;
    leave.preventDefault = vi.fn();
    div.dispatchEvent(leave);

    expect(onDragEnter).toHaveBeenCalledOnce();
    expect(onDragLeave).toHaveBeenCalledOnce();
  });

  it('cleanup function removes the listeners', () => {
    const div = document.createElement('div');
    const uploadSpy = vi.fn();
    const cleanup = createDropZone(div, {} as any, { bucket: 'b', _uploadFn: uploadSpy } as any);

    cleanup();

    const file = new File(['x'], 'a.txt', { type: 'text/plain' });
    const event = new Event('drop') as any;
    event.dataTransfer = { files: [file] };
    event.preventDefault = vi.fn();
    div.dispatchEvent(event);

    expect(uploadSpy).not.toHaveBeenCalled();
  });

  it('onUpload fires once per uploaded file', () => {
    const div = document.createElement('div');
    const onUpload = vi.fn();
    const uploadSpy = vi.fn().mockResolvedValue({});
    createDropZone(div, {} as any, { bucket: 'b', onUpload, _uploadFn: uploadSpy } as any);

    const f1 = new File(['x'], 'a.txt', { type: 'text/plain' });
    const f2 = new File(['x'], 'b.txt', { type: 'text/plain' });
    const event = new Event('drop') as any;
    event.dataTransfer = { files: [f1, f2] };
    event.preventDefault = vi.fn();
    div.dispatchEvent(event);

    expect(onUpload).toHaveBeenCalledTimes(2);
  });
});
