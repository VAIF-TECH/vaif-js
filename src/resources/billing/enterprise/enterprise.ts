// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as InquiryAPI from './inquiry';
import { BaseInquiry, Inquiry, InquiryCreateParams, InquiryCreateResponse } from './inquiry';

export class BaseEnterprise extends APIResource {
  static override readonly _key: readonly ['billing', 'enterprise'] = Object.freeze(['billing', 'enterprise'] as const)

}
export class Enterprise extends BaseEnterprise {
  inquiry: InquiryAPI.Inquiry = new InquiryAPI.Inquiry(this._client);
}

Enterprise.Inquiry = Inquiry;
Enterprise.BaseInquiry = BaseInquiry;

export declare namespace Enterprise {
  export {
    Inquiry as Inquiry,
    BaseInquiry as BaseInquiry,
    type InquiryCreateResponse as InquiryCreateResponse,
    type InquiryCreateParams as InquiryCreateParams
  };
}
