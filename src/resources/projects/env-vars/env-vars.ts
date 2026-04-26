// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ValueAPI from './value';
import { Value, ValueGetValueParams } from './value';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class EnvVars extends APIResource {
  value: ValueAPI.Value = new ValueAPI.Value(this._client);

  update(envVarID: string, params: EnvVarUpdateParams, options?: RequestOptions): APIPromise<void> {
    const { projectId } = params
    return this._client.patch(path`/projects/${projectId}/env-vars/${envVarID}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  delete(envVarID: string, params: EnvVarDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { projectId } = params
    return this._client.delete(path`/projects/${projectId}/env-vars/${envVarID}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  envVars(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/projects/${projectID}/env-vars`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  getEnvVars(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/projects/${projectID}/env-vars`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}

export interface EnvVarUpdateParams {
  projectId: string;
}

export interface EnvVarDeleteParams {
  projectId: string;
}

EnvVars.Value = Value;

export declare namespace EnvVars {
  export {
    type EnvVarUpdateParams as EnvVarUpdateParams,
    type EnvVarDeleteParams as EnvVarDeleteParams
  };

  export {
    Value as Value,
    type ValueGetValueParams as ValueGetValueParams
  };
}
