// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class BaseMaintenance extends APIResource {
  static override readonly _key: readonly ['maintenance'] = Object.freeze(['maintenance'] as const);

  /**
   * Get active and upcoming maintenance windows
   */
  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/maintenance', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
export class Maintenance extends BaseMaintenance {}
