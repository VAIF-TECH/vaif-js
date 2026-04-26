// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class BaseAll extends APIResource {
  static override readonly _key: readonly ['regions', 'all'] = Object.freeze(['regions', 'all'] as const)

  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/regions/all', { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}
export class All extends BaseAll {

}
