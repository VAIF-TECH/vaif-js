// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class BaseForgotPassword extends APIResource {
  static override readonly _key: readonly ['auth', 'forgotPassword'] = Object.freeze(['auth', 'forgotPassword'] as const)

  /**
   * Request a password reset email
   */
  create(body: ForgotPasswordCreateParams, options?: RequestOptions): APIPromise<ForgotPasswordCreateResponse> {
    return this._client.post('/auth/forgot-password', { body, ...options });
  }
}
export class ForgotPassword extends BaseForgotPassword {

}

export interface ForgotPasswordCreateResponse {
  message: string;

  ok: true;
}

export interface ForgotPasswordCreateParams {
  email: string;
}

export declare namespace ForgotPassword {
  export {
    type ForgotPasswordCreateResponse as ForgotPasswordCreateResponse,
    type ForgotPasswordCreateParams as ForgotPasswordCreateParams
  };
}
