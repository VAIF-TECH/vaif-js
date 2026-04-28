// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class BaseConfirm extends APIResource {
  static override readonly _key: readonly ['auth', 'verifyEmail', 'confirm'] = Object.freeze([
    'auth',
    'verifyEmail',
    'confirm',
  ] as const);

  /**
   * Confirm email address using a verification token
   */
  create(body: ConfirmCreateParams, options?: RequestOptions): APIPromise<ConfirmCreateResponse> {
    return this._client.post('/auth/verify-email/confirm', { body, ...options });
  }
}
export class Confirm extends BaseConfirm {}

export interface ConfirmCreateResponse {
  message: string;

  ok: true;
}

export interface ConfirmCreateParams {
  token: string;
}

export declare namespace Confirm {
  export {
    type ConfirmCreateResponse as ConfirmCreateResponse,
    type ConfirmCreateParams as ConfirmCreateParams,
  };
}
