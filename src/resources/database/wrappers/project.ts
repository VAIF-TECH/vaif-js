// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Project extends APIResource {
  retrieve(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/database/wrappers/project/${projectID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  update(wrapperID: string, params: ProjectUpdateParams, options?: RequestOptions): APIPromise<unknown> {
    const { projectId, ...body } = params;
    return this._client.patch(path`/database/wrappers/project/${projectId}/${wrapperID}`, {
      body,
      ...options,
    });
  }

  delete(wrapperID: string, params: ProjectDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { projectId } = params;
    return this._client.delete(path`/database/wrappers/project/${projectId}/${wrapperID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  install(projectID: string, body: ProjectInstallParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post(path`/database/wrappers/project/${projectID}/install`, { body, ...options });
  }
}

export type ProjectUpdateResponse = unknown;

export type ProjectInstallResponse = unknown;

export interface ProjectUpdateParams {
  /**
   * Path param
   */
  projectId: string;

  /**
   * Body param
   */
  config?: { [key: string]: unknown };

  /**
   * Body param
   */
  enabledTables?: Array<string>;
}

export interface ProjectDeleteParams {
  projectId: string;
}

export interface ProjectInstallParams {
  config: { [key: string]: unknown };

  wrapperId: string;

  enabledTables?: Array<string>;

  envId?: string;
}

export declare namespace Project {
  export {
    type ProjectUpdateResponse as ProjectUpdateResponse,
    type ProjectInstallResponse as ProjectInstallResponse,
    type ProjectUpdateParams as ProjectUpdateParams,
    type ProjectDeleteParams as ProjectDeleteParams,
    type ProjectInstallParams as ProjectInstallParams,
  };
}
