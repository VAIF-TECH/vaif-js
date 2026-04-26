// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Callback extends APIResource {
  /**
   * Approve a pending CLI auth session from the web app
   */
  create(body: CallbackCreateParams, options?: RequestOptions): APIPromise<CallbackCreateResponse> {
    return this._client.post('/auth/cli/callback', { body, ...options });
  }
}

export interface CallbackCreateResponse {
  ok: true;
}

export interface CallbackCreateParams {
  code: string;
}

export declare namespace Callback {
  export {
    type CallbackCreateResponse as CallbackCreateResponse,
    type CallbackCreateParams as CallbackCreateParams
  };
}
