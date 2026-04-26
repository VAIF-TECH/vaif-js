// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class BaseAnnouncements extends APIResource {
  static override readonly _key: readonly ['announcements'] = Object.freeze(['announcements'] as const)

  /**
   * Get active platform announcements
   */
  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/announcements', { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}
export class Announcements extends BaseAnnouncements {

}
