// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ProjectAPI from './project';
import { Project } from './project';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class AlertRules extends APIResource {
  project: ProjectAPI.Project = new ProjectAPI.Project(this._client);

  update(ruleID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/alert-rules/${ruleID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  delete(ruleID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/alert-rules/${ruleID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

AlertRules.Project = Project;

export declare namespace AlertRules {
  export { Project as Project };
}
