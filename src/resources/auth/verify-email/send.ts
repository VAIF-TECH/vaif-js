// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class BaseSend extends APIResource {
  static override readonly _key: readonly ['auth', 'verifyEmail', 'send'] = Object.freeze(['auth', 'verifyEmail', 'send'] as const)

  /**
   * Send a verification email to the current user's email address
   */
  create(options?: RequestOptions): APIPromise<SendCreateResponse> {
    return this._client.post('/auth/verify-email/send', options);
  }
}
export class Send extends BaseSend {

}

export interface SendCreateResponse {
  message: string;

  ok: true;
}

export declare namespace Send {
  export {
    type SendCreateResponse as SendCreateResponse
  };
}
