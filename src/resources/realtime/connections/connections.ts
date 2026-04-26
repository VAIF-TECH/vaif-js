// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ProjectAPI from './project';
import { Project } from './project';

export class Connections extends APIResource {
  project: ProjectAPI.Project = new ProjectAPI.Project(this._client);
}

Connections.Project = Project;

export declare namespace Connections {
  export {
    Project as Project
  };
}
