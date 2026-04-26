// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseProject extends APIResource {
  static override readonly _key: readonly ['schemas', 'project'] = Object.freeze(['schemas', 'project'] as const)

  /**
   * List schemas for a project
   */
  retrieve(projectID: string, options?: RequestOptions): APIPromise<ProjectRetrieveResponse> {
    return this._client.get(path`/schemas/project/${projectID}`, options);
  }
}
export class Project extends BaseProject {

}

export type ProjectRetrieveResponse = Array<ProjectRetrieveResponse.ProjectRetrieveResponseItem>

export namespace ProjectRetrieveResponse {
  export interface ProjectRetrieveResponseItem {
    id: string;

    createdAt: string | (string & {});

    name: string;

    projectId: string;

    envId?: string | null;

    schema?: unknown;

  [k: string]: unknown
  }
}

export declare namespace Project {
  export {
    type ProjectRetrieveResponse as ProjectRetrieveResponse
  };
}
