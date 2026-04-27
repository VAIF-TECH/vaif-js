// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseExhaustionEvents extends APIResource {
  static override readonly _key: readonly ['aiUsage', 'org', 'exhaustionEvents'] = Object.freeze(['aiUsage', 'org', 'exhaustionEvents'] as const)

  getExhaustionEvents(orgID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/ai-usage/org/${orgID}/exhaustion-events`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}
export class ExhaustionEvents extends BaseExhaustionEvents {

}
