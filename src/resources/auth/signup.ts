// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Signup extends APIResource {
  /**
   * Register a new user account
   */
  create(body: SignupCreateParams, options?: RequestOptions): APIPromise<SignupCreateResponse> {
    return this._client.post('/auth/signup', { body, ...options });
  }
}

export interface SignupCreateResponse {
  accessToken: string;

  expiresIn: number;

  ok: true;

  user: SignupCreateResponse.User;
}

export namespace SignupCreateResponse {
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

export interface SignupCreateParams {
  email: string;

  password: string;

  name?: string;
}

export declare namespace Signup {
  export {
    type SignupCreateResponse as SignupCreateResponse,
    type SignupCreateParams as SignupCreateParams
  };
}
