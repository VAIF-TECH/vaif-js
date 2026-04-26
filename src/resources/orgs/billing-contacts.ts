// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BillingContacts extends APIResource {
  /**
   * Add a billing contact to an organization
   */
  create(
    orgID: string,
    body: BillingContactCreateParams,
    options?: RequestOptions,
  ): APIPromise<BillingContactCreateResponse> {
    return this._client.post(path`/orgs/${orgID}/billing-contacts`, { body, ...options });
  }

  /**
   * List billing contacts for an organization
   */
  list(orgID: string, options?: RequestOptions): APIPromise<BillingContactListResponse> {
    return this._client.get(path`/orgs/${orgID}/billing-contacts`, options);
  }

  /**
   * Remove a billing contact from an organization
   */
  delete(
    contactID: string,
    params: BillingContactDeleteParams,
    options?: RequestOptions,
  ): APIPromise<BillingContactDeleteResponse> {
    const { orgId } = params;
    return this._client.delete(path`/orgs/${orgId}/billing-contacts/${contactID}`, options);
  }
}

export interface BillingContactCreateResponse {
  contact: BillingContactCreateResponse.Contact;

  ok: true;
}

export namespace BillingContactCreateResponse {
  export interface Contact {
    id: string;

    createdAt: (string & {}) | string;

    email: string;

    label: string | null;

    orgId: string;
  }
}

export interface BillingContactListResponse {
  contacts: Array<BillingContactListResponse.Contact>;

  ok: true;
}

export namespace BillingContactListResponse {
  export interface Contact {
    id: string;

    createdAt: (string & {}) | string;

    email: string;

    label: string | null;

    orgId: string;
  }
}

export interface BillingContactDeleteResponse {
  ok: true;
}

export interface BillingContactCreateParams {
  email: string;

  label?: string;
}

export interface BillingContactDeleteParams {
  orgId: string;
}

export declare namespace BillingContacts {
  export {
    type BillingContactCreateResponse as BillingContactCreateResponse,
    type BillingContactListResponse as BillingContactListResponse,
    type BillingContactDeleteResponse as BillingContactDeleteResponse,
    type BillingContactCreateParams as BillingContactCreateParams,
    type BillingContactDeleteParams as BillingContactDeleteParams,
  };
}
