// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as VerifyAPI from './verify';
import { Verify } from './verify';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Checkout extends APIResource {
  verify: VerifyAPI.Verify = new VerifyAPI.Verify(this._client);

  create(body: CheckoutCreateParams, options?: RequestOptions): APIPromise<CheckoutCreateResponse> {
    return this._client.post('/billing/checkout', { body, ...options });
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

Checkout.Verify = Verify;

export declare namespace Checkout {
  export {
    type CheckoutCreateResponse as CheckoutCreateResponse,
    type CheckoutCreateParams as CheckoutCreateParams
  };

  export {
    Verify as Verify
  };
}
