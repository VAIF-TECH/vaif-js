// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class BasePromote extends APIResource {
  static override readonly _key: readonly ['deployments', 'promote'] = Object.freeze(['deployments', 'promote'] as const)

  create(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/deployments/promote', { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}
export class Promote extends BasePromote {

}
