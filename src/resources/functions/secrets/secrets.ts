// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ProjectAPI from './project';
import { Project } from './project';
import * as ValueAPI from './value';
import { Value } from './value';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Secrets extends APIResource {
  project: ProjectAPI.Project = new ProjectAPI.Project(this._client);
  value: ValueAPI.Value = new ValueAPI.Value(this._client);

  create(body: SecretCreateParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/functions/secrets', { body, ...options });
  }

  update(secretID: string, body: SecretUpdateParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.put(path`/functions/secrets/${secretID}`, { body, ...options });
  }

  delete(secretID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/functions/secrets/${secretID}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}

export type SecretCreateResponse = unknown

export type SecretUpdateResponse = unknown

export interface SecretCreateParams {
  key: string;

  projectId: string;

  value: string;

  envId?: string;
}

export interface SecretUpdateParams {
  value: string;
}

Secrets.Project = Project;
Secrets.Value = Value;

export declare namespace Secrets {
  export {
    type SecretCreateResponse as SecretCreateResponse,
    type SecretUpdateResponse as SecretUpdateResponse,
    type SecretCreateParams as SecretCreateParams,
    type SecretUpdateParams as SecretUpdateParams
  };

  export {
    Project as Project
  };

  export {
    Value as Value
  };
}
