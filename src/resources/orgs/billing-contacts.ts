// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseBillingContacts extends APIResource {
  static override readonly _key: readonly ['orgs', 'billingContacts'] = Object.freeze(['orgs', 'billingContacts'] as const)

  /**
   * Remove a billing contact from an organization
   */
  delete(contactID: string, params: BillingContactDeleteParams, options?: RequestOptions): APIPromise<BillingContactDeleteResponse> {
    const { orgId } = params
    return this._client.delete(path`/orgs/${orgId}/billing-contacts/${contactID}`, options);
  }

  /**
   * Add a billing contact to an organization
   */
  billingContacts(orgID: string, body: BillingContactBillingContactsParams, options?: RequestOptions): APIPromise<BillingContactBillingContactsResponse> {
    return this._client.post(path`/orgs/${orgID}/billing-contacts`, { body, ...options });
  }

  /**
   * List billing contacts for an organization
   */
  getBillingContacts(orgID: string, options?: RequestOptions): APIPromise<BillingContactGetBillingContactsResponse> {
    return this._client.get(path`/orgs/${orgID}/billing-contacts`, options);
  }
}
export class BillingContacts extends BaseBillingContacts {

}

export interface BillingContactDeleteResponse {
  ok: true;
}

export interface BillingContactBillingContactsResponse {
  contact: BillingContactBillingContactsResponse.Contact;

  ok: true;
}

export namespace BillingContactBillingContactsResponse {
  export interface Contact {
    id: string;

    createdAt: (string & {}) | string;

    email: string;

    label: string | null;

    orgId: string;
  }
}

export interface BillingContactGetBillingContactsResponse {
  contacts: Array<BillingContactGetBillingContactsResponse.Contact>;

  ok: true;
}

export namespace BillingContactGetBillingContactsResponse {
  export interface Contact {
    id: string;

    createdAt: (string & {}) | string;

    email: string;

    label: string | null;

    orgId: string;
  }
}

export interface BillingContactDeleteParams {
  orgId: string;
}

export interface BillingContactBillingContactsParams {
  email: string;

  label?: string;
}

export declare namespace BillingContacts {
  export {
    type BillingContactDeleteResponse as BillingContactDeleteResponse,
    type BillingContactBillingContactsResponse as BillingContactBillingContactsResponse,
    type BillingContactGetBillingContactsResponse as BillingContactGetBillingContactsResponse,
    type BillingContactDeleteParams as BillingContactDeleteParams,
    type BillingContactBillingContactsParams as BillingContactBillingContactsParams
  };
}
