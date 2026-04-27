// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseConfigure extends APIResource {
  static override readonly _key: readonly ['sso', 'org', 'configure'] = Object.freeze(['sso', 'org', 'configure'] as const)

  configure(orgID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/sso/org/${orgID}/configure`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}
export class Configure extends BaseConfigure {

}
