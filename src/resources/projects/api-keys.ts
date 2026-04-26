// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class APIKeys extends APIResource {
  create(
    projectID: string,
    body: APIKeyCreateParams,
    options?: RequestOptions,
  ): APIPromise<APIKeyCreateResponse> {
    return this._client.post(path`/projects/${projectID}/api-keys`, { body, ...options });
  }

  update(
    keyID: string,
    params: APIKeyUpdateParams,
    options?: RequestOptions,
  ): APIPromise<APIKeyUpdateResponse> {
    const { projectId, ...body } = params;
    return this._client.patch(path`/projects/${projectId}/api-keys/${keyID}`, { body, ...options });
  }

  list(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/projects/${projectID}/api-keys`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  revoke(keyID: string, params: APIKeyRevokeParams, options?: RequestOptions): APIPromise<void> {
    const { projectId } = params;
    return this._client.post(path`/projects/${projectId}/api-keys/${keyID}/revoke`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  rotate(keyID: string, params: APIKeyRotateParams, options?: RequestOptions): APIPromise<void> {
    const { projectId } = params;
    return this._client.post(path`/projects/${projectId}/api-keys/${keyID}/rotate`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface APIKeyCreateResponse {
  apiKey: string;

  apiKeyId: string;
}

export interface APIKeyUpdateResponse {
  apiKey: APIKeyUpdateResponse.APIKey;

  ok: true;
}

export namespace APIKeyUpdateResponse {
  export interface APIKey {
    id: string;

    createdAt: string | (string & {});

    expiresAt: string | (string & {}) | null;

    lastUsedAt: string | (string & {}) | null;

    name: string | null;

    scopes?: unknown;

    [k: string]: unknown;
  }
}

export interface APIKeyCreateParams {
  envId?: string;

  expiresAt?: string;

  name?: string;

  scopes?: Array<'crud' | 'realtime' | 'functions' | 'storage'>;
}

export interface APIKeyUpdateParams {
  /**
   * Path param
   */
  projectId: string;

  /**
   * Body param
   */
  expiresAt?: string | null;

  /**
   * Body param
   */
  name?: string;

  /**
   * Body param
   */
  scopes?: Array<'crud' | 'realtime' | 'functions' | 'storage' | 'mongodb'>;
}

export interface APIKeyRevokeParams {
  projectId: string;
}

export interface APIKeyRotateParams {
  projectId: string;
}

export declare namespace APIKeys {
  export {
    type APIKeyCreateResponse as APIKeyCreateResponse,
    type APIKeyUpdateResponse as APIKeyUpdateResponse,
    type APIKeyCreateParams as APIKeyCreateParams,
    type APIKeyUpdateParams as APIKeyUpdateParams,
    type APIKeyRevokeParams as APIKeyRevokeParams,
    type APIKeyRotateParams as APIKeyRotateParams,
  };
}
