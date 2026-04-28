// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseCheck extends APIResource {
  static override readonly _key: readonly ['entitlements', 'org', 'check'] = Object.freeze([
    'entitlements',
    'org',
    'check',
  ] as const);

  check(orgID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/entitlements/org/${orgID}/check`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
export class Check extends BaseCheck {}
