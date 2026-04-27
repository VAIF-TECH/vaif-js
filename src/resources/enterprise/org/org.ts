// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ContractAPI from './contract';
import { BaseContract, Contract } from './contract';
import * as InvoicesAPI from './invoices';
import { BaseInvoices, Invoices } from './invoices';
import * as OnboardingAPI from './onboarding';
import { BaseOnboarding, Onboarding, OnboardingOnboardingParams, OnboardingOnboardingResponse } from './onboarding';
import * as UsageAPI from './usage';
import { BaseUsage, Usage } from './usage';

export class BaseOrg extends APIResource {
  static override readonly _key: readonly ['enterprise', 'org'] = Object.freeze(['enterprise', 'org'] as const)

}
export class Org extends BaseOrg {
  contract: ContractAPI.Contract = new ContractAPI.Contract(this._client);
  invoices: InvoicesAPI.Invoices = new InvoicesAPI.Invoices(this._client);
  onboarding: OnboardingAPI.Onboarding = new OnboardingAPI.Onboarding(this._client);
  usage: UsageAPI.Usage = new UsageAPI.Usage(this._client);
}

Org.Contract = Contract;
Org.BaseContract = BaseContract;
Org.Invoices = Invoices;
Org.BaseInvoices = BaseInvoices;
Org.Onboarding = Onboarding;
Org.BaseOnboarding = BaseOnboarding;
Org.Usage = Usage;
Org.BaseUsage = BaseUsage;

export declare namespace Org {
  export {
    Contract as Contract,
    BaseContract as BaseContract
  };

  export {
    Invoices as Invoices,
    BaseInvoices as BaseInvoices
  };

  export {
    Onboarding as Onboarding,
    BaseOnboarding as BaseOnboarding,
    type OnboardingOnboardingResponse as OnboardingOnboardingResponse,
    type OnboardingOnboardingParams as OnboardingOnboardingParams
  };

  export {
    Usage as Usage,
    BaseUsage as BaseUsage
  };
}
