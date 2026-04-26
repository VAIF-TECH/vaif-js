// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ProjectAPI from './project';
import { Project } from './project';

export class Status extends APIResource {
  project: ProjectAPI.Project = new ProjectAPI.Project(this._client);
}

Status.Project = Project;

export declare namespace Status {
  export {
    Project as Project
  };
}
