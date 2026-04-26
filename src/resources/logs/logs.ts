// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ProjectAPI from './project';
import { Project, ProjectListParams, ProjectListResponse } from './project';

export class Logs extends APIResource {
  project: ProjectAPI.Project = new ProjectAPI.Project(this._client);
}

Logs.Project = Project;

export declare namespace Logs {
  export {
    Project as Project,
    type ProjectListResponse as ProjectListResponse,
    type ProjectListParams as ProjectListParams,
  };
}
