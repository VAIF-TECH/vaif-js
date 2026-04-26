// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Connector extends APIResource {
  listTables(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/database/connector/${projectID}/tables`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  query(projectID: string, body: ConnectorQueryParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post(path`/database/connector/${projectID}/query`, { body, ...options });
  }

  test(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/database/connector/${projectID}/test`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type ConnectorQueryResponse = unknown;

export interface ConnectorQueryParams {
  table: string;

  wrapperId: string;

  filters?: { [key: string]: unknown };

  limit?: number;

  offset?: number;
}

export declare namespace Connector {
  export {
    type ConnectorQueryResponse as ConnectorQueryResponse,
    type ConnectorQueryParams as ConnectorQueryParams,
  };
}
