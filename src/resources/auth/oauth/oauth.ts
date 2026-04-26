// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CallbackAPI from './callback';
import { Callback, CallbackGetCallbackParams } from './callback';
import * as ProvidersAPI from './providers';
import { ProviderListResponse, Providers } from './providers';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class OAuth extends APIResource {
  callback: CallbackAPI.Callback = new CallbackAPI.Callback(this._client);
  providers: ProvidersAPI.Providers = new ProvidersAPI.Providers(this._client);

  /**
   * Initiate OAuth login or account-linking flow — redirects to provider
   */
  retrieve(provider: 'google' | 'github' | 'microsoft' | 'apple', query: OAuthRetrieveParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/auth/oauth/${provider}`, { query, ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}

export interface OAuthRetrieveParams {
  mode?: 'login' | 'link';

  redirect?: string;
}

OAuth.Callback = Callback;
OAuth.Providers = Providers;

export declare namespace OAuth {
  export {
    type OAuthRetrieveParams as OAuthRetrieveParams
  };

  export {
    Callback as Callback,
    type CallbackGetCallbackParams as CallbackGetCallbackParams
  };

  export {
    Providers as Providers,
    type ProviderListResponse as ProviderListResponse
  };
}
