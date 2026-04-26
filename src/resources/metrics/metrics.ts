// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ProjectAPI from './project';
import { Project } from './project';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Metrics extends APIResource {
  project: ProjectAPI.Project = new ProjectAPI.Project(this._client);

  retrieveOrg(orgID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/metrics/org/${orgID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

Metrics.Project = Project;

export declare namespace Metrics {
  export { Project as Project };
}
