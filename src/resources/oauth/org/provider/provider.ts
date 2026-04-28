// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as AuthorizeAPI from './authorize';
import {
  Authorize,
  AuthorizeGetAuthorizeParams,
  AuthorizeGetAuthorizeResponse,
  BaseAuthorize,
} from './authorize';
import * as RefreshAPI from './refresh';
import { BaseRefresh, Refresh, RefreshRefreshParams, RefreshRefreshResponse } from './refresh';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BaseProvider extends APIResource {
  static override readonly _key: readonly ['oauth', 'org', 'provider'] = Object.freeze([
    'oauth',
    'org',
    'provider',
  ] as const);

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
}
export class Provider extends BaseProvider {
  authorize: AuthorizeAPI.Authorize = new AuthorizeAPI.Authorize(this._client);
  refresh: RefreshAPI.Refresh = new RefreshAPI.Refresh(this._client);
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

Provider.Authorize = Authorize;
Provider.BaseAuthorize = BaseAuthorize;
Provider.Refresh = Refresh;
Provider.BaseRefresh = BaseRefresh;

export declare namespace Provider {
  export {
    type ProviderUpdateResponse as ProviderUpdateResponse,
    type ProviderDeleteResponse as ProviderDeleteResponse,
    type ProviderUpdateParams as ProviderUpdateParams,
    type ProviderDeleteParams as ProviderDeleteParams,
  };

  export {
    Authorize as Authorize,
    BaseAuthorize as BaseAuthorize,
    type AuthorizeGetAuthorizeResponse as AuthorizeGetAuthorizeResponse,
    type AuthorizeGetAuthorizeParams as AuthorizeGetAuthorizeParams,
  };

  export {
    Refresh as Refresh,
    BaseRefresh as BaseRefresh,
    type RefreshRefreshResponse as RefreshRefreshResponse,
    type RefreshRefreshParams as RefreshRefreshParams,
  };
}
