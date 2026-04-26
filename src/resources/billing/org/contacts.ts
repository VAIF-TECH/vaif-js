// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseContacts extends APIResource {
  static override readonly _key: readonly ['billing', 'org', 'contacts'] = Object.freeze(['billing', 'org', 'contacts'] as const)

  delete(contactID: string, params: ContactDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { orgId } = params
    return this._client.delete(path`/billing/org/${orgId}/contacts/${contactID}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  contacts(orgID: string, body: ContactContactsParams, options?: RequestOptions): APIPromise<ContactContactsResponse> {
    return this._client.post(path`/billing/org/${orgID}/contacts`, { body, ...options });
  }

  getContacts(orgID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/billing/org/${orgID}/contacts`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}
export class Contacts extends BaseContacts {

}

export interface ContactContactsResponse {
  contactId: string;

  ok: true;
}

export interface ContactDeleteParams {
  orgId: string;
}

export interface ContactContactsParams {
  email: string;

  name: string;

  phone?: string;

  receiveAlerts?: boolean;

  receiveInvoices?: boolean;
}

export declare namespace Contacts {
  export {
    type ContactContactsResponse as ContactContactsResponse,
    type ContactDeleteParams as ContactDeleteParams,
    type ContactContactsParams as ContactContactsParams
  };
}
