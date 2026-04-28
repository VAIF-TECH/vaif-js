// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseSummary extends APIResource {
  static override readonly _key: readonly ['aiUsage', 'org', 'summary'] = Object.freeze([
    'aiUsage',
    'org',
    'summary',
  ] as const);

  getSummary(orgID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/ai-usage/org/${orgID}/summary`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
export class Summary extends BaseSummary {}
