// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class BaseLogin extends APIResource {
  static override readonly _key: readonly ['auth', 'login'] = Object.freeze(['auth', 'login'] as const)

  /**
   * Authenticate with email and password
   */
  create(body: LoginCreateParams, options?: RequestOptions): APIPromise<LoginCreateResponse> {
    return this._client.post('/auth/login', { body, ...options });
  }
}
export class Login extends BaseLogin {

}

export interface LoginCreateResponse {
  accessToken: string;

  expiresIn: number;

  ok: true;

  user: LoginCreateResponse.User;
}

export namespace LoginCreateResponse {
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

export interface LoginCreateParams {
  email: string;

  password: string;
}

export declare namespace Login {
  export {
    type LoginCreateResponse as LoginCreateResponse,
    type LoginCreateParams as LoginCreateParams
  };
}
