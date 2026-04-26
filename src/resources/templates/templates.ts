// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CreateProjectAPI from './create-project';
import { BaseCreateProject, CreateProject } from './create-project';
import * as InstallAPI from './install/install';
import { BaseInstall, Install } from './install/install';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseTemplates extends APIResource {
  static override readonly _key: readonly ['templates'] = Object.freeze(['templates'] as const)

  create(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/templates/', { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  retrieve(slug: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/templates/${slug}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/templates/', { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}
export class Templates extends BaseTemplates {
  createProject: CreateProjectAPI.CreateProject = new CreateProjectAPI.CreateProject(this._client);
  install: InstallAPI.Install = new InstallAPI.Install(this._client);
}

Templates.CreateProject = CreateProject;
Templates.BaseCreateProject = BaseCreateProject;
Templates.Install = Install;
Templates.BaseInstall = BaseInstall;

export declare namespace Templates {
  export {
    CreateProject as CreateProject,
    BaseCreateProject as BaseCreateProject
  };

  export {
    Install as Install,
    BaseInstall as BaseInstall
  };
}
