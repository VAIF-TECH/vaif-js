// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseCredits extends APIResource {
  static override readonly _key: readonly ['billing', 'org', 'credits'] = Object.freeze([
    'billing',
    'org',
    'credits',
  ] as const);

  getTransactions(orgID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/billing/org/${orgID}/credits/transactions`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  purchase(
    orgID: string,
    body: CreditPurchaseParams,
    options?: RequestOptions,
  ): APIPromise<CreditPurchaseResponse> {
    return this._client.post(path`/billing/org/${orgID}/credits/purchase`, { body, ...options });
  }
}
export class Credits extends BaseCredits {}

export interface CreditPurchaseResponse {
  checkoutUrl: string | null;

  ok: true;
}

export interface CreditPurchaseParams {
  packageId: 'credits_10' | 'credits_25' | 'credits_50' | 'credits_100';

  cancelUrl?: string;

  successUrl?: string;
}

export declare namespace Credits {
  export {
    type CreditPurchaseResponse as CreditPurchaseResponse,
    type CreditPurchaseParams as CreditPurchaseParams,
  };
}
