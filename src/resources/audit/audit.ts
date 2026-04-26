// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as OrgAPI from './org';
import { Org } from './org';
import * as ProjectAPI from './project';
import { Project } from './project';

export class Audit extends APIResource {
  org: OrgAPI.Org = new OrgAPI.Org(this._client);
  project: ProjectAPI.Project = new ProjectAPI.Project(this._client);
}

Audit.Org = Org;
Audit.Project = Project;

export declare namespace Audit {
  export {
    Org as Org
  };

  export {
    Project as Project
  };
}
