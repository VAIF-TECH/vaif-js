// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ProjectAPI from './project';
import { BaseProject, Project, ProjectRetrieveResponse } from './project';

export class BaseMigrations extends APIResource {
  static override readonly _key: readonly ['schemaEngine', 'migrations'] = Object.freeze([
    'schemaEngine',
    'migrations',
  ] as const);
}
export class Migrations extends BaseMigrations {
  project: ProjectAPI.Project = new ProjectAPI.Project(this._client);
}

Migrations.Project = Project;
Migrations.BaseProject = BaseProject;

export declare namespace Migrations {
  export {
    Project as Project,
    BaseProject as BaseProject,
    type ProjectRetrieveResponse as ProjectRetrieveResponse,
  };
}
