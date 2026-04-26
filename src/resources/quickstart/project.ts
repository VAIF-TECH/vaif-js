// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Project extends APIResource {
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

  /**
   * Get quickstart JSON data for a project
   */
  retrieveJson(projectID: string, options?: RequestOptions): APIPromise<ProjectRetrieveJsonResponse> {
    return this._client.get(path`/quickstart/project/${projectID}/json`, options);
  }
}

export type ProjectRetrieveResponse = string;

export interface ProjectRetrieveJsonResponse {
  ok: true;

  data?: unknown;
}

export interface ProjectRetrieveParams {
  env?: string;

  platform?: 'web' | 'node' | 'expo';
}

export declare namespace Project {
  export {
    type ProjectRetrieveResponse as ProjectRetrieveResponse,
    type ProjectRetrieveJsonResponse as ProjectRetrieveJsonResponse,
    type ProjectRetrieveParams as ProjectRetrieveParams,
  };
}
