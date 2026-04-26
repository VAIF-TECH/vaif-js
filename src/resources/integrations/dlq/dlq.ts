// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ProjectAPI from './project';
import { BaseProject, Project, ProjectRetrieveResponse } from './project';

export class BaseDlq extends APIResource {
  static override readonly _key: readonly ['integrations', 'dlq'] = Object.freeze(['integrations', 'dlq'] as const)

}
export class Dlq extends BaseDlq {
  project: ProjectAPI.Project = new ProjectAPI.Project(this._client);
}

Dlq.Project = Project;
Dlq.BaseProject = BaseProject;

export declare namespace Dlq {
  export {
    Project as Project,
    BaseProject as BaseProject,
    type ProjectRetrieveResponse as ProjectRetrieveResponse
  };
}
