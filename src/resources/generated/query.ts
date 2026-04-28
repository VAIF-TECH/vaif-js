// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseQuery extends APIResource {
  static override readonly _key: readonly ['generated', 'query'] = Object.freeze([
    'generated',
    'query',
  ] as const);

  query(table: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/generated/${table}/query`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
export class Query extends BaseQuery {}
