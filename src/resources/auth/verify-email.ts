// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class VerifyEmail extends APIResource {
  /**
   * Confirm email address using a verification token
   */
  confirm(body: VerifyEmailConfirmParams, options?: RequestOptions): APIPromise<VerifyEmailConfirmResponse> {
    return this._client.post('/auth/verify-email/confirm', { body, ...options });
  }

  /**
   * Send a verification email to the current user's email address
   */
  send(options?: RequestOptions): APIPromise<VerifyEmailSendResponse> {
    return this._client.post('/auth/verify-email/send', options);
  }
}

export interface VerifyEmailConfirmResponse {
  message: string;

  ok: true;
}

export interface VerifyEmailSendResponse {
  message: string;

  ok: true;
}

export interface VerifyEmailConfirmParams {
  token: string;
}

export declare namespace VerifyEmail {
  export {
    type VerifyEmailConfirmResponse as VerifyEmailConfirmResponse,
    type VerifyEmailSendResponse as VerifyEmailSendResponse,
    type VerifyEmailConfirmParams as VerifyEmailConfirmParams,
  };
}
