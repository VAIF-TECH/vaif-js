// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AddonsAPI from './addons';
import { AddonDeleteParams, AddonUpdateParams, Addons, BaseAddons } from './addons';
import * as CancelAPI from './cancel';
import { BaseCancel, Cancel, CancelCancelParams, CancelCancelResponse } from './cancel';
import * as ChangePlanAPI from './change-plan';
import { BaseChangePlan, ChangePlan, ChangePlanChangePlanParams, ChangePlanChangePlanResponse } from './change-plan';
import * as ContactsAPI from './contacts';
import { BaseContacts, ContactContactsParams, ContactContactsResponse, ContactDeleteParams, Contacts } from './contacts';
import * as CostBreakdownAPI from './cost-breakdown';
import { BaseCostBreakdown, CostBreakdown } from './cost-breakdown';
import * as CreditsAPI from './credits';
import { BaseCredits, CreditPurchaseParams, CreditPurchaseResponse, Credits } from './credits';
import * as OveragesAPI from './overages';
import { BaseOverages, Overages } from './overages';
import * as PauseAPI from './pause';
import { BasePause, Pause } from './pause';
import * as PortalAPI from './portal';
import { BasePortal, Portal } from './portal';
import * as ReactivateAPI from './reactivate';
import { BaseReactivate, Reactivate } from './reactivate';
import * as ResumeAPI from './resume';
import { BaseResume, Resume } from './resume';
import * as SummaryAPI from './summary';
import { BaseSummary, Summary } from './summary';
import * as TaxInfoAPI from './tax-info';
import { BaseTaxInfo, TaxInfo, TaxInfoTaxInfoParams, TaxInfoTaxInfoResponse } from './tax-info';
import * as UsageAPI from './usage';
import { BaseUsage, Usage } from './usage';
import * as UsageAlertsAPI from './usage-alerts';
import { BaseUsageAlerts, UsageAlertDeleteParams, UsageAlertUpdateParams, UsageAlertUpdateResponse, UsageAlertUsageAlertsParams, UsageAlertUsageAlertsResponse, UsageAlerts } from './usage-alerts';
import * as InvoicesAPI from './invoices/invoices';
import { BaseInvoices, Invoices } from './invoices/invoices';

export class BaseOrg extends APIResource {
  static override readonly _key: readonly ['billing', 'org'] = Object.freeze(['billing', 'org'] as const)

}
export class Org extends BaseOrg {
  addons: AddonsAPI.Addons = new AddonsAPI.Addons(this._client);
  cancel: CancelAPI.Cancel = new CancelAPI.Cancel(this._client);
  changePlan: ChangePlanAPI.ChangePlan = new ChangePlanAPI.ChangePlan(this._client);
  contacts: ContactsAPI.Contacts = new ContactsAPI.Contacts(this._client);
  costBreakdown: CostBreakdownAPI.CostBreakdown = new CostBreakdownAPI.CostBreakdown(this._client);
  credits: CreditsAPI.Credits = new CreditsAPI.Credits(this._client);
  invoices: InvoicesAPI.Invoices = new InvoicesAPI.Invoices(this._client);
  overages: OveragesAPI.Overages = new OveragesAPI.Overages(this._client);
  pause: PauseAPI.Pause = new PauseAPI.Pause(this._client);
  portal: PortalAPI.Portal = new PortalAPI.Portal(this._client);
  reactivate: ReactivateAPI.Reactivate = new ReactivateAPI.Reactivate(this._client);
  resume: ResumeAPI.Resume = new ResumeAPI.Resume(this._client);
  summary: SummaryAPI.Summary = new SummaryAPI.Summary(this._client);
  taxInfo: TaxInfoAPI.TaxInfo = new TaxInfoAPI.TaxInfo(this._client);
  usage: UsageAPI.Usage = new UsageAPI.Usage(this._client);
  usageAlerts: UsageAlertsAPI.UsageAlerts = new UsageAlertsAPI.UsageAlerts(this._client);
}

