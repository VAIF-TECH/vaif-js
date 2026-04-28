// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class BaseGenerate extends APIResource {
  static override readonly _key: readonly ['sdk', 'generate'] = Object.freeze(['sdk', 'generate'] as const);

  create(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/sdk/generate', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
export class Generate extends BaseGenerate {}
