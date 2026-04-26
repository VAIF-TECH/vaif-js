// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseProfile extends APIResource {
  static override readonly _key: readonly ['orgs', 'profile'] = Object.freeze(['orgs', 'profile'] as const)

  getProfile(orgID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/orgs/${orgID}/profile`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  profile(orgID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.patch(path`/orgs/${orgID}/profile`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}
export class Profile extends BaseProfile {

}
