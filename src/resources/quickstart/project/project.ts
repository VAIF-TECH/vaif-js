// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as JsonAPI from './json';
import { Json, JsonGetJsonResponse } from './json';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Project extends APIResource {
  json: JsonAPI.Json = new JsonAPI.Json(this._client);

  /**
   * Get quickstart guide for a project
   */
  retrieve(projectID: string, query: ProjectRetrieveParams | null | undefined = {}, options?: RequestOptions): APIPromise<string> {
    return this._client.get(path`/quickstart/project/${projectID}`, { query, ...options });
  }
}

export type ProjectRetrieveResponse = string

export interface ProjectRetrieveParams {
  env?: string;

  platform?: 'web' | 'node' | 'expo';
}

Project.Json = Json;

export declare namespace Project {
  export {
    type ProjectRetrieveResponse as ProjectRetrieveResponse,
    type ProjectRetrieveParams as ProjectRetrieveParams
  };

  export {
    Json as Json,
    type JsonGetJsonResponse as JsonGetJsonResponse
  };
}
