// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Project extends APIResource {
  /**
   * List deployment tokens for a project
   */
  retrieve(projectID: string, options?: RequestOptions): APIPromise<ProjectRetrieveResponse> {
    return this._client.get(path`/deployments/tokens/project/${projectID}`, options);
  }
}

export interface ProjectRetrieveResponse {
  tokens: Array<ProjectRetrieveResponse.Token>;
}

export namespace ProjectRetrieveResponse {
  export interface Token {
    id: string;

    createdAt: string | (string & {});

    envId: string;

    revokedAt: string | (string & {}) | null;
  }
}

export declare namespace Project {
  export {
    type ProjectRetrieveResponse as ProjectRetrieveResponse
  };
}
