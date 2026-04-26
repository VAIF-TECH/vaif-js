// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseOrg extends APIResource {
  static override readonly _key: readonly ['activation', 'org'] = Object.freeze(['activation', 'org'] as const)

  retrieve(orgID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/activation/org/${orgID}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}
export class Org extends BaseOrg {

}
