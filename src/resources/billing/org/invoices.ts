// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Invoices extends APIResource {
  list(orgID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/billing/org/${orgID}/invoices`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  retrievePdf(
    invoiceID: string,
    params: InvoiceRetrievePdfParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { orgId } = params;
    return this._client.get(path`/billing/org/${orgId}/invoices/${invoiceID}/pdf`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface InvoiceRetrievePdfParams {
  orgId: string;
}

export declare namespace Invoices {
  export { type InvoiceRetrievePdfParams as InvoiceRetrievePdfParams };
}
