// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseUpdateMany extends APIResource {
  static override readonly _key: readonly ['mongoDB', 'updateMany'] = Object.freeze([
    'mongoDB',
    'updateMany',
  ] as const);

  updateMany(collection: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/mongodb/${collection}/updateMany`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
export class UpdateMany extends BaseUpdateMany {}
