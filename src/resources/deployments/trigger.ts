// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class BaseTrigger extends APIResource {
  static override readonly _key: readonly ['deployments', 'trigger'] = Object.freeze(['deployments', 'trigger'] as const)

  create(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/deployments/trigger', { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}
export class Trigger extends BaseTrigger {

}
