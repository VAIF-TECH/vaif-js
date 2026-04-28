// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class BaseSizes extends APIResource {
  static override readonly _key: readonly ['infrastructure', 'sizes'] = Object.freeze([
    'infrastructure',
    'sizes',
  ] as const);

  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/infrastructure/sizes', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
export class Sizes extends BaseSizes {}
