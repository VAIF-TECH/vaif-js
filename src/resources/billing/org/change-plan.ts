// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class ChangePlan extends APIResource {
  changePlan(orgID: string, body: ChangePlanChangePlanParams, options?: RequestOptions): APIPromise<ChangePlanChangePlanResponse> {
    return this._client.post(path`/billing/org/${orgID}/change-plan`, { body, ...options });
  }
}

export interface ChangePlanChangePlanResponse {
  effectiveDate: string | (string & {});

  newInterval: string;

  newPlan: string;

  ok: true;
}

export interface ChangePlanChangePlanParams {
  plan: 'starter' | 'pro' | 'agency' | 'studio_plus';

  interval?: 'monthly' | 'yearly';
}

export declare namespace ChangePlan {
  export {
    type ChangePlanChangePlanResponse as ChangePlanChangePlanResponse,
    type ChangePlanChangePlanParams as ChangePlanChangePlanParams
  };
}
