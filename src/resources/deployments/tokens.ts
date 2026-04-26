// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Tokens extends APIResource {
  /**
   * Create a deployment token
   */
  create(body: TokenCreateParams, options?: RequestOptions): APIPromise<TokenCreateResponse> {
    return this._client.post('/deployments/tokens', { body, ...options });
  }

  /**
   * List deployment tokens for a project
   */
  listByProject(projectID: string, options?: RequestOptions): APIPromise<TokenListByProjectResponse> {
    return this._client.get(path`/deployments/tokens/project/${projectID}`, options);
  }

  /**
   * Revoke a deployment token
   */
  revoke(tokenID: string, options?: RequestOptions): APIPromise<TokenRevokeResponse> {
    return this._client.post(path`/deployments/tokens/${tokenID}/revoke`, options);
  }
}

export interface TokenCreateResponse {
  id: string;

  token: string;

  ok: true;
}

export interface TokenListByProjectResponse {
  tokens: Array<TokenListByProjectResponse.Token>;
}

export namespace TokenListByProjectResponse {
  export interface Token {
    id: string;

    createdAt: string | (string & {});

    envId: string;

    revokedAt: string | (string & {}) | null;
  }
}

export interface TokenRevokeResponse {
  ok: true;
}

export interface TokenCreateParams {
  envId: string;

  projectId: string;
}

export declare namespace Tokens {
  export {
    type TokenCreateResponse as TokenCreateResponse,
    type TokenListByProjectResponse as TokenListByProjectResponse,
    type TokenRevokeResponse as TokenRevokeResponse,
    type TokenCreateParams as TokenCreateParams,
  };
}
