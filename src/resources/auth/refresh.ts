// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class BaseRefresh extends APIResource {
  static override readonly _key: readonly ['auth', 'refresh'] = Object.freeze(['auth', 'refresh'] as const)

  /**
   * Rotate the refresh token and issue a new access token
   */
  create(options?: RequestOptions): APIPromise<RefreshCreateResponse> {
    return this._client.post('/auth/refresh', options);
  }
}
export class Refresh extends BaseRefresh {

}

export interface RefreshCreateResponse {
  accessToken: string;

  expiresIn: number;

  ok: true;

  user: RefreshCreateResponse.User;
}

export namespace RefreshCreateResponse {
  export interface User {
    id: string;

    createdAt: (string & {}) | string;

    email: string;

    avatarUrl?: string | null;

    name?: string | null;

    phone?: string | null;

    timezone?: string | null;
  }
}

export declare namespace Refresh {
  export {
    type RefreshCreateResponse as RefreshCreateResponse
  };
}
