// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as FullAPI from './full';
import { BaseFull, Full } from './full';
import * as ProjectAPI from './project';
import { BaseProject, Project } from './project';

export class BaseOpenAPI extends APIResource {
  static override readonly _key: readonly ['openAPI'] = Object.freeze(['openAPI'] as const);
}
export class OpenAPI extends BaseOpenAPI {
  full: FullAPI.Full = new FullAPI.Full(this._client);
  project: ProjectAPI.Project = new ProjectAPI.Project(this._client);
}

OpenAPI.Full = Full;
OpenAPI.BaseFull = BaseFull;
OpenAPI.Project = Project;
OpenAPI.BaseProject = BaseProject;

export declare namespace OpenAPI {
  export { Full as Full, BaseFull as BaseFull };

  export { Project as Project, BaseProject as BaseProject };
}
