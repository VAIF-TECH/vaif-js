// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class OAuth extends APIResource {
  /**
   * Handle OAuth redirect from provider — redirects to the app with a token or error
   */
  handleCallback(
    provider: 'google' | 'github' | 'microsoft' | 'apple',
    query: OAuthHandleCallbackParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get(path`/auth/oauth/${provider}/callback`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Initiate OAuth login or account-linking flow — redirects to provider
   */
  initiate(
    provider: 'google' | 'github' | 'microsoft' | 'apple',
    query: OAuthInitiateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get(path`/auth/oauth/${provider}`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * List enabled OAuth providers available for login or account linking
   */
  listProviders(options?: RequestOptions): APIPromise<OAuthListProvidersResponse> {
    return this._client.get('/auth/oauth/providers', options);
  }
}

export interface OAuthListProvidersResponse {
  providers: Array<OAuthListProvidersResponse.Provider>;
}

export namespace OAuthListProvidersResponse {
  export interface Provider {
    name: string;

    provider: string;

    allowLinking?: boolean | null;

    allowSignup?: boolean | null;
  }
}

export interface OAuthHandleCallbackParams {
  code?: string;

  error?: string;

  error_description?: string;

  state?: string;
}

export interface OAuthInitiateParams {
  mode?: 'login' | 'link';

  redirect?: string;
}

export declare namespace OAuth {
  export {
    type OAuthListProvidersResponse as OAuthListProvidersResponse,
    type OAuthHandleCallbackParams as OAuthHandleCallbackParams,
    type OAuthInitiateParams as OAuthInitiateParams,
  };
}
