// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Usage extends APIResource {
  getHistory(orgID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/billing/org/${orgID}/usage/history`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  getRealtime(orgID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/billing/org/${orgID}/usage/realtime`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  getUsage(orgID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/billing/org/${orgID}/usage`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}
