// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ProjectAPI from './project';
import { BaseProject, Project } from './project';

export class BaseEvents extends APIResource {
  static override readonly _key: readonly ['realtime', 'events'] = Object.freeze(['realtime', 'events'] as const)

}
export class Events extends BaseEvents {
  project: ProjectAPI.Project = new ProjectAPI.Project(this._client);
}

Events.Project = Project;
Events.BaseProject = BaseProject;

export declare namespace Events {
  export {
    Project as Project,
    BaseProject as BaseProject
  };
}
