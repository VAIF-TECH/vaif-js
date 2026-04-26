// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseFindOneAndReplace extends APIResource {
  static override readonly _key: readonly ['mongoDB', 'findOneAndReplace'] = Object.freeze(['mongoDB', 'findOneAndReplace'] as const)

  findOneAndReplace(collection: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/mongodb/${collection}/findOneAndReplace`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}
export class FindOneAndReplace extends BaseFindOneAndReplace {

}
