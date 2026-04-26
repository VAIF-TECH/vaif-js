// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseMetrics extends APIResource {
  static override readonly _key: readonly ['regions', 'metrics'] = Object.freeze(['regions', 'metrics'] as const)

  getMetrics(key: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/regions/${key}/metrics`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}
export class Metrics extends BaseMetrics {

}
