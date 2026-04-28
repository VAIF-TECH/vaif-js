// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseTaxInfo extends APIResource {
  static override readonly _key: readonly ['billing', 'org', 'taxInfo'] = Object.freeze([
    'billing',
    'org',
    'taxInfo',
  ] as const);

  getTaxInfo(orgID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/billing/org/${orgID}/tax-info`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  taxInfo(
    orgID: string,
    body: TaxInfoTaxInfoParams,
    options?: RequestOptions,
  ): APIPromise<TaxInfoTaxInfoResponse> {
    return this._client.put(path`/billing/org/${orgID}/tax-info`, { body, ...options });
  }
}
export class TaxInfo extends BaseTaxInfo {}

export interface TaxInfoTaxInfoResponse {
  ok: true;
}

export interface TaxInfoTaxInfoParams {
  address?: TaxInfoTaxInfoParams.Address;

  businessName?: string | null;

  taxId?: string | null;

  taxIdType?: string | null;
}

export namespace TaxInfoTaxInfoParams {
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
    type TaxInfoTaxInfoResponse as TaxInfoTaxInfoResponse,
    type TaxInfoTaxInfoParams as TaxInfoTaxInfoParams,
  };
}
