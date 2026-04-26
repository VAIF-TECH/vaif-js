// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AddonsAPI from './addons';
import { AddonDeleteParams, AddonUpdateParams, Addons } from './addons';
import * as ContactsAPI from './contacts';
import { ContactCreateParams, ContactCreateResponse, ContactDeleteParams, Contacts } from './contacts';
import * as CreditsAPI from './credits';
import { CreditPurchaseParams, CreditPurchaseResponse, Credits } from './credits';
import * as InvoicesAPI from './invoices';
import { InvoiceRetrievePdfParams, Invoices } from './invoices';
import * as OveragesAPI from './overages';
import { Overages } from './overages';
import * as TaxInfoAPI from './tax-info';
import { TaxInfo, TaxInfoUpdateParams, TaxInfoUpdateResponse } from './tax-info';
import * as UsageAPI from './usage';
import { Usage } from './usage';
import * as UsageAlertsAPI from './usage-alerts';
import {
  UsageAlertCreateParams,
  UsageAlertCreateResponse,
  UsageAlertDeleteParams,
  UsageAlertUpdateParams,
  UsageAlertUpdateResponse,
  UsageAlerts,
} from './usage-alerts';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Org extends APIResource {
  usageAlerts: UsageAlertsAPI.UsageAlerts = new UsageAlertsAPI.UsageAlerts(this._client);
  overages: OveragesAPI.Overages = new OveragesAPI.Overages(this._client);
  taxInfo: TaxInfoAPI.TaxInfo = new TaxInfoAPI.TaxInfo(this._client);
  invoices: InvoicesAPI.Invoices = new InvoicesAPI.Invoices(this._client);
  usage: UsageAPI.Usage = new UsageAPI.Usage(this._client);
  credits: CreditsAPI.Credits = new CreditsAPI.Credits(this._client);
  contacts: ContactsAPI.Contacts = new ContactsAPI.Contacts(this._client);
  addons: AddonsAPI.Addons = new AddonsAPI.Addons(this._client);

  cancel(orgID: string, body: OrgCancelParams, options?: RequestOptions): APIPromise<OrgCancelResponse> {
    return this._client.post(path`/billing/org/${orgID}/cancel`, { body, ...options });
  }

  changePlan(
    orgID: string,
    body: OrgChangePlanParams,
    options?: RequestOptions,
  ): APIPromise<OrgChangePlanResponse> {
    return this._client.post(path`/billing/org/${orgID}/change-plan`, { body, ...options });
  }

  createPortal(orgID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/billing/org/${orgID}/portal`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  pause(orgID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/billing/org/${orgID}/pause`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  reactivate(orgID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/billing/org/${orgID}/reactivate`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  resume(orgID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/billing/org/${orgID}/resume`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  retrieveCostBreakdown(orgID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/billing/org/${orgID}/cost-breakdown`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  retrieveSummary(orgID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/billing/org/${orgID}/summary`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface OrgCancelResponse {
  cancelAtPeriodEnd: boolean;

  currentPeriodEnd: string | (string & {});

  ok: true;
}

export interface OrgChangePlanResponse {
  effectiveDate: string | (string & {});

  newInterval: string;

  newPlan: string;

  ok: true;
}

export interface OrgCancelParams {
  cancelImmediately?: boolean;
}

export interface OrgChangePlanParams {
  plan: 'starter' | 'pro' | 'agency' | 'studio_plus';

  interval?: 'monthly' | 'yearly';
}

Org.UsageAlerts = UsageAlerts;
Org.Overages = Overages;
Org.TaxInfo = TaxInfo;
Org.Invoices = Invoices;
Org.Usage = Usage;
Org.Credits = Credits;
Org.Contacts = Contacts;
Org.Addons = Addons;

export declare namespace Org {
  export {
    type OrgCancelResponse as OrgCancelResponse,
    type OrgChangePlanResponse as OrgChangePlanResponse,
    type OrgCancelParams as OrgCancelParams,
    type OrgChangePlanParams as OrgChangePlanParams,
  };

  export {
    UsageAlerts as UsageAlerts,
    type UsageAlertCreateResponse as UsageAlertCreateResponse,
    type UsageAlertUpdateResponse as UsageAlertUpdateResponse,
    type UsageAlertCreateParams as UsageAlertCreateParams,
    type UsageAlertUpdateParams as UsageAlertUpdateParams,
    type UsageAlertDeleteParams as UsageAlertDeleteParams,
  };

  export { Overages as Overages };

  export {
    TaxInfo as TaxInfo,
    type TaxInfoUpdateResponse as TaxInfoUpdateResponse,
    type TaxInfoUpdateParams as TaxInfoUpdateParams,
  };

  export { Invoices as Invoices, type InvoiceRetrievePdfParams as InvoiceRetrievePdfParams };

  export { Usage as Usage };

  export {
    Credits as Credits,
    type CreditPurchaseResponse as CreditPurchaseResponse,
    type CreditPurchaseParams as CreditPurchaseParams,
  };

  export {
    Contacts as Contacts,
    type ContactCreateResponse as ContactCreateResponse,
    type ContactCreateParams as ContactCreateParams,
    type ContactDeleteParams as ContactDeleteParams,
  };

  export {
    Addons as Addons,
    type AddonUpdateParams as AddonUpdateParams,
    type AddonDeleteParams as AddonDeleteParams,
  };
}
