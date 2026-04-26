// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Infrastructure extends APIResource {
  listSizes(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/infrastructure/sizes', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  pollStatus(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/infrastructure/poll-status', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
