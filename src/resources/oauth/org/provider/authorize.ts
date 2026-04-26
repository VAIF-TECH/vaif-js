// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BaseAuthorize extends APIResource {
  static override readonly _key: readonly ['oauth', 'org', 'provider', 'authorize'] = Object.freeze(['oauth', 'org', 'provider', 'authorize'] as const)

  /**
   * Generate OAuth authorization URL
   */
  getAuthorize(provider: string, params: AuthorizeGetAuthorizeParams, options?: RequestOptions): APIPromise<AuthorizeGetAuthorizeResponse> {
    const { orgId } = params
    return this._client.get(path`/oauth/org/${orgId}/provider/${provider}/authorize`, options);
  }
}
export class Authorize extends BaseAuthorize {

}

export interface AuthorizeGetAuthorizeResponse {
  authorizationUrl: string;

  expiresIn: number;

  state: string;
}

export interface AuthorizeGetAuthorizeParams {
  orgId: string;
}

export declare namespace Authorize {
  export {
    type AuthorizeGetAuthorizeResponse as AuthorizeGetAuthorizeResponse,
    type AuthorizeGetAuthorizeParams as AuthorizeGetAuthorizeParams
  };
}
