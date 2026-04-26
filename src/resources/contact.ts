// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Contact extends APIResource {
  /**
   * Submit a contact form
   */
  submit(body: ContactSubmitParams, options?: RequestOptions): APIPromise<ContactSubmitResponse> {
    return this._client.post('/contact', { body, ...options });
  }
}

export interface ContactSubmitResponse {
  success: true;
}

export interface ContactSubmitParams {
  email: string;

  message: string;

  name: string;

  subject: 'Sales Inquiry' | 'Partnership Opportunity' | 'Technical Support' | 'Other';

  company?: string;

  website?: string;
}

export declare namespace Contact {
  export {
    type ContactSubmitResponse as ContactSubmitResponse,
    type ContactSubmitParams as ContactSubmitParams,
  };
}
