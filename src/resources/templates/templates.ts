// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as InstallAPI from './install';
import { Install } from './install';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Templates extends APIResource {
  install: InstallAPI.Install = new InstallAPI.Install(this._client);

  create(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/templates/', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  retrieve(slug: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/templates/${slug}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/templates/', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  createProject(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/templates/create-project', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

Templates.Install = Install;

export declare namespace Templates {
  export { Install as Install };
}
