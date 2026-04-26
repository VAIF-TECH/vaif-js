// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AddonsAPI from './addons';
import { AddonDeleteParams, AddonUpdateParams, Addons } from './addons';
import * as CancelAPI from './cancel';
import { Cancel, CancelCancelParams, CancelCancelResponse } from './cancel';
import * as ChangePlanAPI from './change-plan';
import { ChangePlan, ChangePlanChangePlanParams, ChangePlanChangePlanResponse } from './change-plan';
import * as ContactsAPI from './contacts';
import { ContactContactsParams, ContactContactsResponse, ContactDeleteParams, Contacts } from './contacts';
import * as CostBreakdownAPI from './cost-breakdown';
import { CostBreakdown } from './cost-breakdown';
import * as CreditsAPI from './credits';
import { CreditPurchaseParams, CreditPurchaseResponse, Credits } from './credits';
import * as OveragesAPI from './overages';
import { Overages } from './overages';
import * as PauseAPI from './pause';
import { Pause } from './pause';
import * as PortalAPI from './portal';
import { Portal } from './portal';
import * as ReactivateAPI from './reactivate';
import { Reactivate } from './reactivate';
import * as ResumeAPI from './resume';
import { Resume } from './resume';
import * as SummaryAPI from './summary';
import { Summary } from './summary';
import * as TaxInfoAPI from './tax-info';
import { TaxInfo, TaxInfoTaxInfoParams, TaxInfoTaxInfoResponse } from './tax-info';
import * as UsageAPI from './usage';
import { Usage } from './usage';
import * as UsageAlertsAPI from './usage-alerts';
import { UsageAlertDeleteParams, UsageAlertUpdateParams, UsageAlertUpdateResponse, UsageAlertUsageAlertsParams, UsageAlertUsageAlertsResponse, UsageAlerts } from './usage-alerts';
import * as InvoicesAPI from './invoices/invoices';
import { Invoices } from './invoices/invoices';

export class Org extends APIResource {
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
Org.Cancel = Cancel;
Org.ChangePlan = ChangePlan;
Org.Contacts = Contacts;
Org.CostBreakdown = CostBreakdown;
Org.Credits = Credits;
Org.Invoices = Invoices;
Org.Overages = Overages;
Org.Pause = Pause;
Org.Portal = Portal;
Org.Reactivate = Reactivate;
Org.Resume = Resume;
Org.Summary = Summary;
Org.TaxInfo = TaxInfo;
Org.Usage = Usage;
Org.UsageAlerts = UsageAlerts;

export declare namespace Org {
  export {
    Addons as Addons,
    type AddonUpdateParams as AddonUpdateParams,
    type AddonDeleteParams as AddonDeleteParams
  };

  export {
    Cancel as Cancel,
    type CancelCancelResponse as CancelCancelResponse,
    type CancelCancelParams as CancelCancelParams
  };

  export {
    ChangePlan as ChangePlan,
    type ChangePlanChangePlanResponse as ChangePlanChangePlanResponse,
    type ChangePlanChangePlanParams as ChangePlanChangePlanParams
  };

  export {
    Contacts as Contacts,
    type ContactContactsResponse as ContactContactsResponse,
    type ContactDeleteParams as ContactDeleteParams,
    type ContactContactsParams as ContactContactsParams
  };

  export {
    CostBreakdown as CostBreakdown
  };

  export {
    Credits as Credits,
    type CreditPurchaseResponse as CreditPurchaseResponse,
    type CreditPurchaseParams as CreditPurchaseParams
  };

  export {
    Invoices as Invoices
  };

  export {
    Overages as Overages
  };

  export {
    Pause as Pause
  };

  export {
    Portal as Portal
  };

  export {
    Reactivate as Reactivate
  };

  export {
    Resume as Resume
  };

  export {
    Summary as Summary
  };

  export {
    TaxInfo as TaxInfo,
    type TaxInfoTaxInfoResponse as TaxInfoTaxInfoResponse,
    type TaxInfoTaxInfoParams as TaxInfoTaxInfoParams
  };

  export {
    Usage as Usage
  };

  export {
    UsageAlerts as UsageAlerts,
    type UsageAlertUpdateResponse as UsageAlertUpdateResponse,
    type UsageAlertUsageAlertsResponse as UsageAlertUsageAlertsResponse,
    type UsageAlertUpdateParams as UsageAlertUpdateParams,
    type UsageAlertDeleteParams as UsageAlertDeleteParams,
    type UsageAlertUsageAlertsParams as UsageAlertUsageAlertsParams
  };
}
