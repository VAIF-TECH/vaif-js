// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Login extends APIResource {
  /**
   * Authenticate CLI with email and password (fallback flow)
   */
  create(body: LoginCreateParams, options?: RequestOptions): APIPromise<LoginCreateResponse> {
    return this._client.post('/auth/cli/login', { body, ...options });
  }
}

export interface LoginCreateResponse {
  accessToken: string;

  expiresIn: number;

  ok: true;

  refreshToken: string;

  user: LoginCreateResponse.User;
}

export namespace LoginCreateResponse {
  export interface User {
    id: string;

    email: string;

    name?: string | null;
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
