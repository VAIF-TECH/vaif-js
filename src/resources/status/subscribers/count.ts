// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class BaseCount extends APIResource {
  static override readonly _key: readonly ['status', 'subscribers', 'count'] = Object.freeze([
    'status',
    'subscribers',
    'count',
  ] as const);

  /**
   * Get subscriber count
   */
  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/status/subscribers/count', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
export class Count extends BaseCount {}
