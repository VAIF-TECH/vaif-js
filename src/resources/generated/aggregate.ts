// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Aggregate extends APIResource {
  getAggregate(table: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/generated/${table}/aggregate`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}
