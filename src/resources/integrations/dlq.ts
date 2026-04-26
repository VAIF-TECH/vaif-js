// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Dlq extends APIResource {
  /**
   * List failed deliveries (DLQ) for a project
   */
  listForProject(projectID: string, options?: RequestOptions): APIPromise<DlqListForProjectResponse> {
    return this._client.get(path`/integrations/dlq/project/${projectID}`, options);
  }
}

export interface DlqListForProjectResponse {
  deliveries: Array<unknown>;
}

export declare namespace Dlq {
  export { type DlqListForProjectResponse as DlqListForProjectResponse };
}
