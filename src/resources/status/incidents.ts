// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Incidents extends APIResource {
  /**
   * List recent public incidents
   */
  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/status/incidents', { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}
