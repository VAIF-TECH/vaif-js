// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Json extends APIResource {
  /**
   * Get quickstart JSON data for a project
   */
  getJson(projectID: string, options?: RequestOptions): APIPromise<JsonGetJsonResponse> {
    return this._client.get(path`/quickstart/project/${projectID}/json`, options);
  }
}

export interface JsonGetJsonResponse {
  ok: true;

  data?: unknown;
}

export declare namespace Json {
  export {
    type JsonGetJsonResponse as JsonGetJsonResponse
  };
}
