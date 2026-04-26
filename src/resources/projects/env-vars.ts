// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class EnvVars extends APIResource {
  create(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/projects/${projectID}/env-vars`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  update(envVarID: string, params: EnvVarUpdateParams, options?: RequestOptions): APIPromise<void> {
    const { projectId } = params;
    return this._client.patch(path`/projects/${projectId}/env-vars/${envVarID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  list(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/projects/${projectID}/env-vars`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  delete(envVarID: string, params: EnvVarDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { projectId } = params;
    return this._client.delete(path`/projects/${projectId}/env-vars/${envVarID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  retrieveValue(
    envVarID: string,
    params: EnvVarRetrieveValueParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { projectId } = params;
    return this._client.get(path`/projects/${projectId}/env-vars/${envVarID}/value`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface EnvVarUpdateParams {
  projectId: string;
}

export interface EnvVarDeleteParams {
  projectId: string;
}

export interface EnvVarRetrieveValueParams {
  projectId: string;
}

export declare namespace EnvVars {
  export {
    type EnvVarUpdateParams as EnvVarUpdateParams,
    type EnvVarDeleteParams as EnvVarDeleteParams,
    type EnvVarRetrieveValueParams as EnvVarRetrieveValueParams,
  };
}
