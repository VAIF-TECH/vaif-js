// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as PlansAPI from './plans';
import { BasePlans, Plans } from './plans';
import * as PortalAPI from './portal';
import { BasePortal, Portal, PortalCreateParams, PortalCreateResponse } from './portal';
import * as RedeemPromoAPI from './redeem-promo';
import { BaseRedeemPromo, RedeemPromo, RedeemPromoCreateParams, RedeemPromoCreateResponse } from './redeem-promo';
import * as WebhookAPI from './webhook';
import { BaseWebhook, Webhook } from './webhook';
import * as AddonsAPI from './addons/addons';
import { Addons, BaseAddons } from './addons/addons';
import * as CheckoutAPI from './checkout/checkout';
import { BaseCheckout, Checkout, CheckoutCreateParams, CheckoutCreateResponse } from './checkout/checkout';
import * as CreditsAPI from './credits/credits';
import { BaseCredits, Credits } from './credits/credits';
import * as EnterpriseAPI from './enterprise/enterprise';
import { BaseEnterprise, Enterprise } from './enterprise/enterprise';
import * as OrgAPI from './org/org';
import { BaseOrg, Org } from './org/org';
import * as PromoCodesAPI from './promo-codes/promo-codes';
import { BasePromoCodes, PromoCodes } from './promo-codes/promo-codes';

export class BaseBilling extends APIResource {
  static override readonly _key: readonly ['billing'] = Object.freeze(['billing'] as const)

}
export class Billing extends BaseBilling {
  addons: AddonsAPI.Addons = new AddonsAPI.Addons(this._client);
  checkout: CheckoutAPI.Checkout = new CheckoutAPI.Checkout(this._client);
  credits: CreditsAPI.Credits = new CreditsAPI.Credits(this._client);
  enterprise: EnterpriseAPI.Enterprise = new EnterpriseAPI.Enterprise(this._client);
  org: OrgAPI.Org = new OrgAPI.Org(this._client);
  plans: PlansAPI.Plans = new PlansAPI.Plans(this._client);
  portal: PortalAPI.Portal = new PortalAPI.Portal(this._client);
  promoCodes: PromoCodesAPI.PromoCodes = new PromoCodesAPI.PromoCodes(this._client);
  redeemPromo: RedeemPromoAPI.RedeemPromo = new RedeemPromoAPI.RedeemPromo(this._client);
  webhook: WebhookAPI.Webhook = new WebhookAPI.Webhook(this._client);
}

Billing.Addons = Addons;
Billing.BaseAddons = BaseAddons;
Billing.Checkout = Checkout;
Billing.BaseCheckout = BaseCheckout;
Billing.Credits = Credits;
Billing.BaseCredits = BaseCredits;
Billing.Enterprise = Enterprise;
Billing.BaseEnterprise = BaseEnterprise;
Billing.Org = Org;
Billing.BaseOrg = BaseOrg;
Billing.Plans = Plans;
Billing.BasePlans = BasePlans;
Billing.Portal = Portal;
Billing.BasePortal = BasePortal;
Billing.PromoCodes = PromoCodes;
Billing.BasePromoCodes = BasePromoCodes;
Billing.RedeemPromo = RedeemPromo;
Billing.BaseRedeemPromo = BaseRedeemPromo;
Billing.Webhook = Webhook;
Billing.BaseWebhook = BaseWebhook;

export declare namespace Billing {
  export {
    Addons as Addons,
    BaseAddons as BaseAddons
  };

  export {
    Checkout as Checkout,
    BaseCheckout as BaseCheckout,
    type CheckoutCreateResponse as CheckoutCreateResponse,
    type CheckoutCreateParams as CheckoutCreateParams
  };

  export {
    Credits as Credits,
    BaseCredits as BaseCredits
  };

  export {
    Enterprise as Enterprise,
    BaseEnterprise as BaseEnterprise
  };

  export {
    Org as Org,
    BaseOrg as BaseOrg
  };

  export {
    Plans as Plans,
    BasePlans as BasePlans
  };

  export {
    Portal as Portal,
    BasePortal as BasePortal,
    type PortalCreateResponse as PortalCreateResponse,
    type PortalCreateParams as PortalCreateParams
  };

  export {
    PromoCodes as PromoCodes,
    BasePromoCodes as BasePromoCodes
  };

  export {
    RedeemPromo as RedeemPromo,
    BaseRedeemPromo as BaseRedeemPromo,
    type RedeemPromoCreateResponse as RedeemPromoCreateResponse,
    type RedeemPromoCreateParams as RedeemPromoCreateParams
  };

  export {
    Webhook as Webhook,
    BaseWebhook as BaseWebhook
  };
}
