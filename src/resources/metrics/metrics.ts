// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as OrgAPI from './org';
import { BaseOrg, Org } from './org';
import * as ProjectAPI from './project/project';
import { BaseProject, Project } from './project/project';

export class BaseMetrics extends APIResource {
  static override readonly _key: readonly ['metrics'] = Object.freeze(['metrics'] as const);
}
export class Metrics extends BaseMetrics {
  org: OrgAPI.Org = new OrgAPI.Org(this._client);
  project: ProjectAPI.Project = new ProjectAPI.Project(this._client);
}

Metrics.Org = Org;
Metrics.BaseOrg = BaseOrg;
Metrics.Project = Project;
Metrics.BaseProject = BaseProject;

export declare namespace Metrics {
  export { Org as Org, BaseOrg as BaseOrg };

  export { Project as Project, BaseProject as BaseProject };
}
