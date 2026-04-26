// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CreateProjectAPI from './create-project';
import { CreateProject } from './create-project';
import * as InstallAPI from './install/install';
import { Install } from './install/install';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Templates extends APIResource {
  createProject: CreateProjectAPI.CreateProject = new CreateProjectAPI.CreateProject(this._client);
  install: InstallAPI.Install = new InstallAPI.Install(this._client);

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

Templates.CreateProject = CreateProject;
Templates.Install = Install;

export declare namespace Templates {
  export {
    CreateProject as CreateProject
  };

  export {
    Install as Install
  };
}
