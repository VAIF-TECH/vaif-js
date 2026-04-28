// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseProject extends APIResource {
  static override readonly _key: readonly ['incidents', 'project'] = Object.freeze([
    'incidents',
    'project',
  ] as const);

  /**
   * List incidents for a project
   */
  retrieve(projectID: string, options?: RequestOptions): APIPromise<ProjectRetrieveResponse> {
    return this._client.get(path`/incidents/project/${projectID}`, options);
  }
}
export class Project extends BaseProject {}

export interface ProjectRetrieveResponse {
  incidents: Array<ProjectRetrieveResponse.Incident>;
}

export namespace ProjectRetrieveResponse {
  export interface Incident {
    id: string;

    createdAt: string | (string & {});

    orgId: string | null;

    projectId: string | null;

    status: string;

    message?: string | null;

    type?: string | null;

    updatedAt?: string | (string & {}) | null;

    [k: string]: unknown;
  }
}

export declare namespace Project {
  export { type ProjectRetrieveResponse as ProjectRetrieveResponse };
}
