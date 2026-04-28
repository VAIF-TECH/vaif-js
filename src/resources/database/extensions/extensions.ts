// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AvailableAPI from './available';
import { Available, BaseAvailable } from './available';
import * as ProjectAPI from './project/project';
import { BaseProject, Project, ProjectDeleteParams } from './project/project';

export class BaseExtensions extends APIResource {
  static override readonly _key: readonly ['database', 'extensions'] = Object.freeze([
    'database',
    'extensions',
  ] as const);
}
export class Extensions extends BaseExtensions {
  available: AvailableAPI.Available = new AvailableAPI.Available(this._client);
  project: ProjectAPI.Project = new ProjectAPI.Project(this._client);
}

Extensions.Available = Available;
Extensions.BaseAvailable = BaseAvailable;
Extensions.Project = Project;
Extensions.BaseProject = BaseProject;

export declare namespace Extensions {
  export { Available as Available, BaseAvailable as BaseAvailable };

  export { Project as Project, BaseProject as BaseProject, type ProjectDeleteParams as ProjectDeleteParams };
}
