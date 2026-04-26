// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseCostBreakdown extends APIResource {
  static override readonly _key: readonly ['billing', 'org', 'costBreakdown'] = Object.freeze(['billing', 'org', 'costBreakdown'] as const)

  getCostBreakdown(orgID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/billing/org/${orgID}/cost-breakdown`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}
export class CostBreakdown extends BaseCostBreakdown {

}
