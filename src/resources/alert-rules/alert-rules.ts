// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ProjectAPI from './project';
import { BaseProject, Project } from './project';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseAlertRules extends APIResource {
  static override readonly _key: readonly ['alertRules'] = Object.freeze(['alertRules'] as const)

  update(ruleID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/alert-rules/${ruleID}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  delete(ruleID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/alert-rules/${ruleID}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}
export class AlertRules extends BaseAlertRules {
  project: ProjectAPI.Project = new ProjectAPI.Project(this._client);
}

AlertRules.Project = Project;
AlertRules.BaseProject = BaseProject;

export declare namespace AlertRules {
  export {
    Project as Project,
    BaseProject as BaseProject
  };
}
