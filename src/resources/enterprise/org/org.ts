// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ContractAPI from './contract';
import { Contract } from './contract';
import * as InvoicesAPI from './invoices';
import { Invoices } from './invoices';
import * as OnboardingAPI from './onboarding';
import { Onboarding, OnboardingOnboardingParams, OnboardingOnboardingResponse } from './onboarding';
import * as UsageAPI from './usage';
import { Usage } from './usage';

export class Org extends APIResource {
  contract: ContractAPI.Contract = new ContractAPI.Contract(this._client);
  invoices: InvoicesAPI.Invoices = new InvoicesAPI.Invoices(this._client);
  onboarding: OnboardingAPI.Onboarding = new OnboardingAPI.Onboarding(this._client);
  usage: UsageAPI.Usage = new UsageAPI.Usage(this._client);
}

Org.Contract = Contract;
Org.Invoices = Invoices;
Org.Onboarding = Onboarding;
Org.Usage = Usage;

export declare namespace Org {
  export {
    Contract as Contract
  };

  export {
    Invoices as Invoices
  };

  export {
    Onboarding as Onboarding,
    type OnboardingOnboardingResponse as OnboardingOnboardingResponse,
    type OnboardingOnboardingParams as OnboardingOnboardingParams
  };

  export {
    Usage as Usage
  };
}
