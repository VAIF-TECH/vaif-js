// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseBulkWrite extends APIResource {
  static override readonly _key: readonly ['mongoDB', 'bulkWrite'] = Object.freeze(['mongoDB', 'bulkWrite'] as const)

  bulkWrite(collection: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/mongodb/${collection}/bulkWrite`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}
export class BulkWrite extends BaseBulkWrite {

}
