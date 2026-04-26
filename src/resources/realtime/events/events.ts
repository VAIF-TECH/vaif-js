// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ProjectAPI from './project';
import { Project } from './project';

export class Events extends APIResource {
  project: ProjectAPI.Project = new ProjectAPI.Project(this._client);
}

Events.Project = Project;

export declare namespace Events {
  export {
    Project as Project
  };
}
