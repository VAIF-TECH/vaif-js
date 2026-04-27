// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ProjectAPI from './project';
import { BaseProject, Project } from './project';

export class BaseStats extends APIResource {
  static override readonly _key: readonly ['realtime', 'stats'] = Object.freeze(['realtime', 'stats'] as const)

}
export class Stats extends BaseStats {
  project: ProjectAPI.Project = new ProjectAPI.Project(this._client);
}

Stats.Project = Project;
Stats.BaseProject = BaseProject;

export declare namespace Stats {
  export {
    Project as Project,
    BaseProject as BaseProject
  };
}
