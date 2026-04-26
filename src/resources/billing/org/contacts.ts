// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Contacts extends APIResource {
  create(
    orgID: string,
    body: ContactCreateParams,
    options?: RequestOptions,
  ): APIPromise<ContactCreateResponse> {
    return this._client.post(path`/billing/org/${orgID}/contacts`, { body, ...options });
  }

  list(orgID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/billing/org/${orgID}/contacts`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  delete(contactID: string, params: ContactDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { orgId } = params;
    return this._client.delete(path`/billing/org/${orgId}/contacts/${contactID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ContactCreateResponse {
  contactId: string;

  ok: true;
}

export interface ContactCreateParams {
  email: string;

  name: string;

  phone?: string;

  receiveAlerts?: boolean;

  receiveInvoices?: boolean;
}

export interface ContactDeleteParams {
  orgId: string;
}

export declare namespace Contacts {
  export {
    type ContactCreateResponse as ContactCreateResponse,
    type ContactCreateParams as ContactCreateParams,
    type ContactDeleteParams as ContactDeleteParams,
  };
}
