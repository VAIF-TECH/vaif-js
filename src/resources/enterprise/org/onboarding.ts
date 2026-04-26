// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Onboarding extends APIResource {
  getOnboarding(orgID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/enterprise/org/${orgID}/onboarding`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  onboarding(orgID: string, body: OnboardingOnboardingParams, options?: RequestOptions): APIPromise<OnboardingOnboardingResponse> {
    return this._client.patch(path`/enterprise/org/${orgID}/onboarding`, { body, ...options });
  }
}

export interface OnboardingOnboardingResponse {
  completedAt: string | null;

  dismissed: boolean;

  steps: { [key: string]: boolean };

[k: string]: unknown
}

export interface OnboardingOnboardingParams {
  dismissed?: boolean;

  steps?: { [key: string]: boolean };
}

export declare namespace Onboarding {
  export {
    type OnboardingOnboardingResponse as OnboardingOnboardingResponse,
    type OnboardingOnboardingParams as OnboardingOnboardingParams
  };
}
