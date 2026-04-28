// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class BaseCatalog extends APIResource {
  static override readonly _key: readonly ['billing', 'addons', 'catalog'] = Object.freeze([
    'billing',
    'addons',
    'catalog',
  ] as const);

  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/billing/addons/catalog', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
export class Catalog extends BaseCatalog {}
