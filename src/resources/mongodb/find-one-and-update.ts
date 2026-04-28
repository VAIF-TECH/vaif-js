// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseFindOneAndUpdate extends APIResource {
  static override readonly _key: readonly ['mongoDB', 'findOneAndUpdate'] = Object.freeze([
    'mongoDB',
    'findOneAndUpdate',
  ] as const);

  findOneAndUpdate(collection: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/mongodb/${collection}/findOneAndUpdate`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
export class FindOneAndUpdate extends BaseFindOneAndUpdate {}
