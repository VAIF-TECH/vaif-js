// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class TaxInfo extends APIResource {
  retrieve(orgID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/billing/org/${orgID}/tax-info`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  update(
    orgID: string,
    body: TaxInfoUpdateParams,
    options?: RequestOptions,
  ): APIPromise<TaxInfoUpdateResponse> {
    return this._client.put(path`/billing/org/${orgID}/tax-info`, { body, ...options });
  }
}

export interface TaxInfoUpdateResponse {
  ok: true;
}

export interface TaxInfoUpdateParams {
  address?: TaxInfoUpdateParams.Address;

  businessName?: string | null;

  taxId?: string | null;

  taxIdType?: string | null;
}

export namespace TaxInfoUpdateParams {
  export interface Address {
    city?: string | null;

    country?: string | null;

    line1?: string | null;

    line2?: string | null;

    postalCode?: string | null;

    state?: string | null;
  }
}

export declare namespace TaxInfo {
  export {
    type TaxInfoUpdateResponse as TaxInfoUpdateResponse,
    type TaxInfoUpdateParams as TaxInfoUpdateParams,
  };
}
