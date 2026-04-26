// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Provider extends APIResource {
  /**
   * Update OAuth provider configuration
   */
  update(
    provider: string,
    params: ProviderUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ProviderUpdateResponse> {
    const { orgId, ...body } = params;
    return this._client.patch(path`/oauth/org/${orgId}/provider/${provider}`, { body, ...options });
  }

  /**
   * Delete OAuth provider configuration
   */
  delete(
    provider: string,
    params: ProviderDeleteParams,
    options?: RequestOptions,
  ): APIPromise<ProviderDeleteResponse> {
    const { orgId } = params;
    return this._client.delete(path`/oauth/org/${orgId}/provider/${provider}`, options);
  }

  /**
   * Generate OAuth authorization URL
   */
  authorize(
    provider: string,
    params: ProviderAuthorizeParams,
    options?: RequestOptions,
  ): APIPromise<ProviderAuthorizeResponse> {
    const { orgId } = params;
    return this._client.get(path`/oauth/org/${orgId}/provider/${provider}/authorize`, options);
  }

  /**
   * Refresh an OAuth token
   */
  refresh(
    provider: string,
    params: ProviderRefreshParams,
    options?: RequestOptions,
  ): APIPromise<ProviderRefreshResponse> {
    const { orgId } = params;
    return this._client.post(path`/oauth/org/${orgId}/provider/${provider}/refresh`, options);
  }
}

export interface ProviderUpdateResponse {
  connection: ProviderUpdateResponse.Connection;

  ok: true;
}

export namespace ProviderUpdateResponse {
  export interface Connection {
    id: string;

    clientId: string;

    enabled: boolean;

    provider: string;

    redirectUri: string;
  }
}

export interface ProviderDeleteResponse {
  ok: true;
}

export interface ProviderAuthorizeResponse {
  authorizationUrl: string;

  expiresIn: number;

  state: string;
}

export interface ProviderRefreshResponse {
  ok: true;

  tokens: ProviderRefreshResponse.Tokens;
}

export namespace ProviderRefreshResponse {
  export interface Tokens {
    accessToken?: string | null;

    expiresIn?: number | null;

    refreshToken?: string | null;

    scope?: string | null;

    tokenType?: string | null;
  }
}

export interface ProviderUpdateParams {
  /**
   * Path param
   */
  orgId: string;

  /**
   * Body param
   */
  clientId?: string;

  /**
   * Body param
   */
  clientSecret?: string;

  /**
   * Body param
   */
  enabled?: boolean;

  /**
   * Body param
   */
  redirectUri?: string;
}

export interface ProviderDeleteParams {
  orgId: string;
}

export interface ProviderAuthorizeParams {
  orgId: string;
}

export interface ProviderRefreshParams {
  orgId: string;
}

export declare namespace Provider {
  export {
    type ProviderUpdateResponse as ProviderUpdateResponse,
    type ProviderDeleteResponse as ProviderDeleteResponse,
    type ProviderAuthorizeResponse as ProviderAuthorizeResponse,
    type ProviderRefreshResponse as ProviderRefreshResponse,
    type ProviderUpdateParams as ProviderUpdateParams,
    type ProviderDeleteParams as ProviderDeleteParams,
    type ProviderAuthorizeParams as ProviderAuthorizeParams,
    type ProviderRefreshParams as ProviderRefreshParams,
  };
}
