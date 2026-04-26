// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseResume extends APIResource {
  static override readonly _key: readonly ['billing', 'org', 'resume'] = Object.freeze(['billing', 'org', 'resume'] as const)

  resume(orgID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/billing/org/${orgID}/resume`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}
export class Resume extends BaseResume {

}
