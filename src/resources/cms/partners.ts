// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class BasePartners extends APIResource {
  static override readonly _key: readonly ['cms', 'partners'] = Object.freeze(['cms', 'partners'] as const);

  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/cms/partners', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
export class Partners extends BasePartners {}
