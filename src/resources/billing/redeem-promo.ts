// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class BaseRedeemPromo extends APIResource {
  static override readonly _key: readonly ['billing', 'redeemPromo'] = Object.freeze(['billing', 'redeemPromo'] as const)

  create(body: RedeemPromoCreateParams, options?: RequestOptions): APIPromise<RedeemPromoCreateResponse> {
    return this._client.post('/billing/redeem-promo', { body, ...options });
  }
}
export class RedeemPromo extends BaseRedeemPromo {

}

export interface RedeemPromoCreateResponse {
  code: string;

  creditsAdded: number;

  ok: true;
}

export interface RedeemPromoCreateParams {
  code: string;

  orgId: string;
}

export declare namespace RedeemPromo {
  export {
    type RedeemPromoCreateResponse as RedeemPromoCreateResponse,
    type RedeemPromoCreateParams as RedeemPromoCreateParams
  };
}
