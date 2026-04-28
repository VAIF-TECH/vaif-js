// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class BaseFull extends APIResource {
  static override readonly _key: readonly ['openAPI', 'full'] = Object.freeze(['openAPI', 'full'] as const);

  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/openapi/full', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
export class Full extends BaseFull {}
