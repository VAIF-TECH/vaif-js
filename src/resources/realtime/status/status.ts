// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ProjectAPI from './project';
import { BaseProject, Project } from './project';

export class BaseStatus extends APIResource {
  static override readonly _key: readonly ['realtime', 'status'] = Object.freeze(['realtime', 'status'] as const)

}
export class Status extends BaseStatus {
  project: ProjectAPI.Project = new ProjectAPI.Project(this._client);
}

Status.Project = Project;
Status.BaseProject = BaseProject;

export declare namespace Status {
  export {
    Project as Project,
    BaseProject as BaseProject
  };
}
