// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class BaseAvailable extends APIResource {
  static override readonly _key: readonly ['database', 'extensions', 'available'] = Object.freeze([
    'database',
    'extensions',
    'available',
  ] as const);

  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/database/extensions/available', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
export class Available extends BaseAvailable {}
