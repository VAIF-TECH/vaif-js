// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CallbackAPI from './callback';
import { BaseCallback, Callback, CallbackGetCallbackParams } from './callback';
import * as ProvidersAPI from './providers';
import { BaseProviders, ProviderListResponse, Providers } from './providers';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseOAuth extends APIResource {
  static override readonly _key: readonly ['auth', 'oauth'] = Object.freeze(['auth', 'oauth'] as const);

  /**
   * Initiate OAuth login or account-linking flow — redirects to provider
   */
  retrieve(
    provider: 'google' | 'github' | 'microsoft' | 'apple',
    query: OAuthRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get(path`/auth/oauth/${provider}`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
export class OAuth extends BaseOAuth {
  callback: CallbackAPI.Callback = new CallbackAPI.Callback(this._client);
  providers: ProvidersAPI.Providers = new ProvidersAPI.Providers(this._client);
}

export interface OAuthRetrieveParams {
  mode?: 'login' | 'link';

  redirect?: string;
}

OAuth.Callback = Callback;
OAuth.BaseCallback = BaseCallback;
OAuth.Providers = Providers;
OAuth.BaseProviders = BaseProviders;

export declare namespace OAuth {
  export { type OAuthRetrieveParams as OAuthRetrieveParams };

  export {
    Callback as Callback,
    BaseCallback as BaseCallback,
    type CallbackGetCallbackParams as CallbackGetCallbackParams,
  };

  export {
    Providers as Providers,
    BaseProviders as BaseProviders,
    type ProviderListResponse as ProviderListResponse,
  };
}
