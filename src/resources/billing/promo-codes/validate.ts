// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class BaseValidate extends APIResource {
  static override readonly _key: readonly ['billing', 'promoCodes', 'validate'] = Object.freeze([
    'billing',
    'promoCodes',
    'validate',
  ] as const);

  create(body: ValidateCreateParams, options?: RequestOptions): APIPromise<ValidateCreateResponse> {
    return this._client.post('/billing/promo-codes/validate', { body, ...options });
  }
}
export class Validate extends BaseValidate {}

export interface ValidateCreateResponse {
  applicablePlans: Array<string> | null;

  code: string;

  discountType: string;

  discountValue: number;

  duration: string;

  durationMonths: number | null;

  expiresAt: string | (string & {}) | null;

  ok: true;
}

export interface ValidateCreateParams {
  code: string;

  plan?: 'starter' | 'pro' | 'agency' | 'studio_plus';
}

export declare namespace Validate {
  export {
    type ValidateCreateResponse as ValidateCreateResponse,
    type ValidateCreateParams as ValidateCreateParams,
  };
}
