// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Enterprise extends APIResource {
  submitInquiry(
    body: EnterpriseSubmitInquiryParams,
    options?: RequestOptions,
  ): APIPromise<EnterpriseSubmitInquiryResponse> {
    return this._client.post('/billing/enterprise/inquiry', { body, ...options });
  }
}

export interface EnterpriseSubmitInquiryResponse {
  message: string;

  ok: true;
}

export interface EnterpriseSubmitInquiryParams {
  company: string;

  email: string;

  name: string;

  message?: string;

  orgId?: string;

  phone?: string;

  teamSize?: '1-10' | '11-50' | '51-200' | '201-1000' | '1000+';
}

export declare namespace Enterprise {
  export {
    type EnterpriseSubmitInquiryResponse as EnterpriseSubmitInquiryResponse,
    type EnterpriseSubmitInquiryParams as EnterpriseSubmitInquiryParams,
  };
}
