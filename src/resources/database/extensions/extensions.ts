// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ProjectAPI from './project';
import { Project, ProjectDeleteParams, ProjectInstallParams, ProjectInstallResponse } from './project';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class Extensions extends APIResource {
  project: ProjectAPI.Project = new ProjectAPI.Project(this._client);

  listAvailable(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/database/extensions/available', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

Extensions.Project = Project;

export declare namespace Extensions {
  export {
    Project as Project,
    type ProjectInstallResponse as ProjectInstallResponse,
    type ProjectDeleteParams as ProjectDeleteParams,
    type ProjectInstallParams as ProjectInstallParams,
  };
}
