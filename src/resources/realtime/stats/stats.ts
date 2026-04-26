// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ProjectAPI from './project';
import { Project } from './project';

export class Stats extends APIResource {
  project: ProjectAPI.Project = new ProjectAPI.Project(this._client);
}

Stats.Project = Project;

export declare namespace Stats {
  export {
    Project as Project
  };
}
