// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseMembers extends APIResource {
  static override readonly _key: readonly ['orgs', 'members'] = Object.freeze(['orgs', 'members'] as const);

  getMembers(orgID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/orgs/${orgID}/members`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  invite(orgID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/orgs/${orgID}/members/invite`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
export class Members extends BaseMembers {}
