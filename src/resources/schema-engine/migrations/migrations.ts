// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ProjectAPI from './project';
import { Project, ProjectRetrieveResponse } from './project';

export class Migrations extends APIResource {
  project: ProjectAPI.Project = new ProjectAPI.Project(this._client);
}

Migrations.Project = Project;

export declare namespace Migrations {
  export {
    Project as Project,
    type ProjectRetrieveResponse as ProjectRetrieveResponse
  };
}
