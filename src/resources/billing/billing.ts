// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as PlansAPI from './plans';
import { Plans } from './plans';
import * as PortalAPI from './portal';
import { Portal, PortalCreateParams, PortalCreateResponse } from './portal';
import * as RedeemPromoAPI from './redeem-promo';
import { RedeemPromo, RedeemPromoCreateParams, RedeemPromoCreateResponse } from './redeem-promo';
import * as WebhookAPI from './webhook';
import { Webhook } from './webhook';
import * as AddonsAPI from './addons/addons';
import { Addons } from './addons/addons';
import * as CheckoutAPI from './checkout/checkout';
import { Checkout, CheckoutCreateParams, CheckoutCreateResponse } from './checkout/checkout';
import * as CreditsAPI from './credits/credits';
import { Credits } from './credits/credits';
import * as EnterpriseAPI from './enterprise/enterprise';
import { Enterprise } from './enterprise/enterprise';
import * as OrgAPI from './org/org';
import { Org } from './org/org';
import * as PromoCodesAPI from './promo-codes/promo-codes';
import { PromoCodes } from './promo-codes/promo-codes';

export class Billing extends APIResource {
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
Billing.Checkout = Checkout;
Billing.Credits = Credits;
Billing.Enterprise = Enterprise;
Billing.Org = Org;
Billing.Plans = Plans;
Billing.Portal = Portal;
Billing.PromoCodes = PromoCodes;
Billing.RedeemPromo = RedeemPromo;
Billing.Webhook = Webhook;

export declare namespace Billing {
  export {
    Addons as Addons
  };

  export {
    Checkout as Checkout,
    type CheckoutCreateResponse as CheckoutCreateResponse,
    type CheckoutCreateParams as CheckoutCreateParams
  };

  export {
    Credits as Credits
  };

  export {
    Enterprise as Enterprise
  };

  export {
    Org as Org
  };

  export {
    Plans as Plans
  };

  export {
    Portal as Portal,
    type PortalCreateResponse as PortalCreateResponse,
    type PortalCreateParams as PortalCreateParams
  };

  export {
    PromoCodes as PromoCodes
  };

  export {
    RedeemPromo as RedeemPromo,
    type RedeemPromoCreateResponse as RedeemPromoCreateResponse,
    type RedeemPromoCreateParams as RedeemPromoCreateParams
  };

  export {
    Webhook as Webhook
  };
}
