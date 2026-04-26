// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as PdfAPI from './pdf';
import { BasePdf, Pdf, PdfGetPdfParams } from './pdf';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BaseInvoices extends APIResource {
  static override readonly _key: readonly ['billing', 'org', 'invoices'] = Object.freeze(['billing', 'org', 'invoices'] as const)

  getInvoices(orgID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/billing/org/${orgID}/invoices`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}
export class Invoices extends BaseInvoices {
  pdf: PdfAPI.Pdf = new PdfAPI.Pdf(this._client);
}

Invoices.Pdf = Pdf;
Invoices.BasePdf = BasePdf;

export declare namespace Invoices {
  export {
    Pdf as Pdf,
    BasePdf as BasePdf,
    type PdfGetPdfParams as PdfGetPdfParams
  };
}
