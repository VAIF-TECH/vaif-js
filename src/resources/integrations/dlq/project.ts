// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseProject extends APIResource {
  static override readonly _key: readonly ['integrations', 'dlq', 'project'] = Object.freeze(['integrations', 'dlq', 'project'] as const)

  /**
   * List failed deliveries (DLQ) for a project
   */
  retrieve(projectID: string, options?: RequestOptions): APIPromise<ProjectRetrieveResponse> {
    return this._client.get(path`/integrations/dlq/project/${projectID}`, options);
  }
}
export class Project extends BaseProject {

}

export interface ProjectRetrieveResponse {
  deliveries: Array<unknown>;
}

export declare namespace Project {
  export {
    type ProjectRetrieveResponse as ProjectRetrieveResponse
  };
}
