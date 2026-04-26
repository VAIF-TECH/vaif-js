// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ProjectAPI from './project';
import {
  Project,
  ProjectRetrieveJsonResponse,
  ProjectRetrieveParams,
  ProjectRetrieveResponse,
} from './project';

export class Quickstart extends APIResource {
  project: ProjectAPI.Project = new ProjectAPI.Project(this._client);
}

Quickstart.Project = Project;

export declare namespace Quickstart {
  export {
    Project as Project,
    type ProjectRetrieveResponse as ProjectRetrieveResponse,
    type ProjectRetrieveJsonResponse as ProjectRetrieveJsonResponse,
    type ProjectRetrieveParams as ProjectRetrieveParams,
  };
}
