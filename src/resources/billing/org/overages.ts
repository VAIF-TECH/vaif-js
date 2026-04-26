// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseOverages extends APIResource {
  static override readonly _key: readonly ['billing', 'org', 'overages'] = Object.freeze(['billing', 'org', 'overages'] as const)

  getHistory(orgID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/billing/org/${orgID}/overages/history`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  getOverages(orgID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/billing/org/${orgID}/overages`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}
export class Overages extends BaseOverages {

}
