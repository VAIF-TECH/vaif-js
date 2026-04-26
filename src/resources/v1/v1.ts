// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as HealthAPI from './health';
import { Health } from './health';
import * as ProjectAPI from './project';
import { Project } from './project';

export class V1 extends APIResource {
  health: HealthAPI.Health = new HealthAPI.Health(this._client);
  project: ProjectAPI.Project = new ProjectAPI.Project(this._client);
}

V1.Health = Health;
V1.Project = Project;

export declare namespace V1 {
  export {
    Health as Health
  };

  export {
    Project as Project
  };
}
