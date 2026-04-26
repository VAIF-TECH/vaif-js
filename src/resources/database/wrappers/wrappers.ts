// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AvailableAPI from './available';
import { Available } from './available';
import * as ProjectAPI from './project/project';
import { Project, ProjectDeleteParams, ProjectUpdateParams, ProjectUpdateResponse } from './project/project';

export class Wrappers extends APIResource {
  available: AvailableAPI.Available = new AvailableAPI.Available(this._client);
  project: ProjectAPI.Project = new ProjectAPI.Project(this._client);
}

Wrappers.Available = Available;
Wrappers.Project = Project;

export declare namespace Wrappers {
  export {
    Available as Available
  };

  export {
    Project as Project,
    type ProjectUpdateResponse as ProjectUpdateResponse,
    type ProjectUpdateParams as ProjectUpdateParams,
    type ProjectDeleteParams as ProjectDeleteParams
  };
}
