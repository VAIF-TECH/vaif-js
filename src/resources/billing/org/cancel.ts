// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Cancel extends APIResource {
  cancel(orgID: string, body: CancelCancelParams, options?: RequestOptions): APIPromise<CancelCancelResponse> {
    return this._client.post(path`/billing/org/${orgID}/cancel`, { body, ...options });
  }
}

export interface CancelCancelResponse {
  cancelAtPeriodEnd: boolean;

  currentPeriodEnd: string | (string & {});

  ok: true;
}

export interface CancelCancelParams {
  cancelImmediately?: boolean;
}

export declare namespace Cancel {
  export {
    type CancelCancelResponse as CancelCancelResponse,
    type CancelCancelParams as CancelCancelParams
  };
}
