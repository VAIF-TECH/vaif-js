// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as InstallAPI from './install';
import { Install, InstallInstallParams, InstallInstallResponse } from './install';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Project extends APIResource {
  install: InstallAPI.Install = new InstallAPI.Install(this._client);

  retrieve(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/database/extensions/project/${projectID}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  delete(extensionID: string, params: ProjectDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { projectId } = params
    return this._client.delete(path`/database/extensions/project/${projectId}/${extensionID}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}

export interface ProjectDeleteParams {
  projectId: string;
}

Project.Install = Install;

export declare namespace Project {
  export {
    type ProjectDeleteParams as ProjectDeleteParams
  };

  export {
    Install as Install,
    type InstallInstallResponse as InstallInstallResponse,
    type InstallInstallParams as InstallInstallParams
  };
}
