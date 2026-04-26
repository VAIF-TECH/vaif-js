// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Pdf extends APIResource {
  getPdf(invoiceID: string, params: PdfGetPdfParams, options?: RequestOptions): APIPromise<void> {
    const { orgId } = params
    return this._client.get(path`/billing/org/${orgId}/invoices/${invoiceID}/pdf`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}

export interface PdfGetPdfParams {
  orgId: string;
}

export declare namespace Pdf {
  export {
    type PdfGetPdfParams as PdfGetPdfParams
  };
}
