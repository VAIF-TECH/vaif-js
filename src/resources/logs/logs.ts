// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ProjectAPI from './project/project';
import { BaseProject, Project, ProjectRetrieveParams, ProjectRetrieveResponse } from './project/project';

export class BaseLogs extends APIResource {
  static override readonly _key: readonly ['logs'] = Object.freeze(['logs'] as const);
}
export class Logs extends BaseLogs {
  project: ProjectAPI.Project = new ProjectAPI.Project(this._client);
}

Logs.Project = Project;
Logs.BaseProject = BaseProject;

export declare namespace Logs {
  export {
    Project as Project,
    BaseProject as BaseProject,
    type ProjectRetrieveResponse as ProjectRetrieveResponse,
    type ProjectRetrieveParams as ProjectRetrieveParams,
  };
}
