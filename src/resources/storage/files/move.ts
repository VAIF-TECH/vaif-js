// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class BaseMove extends APIResource {
  static override readonly _key: readonly ['storage', 'files', 'move'] = Object.freeze(['storage', 'files', 'move'] as const)

  create(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/storage/files/move', { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}
export class Move extends BaseMove {

}
