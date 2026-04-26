// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Project extends APIResource {
  /**
   * List logs for a project
   */
  list(
    projectID: string,
    query: ProjectListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ProjectListResponse> {
    return this._client.get(path`/logs/project/${projectID}`, { query, ...options });
  }

  /**
   * Stream live logs for a project (SSE)
   */
  stream(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/logs/project/${projectID}/stream`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type ProjectListResponse = Array<ProjectListResponse.ProjectListResponseItem>;

export namespace ProjectListResponse {
  export interface ProjectListResponseItem {
    id: string;

    projectId: string | null;

    createdAt?: string | (string & {}) | null;

    level?: string | null;

    message?: string | null;

    [k: string]: unknown;
  }
}

export interface ProjectListParams {
  level?: 'info' | 'warn' | 'error';

  limit?: number;
}

export declare namespace Project {
  export { type ProjectListResponse as ProjectListResponse, type ProjectListParams as ProjectListParams };
}
