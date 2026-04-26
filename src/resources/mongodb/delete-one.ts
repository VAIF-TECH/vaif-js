// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseDeleteOne extends APIResource {
  static override readonly _key: readonly ['mongoDB', 'deleteOne'] = Object.freeze(['mongoDB', 'deleteOne'] as const)

  deleteOne(collection: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/mongodb/${collection}/deleteOne`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}
export class DeleteOne extends BaseDeleteOne {

}
