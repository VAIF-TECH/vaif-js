// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class BaseSearch extends APIResource {
  static override readonly _key: readonly ['docs', 'search'] = Object.freeze(['docs', 'search'] as const)

  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/docs/search', { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}
export class Search extends BaseSearch {

}
