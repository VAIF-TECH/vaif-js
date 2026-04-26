// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Apply extends APIResource {
  /**
   * Apply a saved plan to a project
   */
  create(body: ApplyCreateParams, options?: RequestOptions): APIPromise<ApplyCreateResponse> {
    return this._client.post('/plans/apply', { body, ...options });
  }
}

export interface ApplyCreateResponse {
  ok: true;

  appliedSteps?: unknown;
}

export interface ApplyCreateParams {
  planId: string;

  projectId: string;

  allowApply?: boolean;

  envId?: string;
}

export declare namespace Apply {
  export {
    type ApplyCreateResponse as ApplyCreateResponse,
    type ApplyCreateParams as ApplyCreateParams
  };
}
