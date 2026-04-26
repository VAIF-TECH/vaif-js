// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Introspect extends APIResource {
  /**
   * Introspect current database schema for a project
   */
  retrieve(projectID: string, options?: RequestOptions): APIPromise<IntrospectRetrieveResponse> {
    return this._client.get(path`/schema-engine/introspect/${projectID}`, options);
  }
}

export interface IntrospectRetrieveResponse {
  ok: true;

  schemaExists: boolean;

  tables: Array<unknown>;

  schemaName?: string;

[k: string]: unknown
}

export declare namespace Introspect {
  export {
    type IntrospectRetrieveResponse as IntrospectRetrieveResponse
  };
}
