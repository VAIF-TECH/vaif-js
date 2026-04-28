// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class BasePackages extends APIResource {
  static override readonly _key: readonly ['billing', 'credits', 'packages'] = Object.freeze([
    'billing',
    'credits',
    'packages',
  ] as const);

  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/billing/credits/packages', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
export class Packages extends BasePackages {}
