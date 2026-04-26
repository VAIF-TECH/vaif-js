// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseContract extends APIResource {
  static override readonly _key: readonly ['enterprise', 'org', 'contract'] = Object.freeze(['enterprise', 'org', 'contract'] as const)

  getContract(orgID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/enterprise/org/${orgID}/contract`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}
export class Contract extends BaseContract {

}
