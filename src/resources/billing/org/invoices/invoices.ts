// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as PdfAPI from './pdf';
import { Pdf, PdfGetPdfParams } from './pdf';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Invoices extends APIResource {
  pdf: PdfAPI.Pdf = new PdfAPI.Pdf(this._client);

  getInvoices(orgID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/billing/org/${orgID}/invoices`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}

Invoices.Pdf = Pdf;

export declare namespace Invoices {
  export {
    Pdf as Pdf,
    type PdfGetPdfParams as PdfGetPdfParams
  };
}
