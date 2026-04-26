// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Project extends APIResource {
  retrieve(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/database/extensions/project/${projectID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  delete(extensionID: string, params: ProjectDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { projectId } = params;
    return this._client.delete(path`/database/extensions/project/${projectId}/${extensionID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  install(projectID: string, body: ProjectInstallParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post(path`/database/extensions/project/${projectID}/install`, { body, ...options });
  }
}

export type ProjectInstallResponse = unknown;

export interface ProjectDeleteParams {
  projectId: string;
}

export interface ProjectInstallParams {
  extensionId: string;

  config?: { [key: string]: unknown };

  envId?: string;
}

export declare namespace Project {
  export {
    type ProjectInstallResponse as ProjectInstallResponse,
    type ProjectDeleteParams as ProjectDeleteParams,
    type ProjectInstallParams as ProjectInstallParams,
  };
}
