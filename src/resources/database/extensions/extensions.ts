// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AvailableAPI from './available';
import { Available } from './available';
import * as ProjectAPI from './project/project';
import { Project, ProjectDeleteParams } from './project/project';

export class Extensions extends APIResource {
  available: AvailableAPI.Available = new AvailableAPI.Available(this._client);
  project: ProjectAPI.Project = new ProjectAPI.Project(this._client);
}

Extensions.Available = Available;
Extensions.Project = Project;

export declare namespace Extensions {
  export {
    Available as Available
  };

  export {
    Project as Project,
    type ProjectDeleteParams as ProjectDeleteParams
  };
}
