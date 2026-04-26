// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Changes extends APIResource {
  /**
   * Get schema change history for a project
   */
  getChanges(projectID: string, options?: RequestOptions): APIPromise<ChangeGetChangesResponse> {
    return this._client.get(path`/schema-engine/${projectID}/changes`, options);
  }
}

export interface ChangeGetChangesResponse {
  data: Array<unknown>;

  ok: true;
}

export declare namespace Changes {
  export {
    type ChangeGetChangesResponse as ChangeGetChangesResponse
  };
}
