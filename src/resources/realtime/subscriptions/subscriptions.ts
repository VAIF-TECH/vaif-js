// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ProjectAPI from './project';
import { BaseProject, Project } from './project';

export class BaseSubscriptions extends APIResource {
  static override readonly _key: readonly ['realtime', 'subscriptions'] = Object.freeze(['realtime', 'subscriptions'] as const)

}
export class Subscriptions extends BaseSubscriptions {
  project: ProjectAPI.Project = new ProjectAPI.Project(this._client);
}

Subscriptions.Project = Project;
Subscriptions.BaseProject = BaseProject;

export declare namespace Subscriptions {
  export {
    Project as Project,
    BaseProject as BaseProject
  };
}
