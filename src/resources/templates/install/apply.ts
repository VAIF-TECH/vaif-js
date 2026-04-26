// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class BaseApply extends APIResource {
  static override readonly _key: readonly ['templates', 'install', 'apply'] = Object.freeze(['templates', 'install', 'apply'] as const)

  create(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/templates/install/apply', { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}
export class Apply extends BaseApply {

}
