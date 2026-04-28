// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class BaseCategories extends APIResource {
  static override readonly _key: readonly ['docs', 'categories'] = Object.freeze([
    'docs',
    'categories',
  ] as const);

  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/docs/categories', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
export class Categories extends BaseCategories {}
