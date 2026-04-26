// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AddonsAPI from './addons';
import { Addons } from './addons';
import * as CheckoutAPI from './checkout';
import { Checkout, CheckoutCreateParams, CheckoutCreateResponse } from './checkout';
import * as CreditsAPI from './credits';
import { Credits } from './credits';
import * as EnterpriseAPI from './enterprise';
import { Enterprise, EnterpriseSubmitInquiryParams, EnterpriseSubmitInquiryResponse } from './enterprise';
import * as PromoCodesAPI from './promo-codes';
import { PromoCodeValidateParams, PromoCodeValidateResponse, PromoCodes } from './promo-codes';
import * as OrgAPI from './org/org';
import {
  Org,
  OrgCancelParams,
  OrgCancelResponse,
  OrgChangePlanParams,
  OrgChangePlanResponse,
} from './org/org';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Billing extends APIResource {
  checkout: CheckoutAPI.Checkout = new CheckoutAPI.Checkout(this._client);
  org: OrgAPI.Org = new OrgAPI.Org(this._client);
  credits: CreditsAPI.Credits = new CreditsAPI.Credits(this._client);
  enterprise: EnterpriseAPI.Enterprise = new EnterpriseAPI.Enterprise(this._client);
  promoCodes: PromoCodesAPI.PromoCodes = new PromoCodesAPI.PromoCodes(this._client);
  addons: AddonsAPI.Addons = new AddonsAPI.Addons(this._client);

  createPortal(
    body: BillingCreatePortalParams,
    options?: RequestOptions,
  ): APIPromise<BillingCreatePortalResponse> {
    return this._client.post('/billing/portal', { body, ...options });
  }

  handleWebhook(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/billing/webhook', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  listPlans(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/billing/plans', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  redeemPromo(
    body: BillingRedeemPromoParams,
    options?: RequestOptions,
  ): APIPromise<BillingRedeemPromoResponse> {
    return this._client.post('/billing/redeem-promo', { body, ...options });
  }
}

export interface BillingCreatePortalResponse {
  url: string | null;
}

export interface BillingRedeemPromoResponse {
  code: string;

  creditsAdded: number;

  ok: true;
}

export interface BillingCreatePortalParams {
  orgId: string;

  returnUrl?: string;
}

export interface BillingRedeemPromoParams {
  code: string;

  orgId: string;
}

Billing.Checkout = Checkout;
Billing.Org = Org;
Billing.Credits = Credits;
Billing.Enterprise = Enterprise;
Billing.PromoCodes = PromoCodes;
Billing.Addons = Addons;

export declare namespace Billing {
  export {
    type BillingCreatePortalResponse as BillingCreatePortalResponse,
    type BillingRedeemPromoResponse as BillingRedeemPromoResponse,
    type BillingCreatePortalParams as BillingCreatePortalParams,
    type BillingRedeemPromoParams as BillingRedeemPromoParams,
  };

  export {
    Checkout as Checkout,
    type CheckoutCreateResponse as CheckoutCreateResponse,
    type CheckoutCreateParams as CheckoutCreateParams,
  };

  export {
    Org as Org,
    type OrgCancelResponse as OrgCancelResponse,
    type OrgChangePlanResponse as OrgChangePlanResponse,
    type OrgCancelParams as OrgCancelParams,
    type OrgChangePlanParams as OrgChangePlanParams,
  };

  export { Credits as Credits };

  export {
    Enterprise as Enterprise,
    type EnterpriseSubmitInquiryResponse as EnterpriseSubmitInquiryResponse,
    type EnterpriseSubmitInquiryParams as EnterpriseSubmitInquiryParams,
  };

  export {
    PromoCodes as PromoCodes,
    type PromoCodeValidateResponse as PromoCodeValidateResponse,
    type PromoCodeValidateParams as PromoCodeValidateParams,
  };

  export { Addons as Addons };
}
