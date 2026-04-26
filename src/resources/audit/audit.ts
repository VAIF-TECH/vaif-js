// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as OrgAPI from './org';
import { BaseOrg, Org } from './org';
import * as ProjectAPI from './project';
import { BaseProject, Project } from './project';

export class BaseAudit extends APIResource {
  static override readonly _key: readonly ['audit'] = Object.freeze(['audit'] as const)

}
export class Audit extends BaseAudit {
  org: OrgAPI.Org = new OrgAPI.Org(this._client);
  project: ProjectAPI.Project = new ProjectAPI.Project(this._client);
}

Audit.Org = Org;
Audit.BaseOrg = BaseOrg;
Audit.Project = Project;
Audit.BaseProject = BaseProject;

export declare namespace Audit {
  export {
    Org as Org,
    BaseOrg as BaseOrg
  };

  export {
    Project as Project,
    BaseProject as BaseProject
  };
}
