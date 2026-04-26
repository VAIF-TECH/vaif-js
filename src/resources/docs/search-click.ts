// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class BaseSearchClick extends APIResource {
  static override readonly _key: readonly ['docs', 'searchClick'] = Object.freeze(['docs', 'searchClick'] as const)

  create(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/docs/search-click', { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}
export class SearchClick extends BaseSearchClick {

}
