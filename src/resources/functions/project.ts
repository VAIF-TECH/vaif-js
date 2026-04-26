// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Project extends APIResource {
  retrieve(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/functions/project/${projectID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  retrieveByName(
    functionName: string,
    params: ProjectRetrieveByNameParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { projectId } = params;
    return this._client.get(path`/functions/project/${projectId}/name/${functionName}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ProjectRetrieveByNameParams {
  projectId: string;
}

export declare namespace Project {
  export { type ProjectRetrieveByNameParams as ProjectRetrieveByNameParams };
}
