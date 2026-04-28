// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class BaseSubscribe extends APIResource {
  static override readonly _key: readonly ['status', 'subscribe'] = Object.freeze([
    'status',
    'subscribe',
  ] as const);

  /**
   * Subscribe to status updates
   */
  create(body: SubscribeCreateParams, options?: RequestOptions): APIPromise<SubscribeCreateResponse> {
    return this._client.post('/status/subscribe', { body, ...options });
  }
}
export class Subscribe extends BaseSubscribe {}

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
    type SubscribeCreateParams as SubscribeCreateParams,
  };
}
