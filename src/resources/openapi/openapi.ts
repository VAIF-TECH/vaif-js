// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as FullAPI from './full';
import { Full } from './full';
import * as ProjectAPI from './project';
import { Project } from './project';

export class OpenAPI extends APIResource {
  full: FullAPI.Full = new FullAPI.Full(this._client);
  project: ProjectAPI.Project = new ProjectAPI.Project(this._client);
}

OpenAPI.Full = Full;
OpenAPI.Project = Project;

export declare namespace OpenAPI {
  export {
    Full as Full
  };

  export {
    Project as Project
  };
}
