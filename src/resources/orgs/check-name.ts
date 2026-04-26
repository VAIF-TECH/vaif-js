// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class BaseCheckName extends APIResource {
  static override readonly _key: readonly ['orgs', 'checkName'] = Object.freeze(['orgs', 'checkName'] as const)

  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/orgs/check-name', { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}
export class CheckName extends BaseCheckName {

}
