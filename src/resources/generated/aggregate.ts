// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseAggregate extends APIResource {
  static override readonly _key: readonly ['generated', 'aggregate'] = Object.freeze([
    'generated',
    'aggregate',
  ] as const);

  getAggregate(table: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/generated/${table}/aggregate`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
export class Aggregate extends BaseAggregate {}
