// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class BaseDownload extends APIResource {
  static override readonly _key: readonly ['storage', 'download'] = Object.freeze([
    'storage',
    'download',
  ] as const);

  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/storage/download', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
export class Download extends BaseDownload {}
