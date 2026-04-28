// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseJson extends APIResource {
  static override readonly _key: readonly ['quickstart', 'project', 'json'] = Object.freeze([
    'quickstart',
    'project',
    'json',
  ] as const);

  /**
   * Get quickstart JSON data for a project
   */
  getJson(projectID: string, options?: RequestOptions): APIPromise<JsonGetJsonResponse> {
    return this._client.get(path`/quickstart/project/${projectID}/json`, options);
  }
}
export class Json extends BaseJson {}

export interface JsonGetJsonResponse {
  ok: true;

  data?: unknown;
}

export declare namespace Json {
  export { type JsonGetJsonResponse as JsonGetJsonResponse };
}
