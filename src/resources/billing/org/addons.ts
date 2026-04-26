// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Addons extends APIResource {
  update(addonID: string, params: AddonUpdateParams, options?: RequestOptions): APIPromise<void> {
    const { orgId } = params
    return this._client.patch(path`/billing/org/${orgId}/addons/${addonID}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  delete(addonID: string, params: AddonDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { orgId } = params
    return this._client.delete(path`/billing/org/${orgId}/addons/${addonID}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  addons(orgID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/billing/org/${orgID}/addons`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  getAddons(orgID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/billing/org/${orgID}/addons`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}

export interface AddonUpdateParams {
  orgId: string;
}

export interface AddonDeleteParams {
  orgId: string;
}

export declare namespace Addons {
  export {
    type AddonUpdateParams as AddonUpdateParams,
    type AddonDeleteParams as AddonDeleteParams
  };
}
