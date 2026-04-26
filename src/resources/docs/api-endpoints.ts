// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseAPIEndpoints extends APIResource {
  static override readonly _key: readonly ['docs', 'apiEndpoints'] = Object.freeze(['docs', 'apiEndpoints'] as const)

  retrieve(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/docs/api-endpoints/${id}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/docs/api-endpoints', { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}
export class APIEndpoints extends BaseAPIEndpoints {

}
