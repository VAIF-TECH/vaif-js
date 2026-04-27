// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class BaseCopy extends APIResource {
  static override readonly _key: readonly ['storage', 'files', 'copy'] = Object.freeze(['storage', 'files', 'copy'] as const)

  create(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/storage/files/copy', { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}
export class Copy extends BaseCopy {

}
