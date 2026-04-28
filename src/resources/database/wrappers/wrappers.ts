// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AvailableAPI from './available';
import { Available, BaseAvailable } from './available';
import * as ProjectAPI from './project/project';
import {
  BaseProject,
  Project,
  ProjectDeleteParams,
  ProjectUpdateParams,
  ProjectUpdateResponse,
} from './project/project';

export class BaseWrappers extends APIResource {
  static override readonly _key: readonly ['database', 'wrappers'] = Object.freeze([
    'database',
    'wrappers',
  ] as const);
}
export class Wrappers extends BaseWrappers {
  available: AvailableAPI.Available = new AvailableAPI.Available(this._client);
  project: ProjectAPI.Project = new ProjectAPI.Project(this._client);
}

Wrappers.Available = Available;
Wrappers.BaseAvailable = BaseAvailable;
Wrappers.Project = Project;
Wrappers.BaseProject = BaseProject;

export declare namespace Wrappers {
  export { Available as Available, BaseAvailable as BaseAvailable };

  export {
    Project as Project,
    BaseProject as BaseProject,
    type ProjectUpdateResponse as ProjectUpdateResponse,
    type ProjectUpdateParams as ProjectUpdateParams,
    type ProjectDeleteParams as ProjectDeleteParams,
  };
}
