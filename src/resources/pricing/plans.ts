// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BasePlans extends APIResource {
  static override readonly _key: readonly ['pricing', 'plans'] = Object.freeze(['pricing', 'plans'] as const);

  retrieve(plan: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/pricing/plans/${plan}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/pricing/plans', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
export class Plans extends BasePlans {}
