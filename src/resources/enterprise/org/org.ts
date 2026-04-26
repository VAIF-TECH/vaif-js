// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as OnboardingAPI from './onboarding';
import { Onboarding, OnboardingUpdateParams, OnboardingUpdateResponse } from './onboarding';
import * as UsageAPI from './usage';
import { Usage } from './usage';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Org extends APIResource {
  usage: UsageAPI.Usage = new UsageAPI.Usage(this._client);
  onboarding: OnboardingAPI.Onboarding = new OnboardingAPI.Onboarding(this._client);

  listInvoices(orgID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/enterprise/org/${orgID}/invoices`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  retrieveContract(orgID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/enterprise/org/${orgID}/contract`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

Org.Usage = Usage;
Org.Onboarding = Onboarding;

export declare namespace Org {
  export { Usage as Usage };

  export {
    Onboarding as Onboarding,
    type OnboardingUpdateResponse as OnboardingUpdateResponse,
    type OnboardingUpdateParams as OnboardingUpdateParams,
  };
}
