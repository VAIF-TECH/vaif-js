// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ProjectAPI from './project';
import { BaseProject, Project } from './project';

export class BaseConnections extends APIResource {
  static override readonly _key: readonly ['realtime', 'connections'] = Object.freeze([
    'realtime',
    'connections',
  ] as const);
}
export class Connections extends BaseConnections {
  project: ProjectAPI.Project = new ProjectAPI.Project(this._client);
}

Connections.Project = Project;
Connections.BaseProject = BaseProject;

export declare namespace Connections {
  export { Project as Project, BaseProject as BaseProject };
}