Org.Addons = Addons;
Org.BaseAddons = BaseAddons;
Org.Cancel = Cancel;
Org.BaseCancel = BaseCancel;
Org.ChangePlan = ChangePlan;
Org.BaseChangePlan = BaseChangePlan;
Org.Contacts = Contacts;
Org.BaseContacts = BaseContacts;
Org.CostBreakdown = CostBreakdown;
Org.BaseCostBreakdown = BaseCostBreakdown;
Org.Credits = Credits;
Org.BaseCredits = BaseCredits;
Org.Invoices = Invoices;
Org.BaseInvoices = BaseInvoices;
Org.Overages = Overages;
Org.BaseOverages = BaseOverages;
Org.Pause = Pause;
Org.BasePause = BasePause;
Org.Portal = Portal;
Org.BasePortal = BasePortal;
Org.Reactivate = Reactivate;
Org.BaseReactivate = BaseReactivate;
Org.Resume = Resume;
Org.BaseResume = BaseResume;
Org.Summary = Summary;
Org.BaseSummary = BaseSummary;
Org.TaxInfo = TaxInfo;
Org.BaseTaxInfo = BaseTaxInfo;
Org.Usage = Usage;
Org.BaseUsage = BaseUsage;
Org.UsageAlerts = UsageAlerts;
Org.BaseUsageAlerts = BaseUsageAlerts;

export declare namespace Org {
  export {
    Addons as Addons,
    BaseAddons as BaseAddons,
    type AddonUpdateParams as AddonUpdateParams,
    type AddonDeleteParams as AddonDeleteParams
  };

  export {
    Cancel as Cancel,
    BaseCancel as BaseCancel,
    type CancelCancelResponse as CancelCancelResponse,
    type CancelCancelParams as CancelCancelParams
  };

  export {
    ChangePlan as ChangePlan,
    BaseChangePlan as BaseChangePlan,
    type ChangePlanChangePlanResponse as ChangePlanChangePlanResponse,
    type ChangePlanChangePlanParams as ChangePlanChangePlanParams
  };

  export {
    Contacts as Contacts,
    BaseContacts as BaseContacts,
    type ContactContactsResponse as ContactContactsResponse,
    type ContactDeleteParams as ContactDeleteParams,
    type ContactContactsParams as ContactContactsParams
  };

  export {
    CostBreakdown as CostBreakdown,
    BaseCostBreakdown as BaseCostBreakdown
  };

  export {
    Credits as Credits,
    BaseCredits as BaseCredits,
    type CreditPurchaseResponse as CreditPurchaseResponse,
    type CreditPurchaseParams as CreditPurchaseParams
  };

  export {
    Invoices as Invoices,
    BaseInvoices as BaseInvoices
  };

  export {
    Overages as Overages,
    BaseOverages as BaseOverages
  };

  export {
    Pause as Pause,
    BasePause as BasePause
  };

  export {
    Portal as Portal,
    BasePortal as BasePortal
  };

  export {
    Reactivate as Reactivate,
    BaseReactivate as BaseReactivate
  };

  export {
    Resume as Resume,
    BaseResume as BaseResume
  };

  export {
    Summary as Summary,
    BaseSummary as BaseSummary
  };

  export {
    TaxInfo as TaxInfo,
    BaseTaxInfo as BaseTaxInfo,
    type TaxInfoTaxInfoResponse as TaxInfoTaxInfoResponse,
    type TaxInfoTaxInfoParams as TaxInfoTaxInfoParams
  };

  export {
    Usage as Usage,
    BaseUsage as BaseUsage
  };

  export {
    UsageAlerts as UsageAlerts,
    BaseUsageAlerts as BaseUsageAlerts,
    type UsageAlertUpdateResponse as UsageAlertUpdateResponse,
    type UsageAlertUsageAlertsResponse as UsageAlertUsageAlertsResponse,
    type UsageAlertUpdateParams as UsageAlertUpdateParams,
    type UsageAlertDeleteParams as UsageAlertDeleteParams,
    type UsageAlertUsageAlertsParams as UsageAlertUsageAlertsParams
  };
}
