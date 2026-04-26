// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as RevokeAPI from './revoke';
import { BaseRevoke, Revoke, RevokeRevokeParams } from './revoke';
import * as RotateAPI from './rotate';
import { BaseRotate, Rotate, RotateRotateParams } from './rotate';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseAPIKeys extends APIResource {
  static override readonly _key: readonly ['projects', 'apiKeys'] = Object.freeze(['projects', 'apiKeys'] as const)

  update(keyID: string, params: APIKeyUpdateParams, options?: RequestOptions): APIPromise<APIKeyUpdateResponse> {
    const { projectId, ...body } = params
    return this._client.patch(path`/projects/${projectId}/api-keys/${keyID}`, { body, ...options });
  }

  apiKeys(projectID: string, body: APIKeyAPIKeysParams, options?: RequestOptions): APIPromise<APIKeyAPIKeysResponse> {
    return this._client.post(path`/projects/${projectID}/api-keys`, { body, ...options });
  }

  getAPIKeys(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/projects/${projectID}/api-keys`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}
export class APIKeys extends BaseAPIKeys {
  revoke: RevokeAPI.Revoke = new RevokeAPI.Revoke(this._client);
  rotate: RotateAPI.Rotate = new RotateAPI.Rotate(this._client);
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

  [k: string]: unknown
  }
}

export interface APIKeyAPIKeysResponse {
  apiKey: string;

  apiKeyId: string;
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

export interface APIKeyAPIKeysParams {
  envId?: string;

  expiresAt?: string;

  name?: string;

  scopes?: Array<'crud' | 'realtime' | 'functions' | 'storage'>;
}

APIKeys.Revoke = Revoke;
APIKeys.BaseRevoke = BaseRevoke;
APIKeys.Rotate = Rotate;
APIKeys.BaseRotate = BaseRotate;

export declare namespace APIKeys {
  export {
    type APIKeyUpdateResponse as APIKeyUpdateResponse,
    type APIKeyAPIKeysResponse as APIKeyAPIKeysResponse,
    type APIKeyUpdateParams as APIKeyUpdateParams,
    type APIKeyAPIKeysParams as APIKeyAPIKeysParams
  };

  export {
    Revoke as Revoke,
    BaseRevoke as BaseRevoke,
    type RevokeRevokeParams as RevokeRevokeParams
  };

  export {
    Rotate as Rotate,
    BaseRotate as BaseRotate,
    type RotateRotateParams as RotateRotateParams
  };
}
