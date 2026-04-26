// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class OAuth extends APIResource {
  authorize(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/github/oauth/authorize', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  callback(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/github/oauth/callback', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
