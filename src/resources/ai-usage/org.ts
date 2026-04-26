// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Org extends APIResource {
  retrieveBreakdown(orgID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/ai-usage/org/${orgID}/breakdown`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  retrieveExhaustionEvents(orgID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/ai-usage/org/${orgID}/exhaustion-events`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  retrieveHistory(orgID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/ai-usage/org/${orgID}/history`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  retrieveRecent(orgID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/ai-usage/org/${orgID}/recent`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  retrieveRollups(orgID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/ai-usage/org/${orgID}/rollups`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  retrieveSummary(orgID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/ai-usage/org/${orgID}/summary`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
