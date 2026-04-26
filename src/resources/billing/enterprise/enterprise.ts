// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as InquiryAPI from './inquiry';
import { Inquiry, InquiryCreateParams, InquiryCreateResponse } from './inquiry';

export class Enterprise extends APIResource {
  inquiry: InquiryAPI.Inquiry = new InquiryAPI.Inquiry(this._client);
}

Enterprise.Inquiry = Inquiry;

export declare namespace Enterprise {
  export {
    Inquiry as Inquiry,
    type InquiryCreateResponse as InquiryCreateResponse,
    type InquiryCreateParams as InquiryCreateParams
  };
}
