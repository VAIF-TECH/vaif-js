// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class LinkedAccounts extends APIResource {
  /**
   * List OAuth accounts linked to the current user
   */
  list(options?: RequestOptions): APIPromise<LinkedAccountListResponse> {
    return this._client.get('/auth/me/linked-accounts', options);
  }

  /**
   * Unlink an OAuth provider from the current user's account
   */
  unlink(provider: string, options?: RequestOptions): APIPromise<LinkedAccountUnlinkResponse> {
    return this._client.delete(path`/auth/me/linked-accounts/${provider}`, options);
  }
}

export interface LinkedAccountListResponse {
  accounts: Array<LinkedAccountListResponse.Account>;
}

export namespace LinkedAccountListResponse {
  export interface Account {
    id: string;

    provider: string;

    lastUsedAt?: (string & {}) | string | null;

    linkedAt?: (string & {}) | string | null;

    providerData?: unknown;

    providerEmail?: string | null;
  }
}

export interface LinkedAccountUnlinkResponse {
  ok: true;
}

export declare namespace LinkedAccounts {
  export {
    type LinkedAccountListResponse as LinkedAccountListResponse,
    type LinkedAccountUnlinkResponse as LinkedAccountUnlinkResponse,
  };
}
