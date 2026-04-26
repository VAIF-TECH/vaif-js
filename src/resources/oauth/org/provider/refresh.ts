// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Refresh extends APIResource {
  /**
   * Refresh an OAuth token
   */
  refresh(provider: string, params: RefreshRefreshParams, options?: RequestOptions): APIPromise<RefreshRefreshResponse> {
    const { orgId } = params
    return this._client.post(path`/oauth/org/${orgId}/provider/${provider}/refresh`, options);
  }
}

export interface RefreshRefreshResponse {
  ok: true;

  tokens: RefreshRefreshResponse.Tokens;
}

export namespace RefreshRefreshResponse {
  export interface Tokens {
    accessToken?: string | null;

    expiresIn?: number | null;

    refreshToken?: string | null;

    scope?: string | null;

    tokenType?: string | null;
  }
}

export interface RefreshRefreshParams {
  orgId: string;
}

export declare namespace Refresh {
  export {
    type RefreshRefreshResponse as RefreshRefreshResponse,
    type RefreshRefreshParams as RefreshRefreshParams
  };
}
