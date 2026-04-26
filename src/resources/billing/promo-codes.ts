// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class PromoCodes extends APIResource {
  validate(body: PromoCodeValidateParams, options?: RequestOptions): APIPromise<PromoCodeValidateResponse> {
    return this._client.post('/billing/promo-codes/validate', { body, ...options });
  }
}

export interface PromoCodeValidateResponse {
  applicablePlans: Array<string> | null;

  code: string;

  discountType: string;

  discountValue: number;

  duration: string;

  durationMonths: number | null;

  expiresAt: string | (string & {}) | null;

  ok: true;
}

export interface PromoCodeValidateParams {
  code: string;

  plan?: 'starter' | 'pro' | 'agency' | 'studio_plus';
}

export declare namespace PromoCodes {
  export {
    type PromoCodeValidateResponse as PromoCodeValidateResponse,
    type PromoCodeValidateParams as PromoCodeValidateParams,
  };
}
