// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class ResetPassword extends APIResource {
  /**
   * Submit a new password using a reset token
   */
  create(body: ResetPasswordCreateParams, options?: RequestOptions): APIPromise<ResetPasswordCreateResponse> {
    return this._client.post('/auth/reset-password', { body, ...options });
  }
}

export interface ResetPasswordCreateResponse {
  message: string;

  ok: true;
}

export interface ResetPasswordCreateParams {
  token: string;

  password: string;
}

export declare namespace ResetPassword {
  export {
    type ResetPasswordCreateResponse as ResetPasswordCreateResponse,
    type ResetPasswordCreateParams as ResetPasswordCreateParams
  };
}
