// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Providers extends APIResource {
  /**
   * List enabled OAuth providers available for login or account linking
   */
  list(options?: RequestOptions): APIPromise<ProviderListResponse> {
    return this._client.get('/auth/oauth/providers', options);
  }
}

export interface ProviderListResponse {
  providers: Array<ProviderListResponse.Provider>;
}

export namespace ProviderListResponse {
  export interface Provider {
    name: string;

    provider: string;

    allowLinking?: boolean | null;

    allowSignup?: boolean | null;
  }
}

export declare namespace Providers {
  export {
    type ProviderListResponse as ProviderListResponse
  };
}
