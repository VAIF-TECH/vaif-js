// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseEstimatedCount extends APIResource {
  static override readonly _key: readonly ['mongoDB', 'estimatedCount'] = Object.freeze(['mongoDB', 'estimatedCount'] as const)

  getEstimatedCount(collection: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/mongodb/${collection}/estimatedCount`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}
export class EstimatedCount extends BaseEstimatedCount {

}
