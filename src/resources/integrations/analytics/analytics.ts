// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ProjectAPI from './project/project';
import { BaseProject, Project } from './project/project';

export class BaseAnalytics extends APIResource {
  static override readonly _key: readonly ['integrations', 'analytics'] = Object.freeze(['integrations', 'analytics'] as const)

}
export class Analytics extends BaseAnalytics {
  project: ProjectAPI.Project = new ProjectAPI.Project(this._client);
}

Analytics.Project = Project;
Analytics.BaseProject = BaseProject;

export declare namespace Analytics {
  export {
    Project as Project,
    BaseProject as BaseProject
  };
}
