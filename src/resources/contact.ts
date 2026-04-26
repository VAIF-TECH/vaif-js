// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class BaseContact extends APIResource {
  static override readonly _key: readonly ['contact'] = Object.freeze(['contact'] as const)

  /**
   * Submit a contact form
   */
  create(body: ContactCreateParams, options?: RequestOptions): APIPromise<ContactCreateResponse> {
    return this._client.post('/contact', { body, ...options });
  }
}
export class Contact extends BaseContact {

}

export interface ContactCreateResponse {
  success: true;
}

export interface ContactCreateParams {
  email: string;

  message: string;

  name: string;

  subject: 'Sales Inquiry' | 'Partnership Opportunity' | 'Technical Support' | 'Other';

  company?: string;

  website?: string;
}

export declare namespace Contact {
  export {
    type ContactCreateResponse as ContactCreateResponse,
    type ContactCreateParams as ContactCreateParams
  };
}
