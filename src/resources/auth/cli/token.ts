// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class BaseToken extends APIResource {
  static override readonly _key: readonly ['auth', 'cli', 'token'] = Object.freeze(['auth', 'cli', 'token'] as const)

  /**
   * Poll for CLI auth token after browser approval
   */
  create(body: TokenCreateParams, options?: RequestOptions): APIPromise<TokenCreateResponse> {
    return this._client.post('/auth/cli/token', { body, ...options });
  }
}
export class Token extends BaseToken {

}

export type TokenCreateResponse = TokenCreateResponse.UnionMember0 | TokenCreateResponse.UnionMember1

export namespace TokenCreateResponse {
  export interface UnionMember0 {
    ok: false;

    status: 'pending';
  }

  export interface UnionMember1 {
    accessToken: string;

    expiresIn: number;

    ok: true;

    user: UnionMember1.User;
  }

  export namespace UnionMember1 {
    export interface User {
      id: string;

      email: string;

      name?: string | null;
    }
  }
}

export interface TokenCreateParams {
  code: string;
}

export declare namespace Token {
  export {
    type TokenCreateResponse as TokenCreateResponse,
    type TokenCreateParams as TokenCreateParams
  };
}
