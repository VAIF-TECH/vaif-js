// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BaseHistory extends APIResource {
  static override readonly _key: readonly ['ai', 'copilot', 'deploy', 'history'] = Object.freeze([
    'ai',
    'copilot',
    'deploy',
    'history',
  ] as const);

  /**
   * List deploy history for a project
   */
  retrieve(
    projectID: string,
    query: HistoryRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<HistoryRetrieveResponse> {
    return this._client.get(path`/ai/copilot/deploy/history/${projectID}`, { query, ...options });
  }
}
export class History extends BaseHistory {}

export interface HistoryRetrieveResponse {
  deploys: Array<unknown>;

  pagination: HistoryRetrieveResponse.Pagination;
}

export namespace HistoryRetrieveResponse {
  export interface Pagination {
    hasMore: boolean;

    limit: number;

    offset: number;
  }
}

export interface HistoryRetrieveParams {
  limit?: number;

  offset?: number;

  status?: 'success' | 'failed' | 'partial_failure' | 'rolled_back' | 'in_progress';
}

export declare namespace History {
  export {
    type HistoryRetrieveResponse as HistoryRetrieveResponse,
    type HistoryRetrieveParams as HistoryRetrieveParams,
  };
}
