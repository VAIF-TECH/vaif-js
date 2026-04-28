// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class BaseEnableAll extends APIResource {
  static override readonly _key: readonly ['realtime', 'enableAll'] = Object.freeze([
    'realtime',
    'enableAll',
  ] as const);

  create(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/realtime/enable-all', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
export class EnableAll extends BaseEnableAll {}
