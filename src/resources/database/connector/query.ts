// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseQuery extends APIResource {
  static override readonly _key: readonly ['database', 'connector', 'query'] = Object.freeze([
    'database',
    'connector',
    'query',
  ] as const);

  query(projectID: string, body: QueryQueryParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post(path`/database/connector/${projectID}/query`, { body, ...options });
  }
}
export class Query extends BaseQuery {}

export type QueryQueryResponse = unknown;

export interface QueryQueryParams {
  table: string;

  wrapperId: string;

  filters?: { [key: string]: unknown };

  limit?: number;

  offset?: number;
}

export declare namespace Query {
  export { type QueryQueryResponse as QueryQueryResponse, type QueryQueryParams as QueryQueryParams };
}
