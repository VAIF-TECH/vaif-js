// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Subscribe extends APIResource {
  /**
   * Subscribe to status updates
   */
  create(body: SubscribeCreateParams, options?: RequestOptions): APIPromise<SubscribeCreateResponse> {
    return this._client.post('/status/subscribe', { body, ...options });
  }
}

export interface SubscribeCreateResponse {
  message: string;

  ok: true;
}

export interface SubscribeCreateParams {
  email: string;
}

export declare namespace Subscribe {
  export {
    type SubscribeCreateResponse as SubscribeCreateResponse,
    type SubscribeCreateParams as SubscribeCreateParams
  };
}
