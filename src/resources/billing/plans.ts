// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class BasePlans extends APIResource {
  static override readonly _key: readonly ['billing', 'plans'] = Object.freeze(['billing', 'plans'] as const);

  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/billing/plans', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
export class Plans extends BasePlans {}
