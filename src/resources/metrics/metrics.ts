// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as OrgAPI from './org';
import { Org } from './org';
import * as ProjectAPI from './project/project';
import { Project } from './project/project';

export class Metrics extends APIResource {
  org: OrgAPI.Org = new OrgAPI.Org(this._client);
  project: ProjectAPI.Project = new ProjectAPI.Project(this._client);
}

Metrics.Org = Org;
Metrics.Project = Project;

export declare namespace Metrics {
  export {
    Org as Org
  };

  export {
    Project as Project
  };
}
