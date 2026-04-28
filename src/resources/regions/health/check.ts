// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class BaseCheck extends APIResource {
  static override readonly _key: readonly ['regions', 'health', 'check'] = Object.freeze([
    'regions',
    'health',
    'check',
  ] as const);

  create(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/regions/health/check', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
export class Check extends BaseCheck {}
