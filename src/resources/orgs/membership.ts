// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseMembership extends APIResource {
  static override readonly _key: readonly ['orgs', 'membership'] = Object.freeze(['orgs', 'membership'] as const)

  getMembership(orgID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/orgs/${orgID}/membership`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}
export class Membership extends BaseMembership {

}
