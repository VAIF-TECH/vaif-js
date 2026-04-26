// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Secrets extends APIResource {
  create(body: SecretCreateParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/functions/secrets', { body, ...options });
  }

  update(secretID: string, body: SecretUpdateParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.put(path`/functions/secrets/${secretID}`, { body, ...options });
  }

  delete(secretID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/functions/secrets/${secretID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  getValue(secretID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/functions/secrets/${secretID}/value`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  listByProject(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/functions/secrets/project/${projectID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type SecretCreateResponse = unknown;

export type SecretUpdateResponse = unknown;

export interface SecretCreateParams {
  key: string;

  projectId: string;

  value: string;

  envId?: string;
}

export interface SecretUpdateParams {
  value: string;
}

export declare namespace Secrets {
  export {
    type SecretCreateResponse as SecretCreateResponse,
    type SecretUpdateResponse as SecretUpdateResponse,
    type SecretCreateParams as SecretCreateParams,
    type SecretUpdateParams as SecretUpdateParams,
  };
}
