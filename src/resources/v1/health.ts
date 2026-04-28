// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class BaseHealth extends APIResource {
  static override readonly _key: readonly ['v1', 'health'] = Object.freeze(['v1', 'health'] as const);

  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/v1/health', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
export class Health extends BaseHealth {}
