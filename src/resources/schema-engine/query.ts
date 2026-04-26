// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Query extends APIResource {
  /**
   * Execute SQL query against project database
   */
  create(projectID: string, body: QueryCreateParams, options?: RequestOptions): APIPromise<QueryCreateResponse> {
    return this._client.post(path`/schema-engine/query/${projectID}`, { body, ...options });
  }
}

export interface QueryCreateResponse {
  executionTimeMs: number;

  ok: true;

  rowCount: number | null;

  rows: Array<unknown>;

  command?: string;

  fields?: Array<QueryCreateResponse.Field>;

[k: string]: unknown
}

export namespace QueryCreateResponse {
  export interface Field {
    dataTypeID: number;

    name: string;
  }
}

export interface QueryCreateParams {
  sql: string;

  params?: Array<unknown>;
}

export declare namespace Query {
  export {
    type QueryCreateResponse as QueryCreateResponse,
    type QueryCreateParams as QueryCreateParams
  };
}
