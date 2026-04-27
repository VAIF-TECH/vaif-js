// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseVerify extends APIResource {
  static override readonly _key: readonly ['billing', 'checkout', 'verify'] = Object.freeze(['billing', 'checkout', 'verify'] as const)

  retrieve(sessionID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/billing/checkout/verify/${sessionID}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}
export class Verify extends BaseVerify {

}
