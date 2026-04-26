// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseProject extends APIResource {
  static override readonly _key: readonly ['integrations', 'subscriptions', 'project'] = Object.freeze(['integrations', 'subscriptions', 'project'] as const)

  /**
   * List integration subscriptions for a project
   */
  retrieve(projectID: string, options?: RequestOptions): APIPromise<ProjectRetrieveResponse> {
    return this._client.get(path`/integrations/subscriptions/project/${projectID}`, options);
  }
}
export class Project extends BaseProject {

}

export interface ProjectRetrieveResponse {
  subscriptions: Array<ProjectRetrieveResponse.Subscription>;
}

export namespace ProjectRetrieveResponse {
  export interface Subscription {
    id: string;

    name: string;

    projectId: string;

    type: string;

    config?: unknown;

    createdAt?: string | (string & {});

    envId?: string | null;

    eventFilter?: unknown;

    updatedAt?: string | (string & {});

  [k: string]: unknown
  }
}

export declare namespace Project {
  export {
    type ProjectRetrieveResponse as ProjectRetrieveResponse
  };
}
