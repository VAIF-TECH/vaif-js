// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Checkout extends APIResource {
  create(body: CheckoutCreateParams, options?: RequestOptions): APIPromise<CheckoutCreateResponse> {
    return this._client.post('/billing/checkout', { body, ...options });
  }

  verify(sessionID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/billing/checkout/verify/${sessionID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface CheckoutCreateResponse {
  url: string | null;
}

export interface CheckoutCreateParams {
  orgId: string;

  plan: 'starter' | 'pro' | 'agency' | 'studio_plus';

  cancelUrl?: string;

  interval?: 'monthly' | 'yearly';

  promoCode?: string;

  successUrl?: string;
}

export declare namespace Checkout {
  export {
    type CheckoutCreateResponse as CheckoutCreateResponse,
    type CheckoutCreateParams as CheckoutCreateParams,
  };
}
