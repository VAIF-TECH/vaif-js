// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as JsonAPI from './json';
import { BaseJson, Json, JsonGetJsonResponse } from './json';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseProject extends APIResource {
  static override readonly _key: readonly ['quickstart', 'project'] = Object.freeze([
    'quickstart',
    'project',
  ] as const);

  /**
   * Get quickstart guide for a project
   */
  retrieve(
    projectID: string,
    query: ProjectRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<string> {
    return this._client.get(path`/quickstart/project/${projectID}`, { query, ...options });
  }
}
export class Project extends BaseProject {
  json: JsonAPI.Json = new JsonAPI.Json(this._client);
}

export type ProjectRetrieveResponse = string;

export interface ProjectRetrieveParams {
  env?: string;

  platform?: 'web' | 'node' | 'expo';
}

Project.Json = Json;
Project.BaseJson = BaseJson;

export declare namespace Project {
  export {
    type ProjectRetrieveResponse as ProjectRetrieveResponse,
    type ProjectRetrieveParams as ProjectRetrieveParams,
  };

  export { Json as Json, BaseJson as BaseJson, type JsonGetJsonResponse as JsonGetJsonResponse };
}
