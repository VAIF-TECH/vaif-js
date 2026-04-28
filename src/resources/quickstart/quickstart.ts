// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ProjectAPI from './project/project';
import { BaseProject, Project, ProjectRetrieveParams, ProjectRetrieveResponse } from './project/project';

export class BaseQuickstart extends APIResource {
  static override readonly _key: readonly ['quickstart'] = Object.freeze(['quickstart'] as const);
}
export class Quickstart extends BaseQuickstart {
  project: ProjectAPI.Project = new ProjectAPI.Project(this._client);
}

Quickstart.Project = Project;
Quickstart.BaseProject = BaseProject;

export declare namespace Quickstart {
  export {
    Project as Project,
    BaseProject as BaseProject,
    type ProjectRetrieveResponse as ProjectRetrieveResponse,
    type ProjectRetrieveParams as ProjectRetrieveParams,
  };
}
