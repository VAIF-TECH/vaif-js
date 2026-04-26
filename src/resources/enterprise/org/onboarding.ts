// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Onboarding extends APIResource {
  retrieve(orgID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/enterprise/org/${orgID}/onboarding`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  update(
    orgID: string,
    body: OnboardingUpdateParams,
    options?: RequestOptions,
  ): APIPromise<OnboardingUpdateResponse> {
    return this._client.patch(path`/enterprise/org/${orgID}/onboarding`, { body, ...options });
  }
}

export interface OnboardingUpdateResponse {
  completedAt: string | null;

  dismissed: boolean;

  steps: { [key: string]: boolean };

  [k: string]: unknown;
}

export interface OnboardingUpdateParams {
  dismissed?: boolean;

  steps?: { [key: string]: boolean };
}

export declare namespace Onboarding {
  export {
    type OnboardingUpdateResponse as OnboardingUpdateResponse,
    type OnboardingUpdateParams as OnboardingUpdateParams,
  };
}
