// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class BaseCallback extends APIResource {
  static override readonly _key: readonly ['oauth', 'callback'] = Object.freeze(['oauth', 'callback'] as const)

  /**
   * Handle OAuth callback and exchange code for tokens
   */
  create(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/oauth/callback', { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}
export class Callback extends BaseCallback {

}
