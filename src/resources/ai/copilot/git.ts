// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Git extends APIResource {
  retrieve(sessionID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/ai/copilot/git/files/${sessionID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  branch(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/ai/copilot/git/branch', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  clone(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/ai/copilot/git/clone', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  commit(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/ai/copilot/git/commit', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  init(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/ai/copilot/git/init', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  pull(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/ai/copilot/git/pull', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  push(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/ai/copilot/git/push', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  write(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/ai/copilot/git/write', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
