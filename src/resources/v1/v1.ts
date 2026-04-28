// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as HealthAPI from './health';
import { BaseHealth, Health } from './health';
import * as ProjectAPI from './project';
import { BaseProject, Project } from './project';

export class BaseV1 extends APIResource {
  static override readonly _key: readonly ['v1'] = Object.freeze(['v1'] as const);
}
export class V1 extends BaseV1 {
  health: HealthAPI.Health = new HealthAPI.Health(this._client);
  project: ProjectAPI.Project = new ProjectAPI.Project(this._client);
}

V1.Health = Health;
V1.BaseHealth = BaseHealth;
V1.Project = Project;
V1.BaseProject = BaseProject;

export declare namespace V1 {
  export { Health as Health, BaseHealth as BaseHealth };

  export { Project as Project, BaseProject as BaseProject };
}
