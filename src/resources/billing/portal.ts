// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Portal extends APIResource {
  create(body: PortalCreateParams, options?: RequestOptions): APIPromise<PortalCreateResponse> {
    return this._client.post('/billing/portal', { body, ...options });
  }
}

export interface PortalCreateResponse {
  url: string | null;
}

export interface PortalCreateParams {
  orgId: string;

  returnUrl?: string;
}

export declare namespace Portal {
  export {
    type PortalCreateResponse as PortalCreateResponse,
    type PortalCreateParams as PortalCreateParams
  };
}
