// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ProjectAPI from './project/project';
import { Project } from './project/project';

export class Analytics extends APIResource {
  project: ProjectAPI.Project = new ProjectAPI.Project(this._client);
}

Analytics.Project = Project;

export declare namespace Analytics {
  export {
    Project as Project
  };
}
