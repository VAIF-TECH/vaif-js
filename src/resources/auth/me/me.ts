// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as LinkedAccountsAPI from './linked-accounts';
import { LinkedAccountListResponse, LinkedAccountUnlinkResponse, LinkedAccounts } from './linked-accounts';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Me extends APIResource {
  linkedAccounts: LinkedAccountsAPI.LinkedAccounts = new LinkedAccountsAPI.LinkedAccounts(this._client);

  /**
   * Get the current authenticated user's profile
   */
  retrieve(options?: RequestOptions): APIPromise<MeRetrieveResponse> {
    return this._client.get('/auth/me', options);
  }

  /**
   * Update the current authenticated user's profile
   */
  update(body: MeUpdateParams, options?: RequestOptions): APIPromise<MeUpdateResponse> {
    return this._client.patch('/auth/me', { body, ...options });
  }

  /**
   * Check whether the current user has admin access
   */
  checkAdmin(options?: RequestOptions): APIPromise<MeCheckAdminResponse> {
    return this._client.get('/auth/me/admin', options);
  }

  /**
   * Get current user profile, org memberships, and admin status in one call
   */
  getContext(options?: RequestOptions): APIPromise<MeGetContextResponse> {
    return this._client.get('/auth/me/context', options);
  }
}

export interface MeRetrieveResponse {
  ok: true;

  user: MeRetrieveResponse.User;
}

export namespace MeRetrieveResponse {
  export interface User {
    id: string;

    createdAt: (string & {}) | string;

    email: string;

    avatarUrl?: string | null;

    emailVerifiedAt?: (string & {}) | string | null;

    name?: string | null;

    phone?: string | null;

    timezone?: string | null;

    updatedAt?: (string & {}) | string | null;
  }
}

export interface MeUpdateResponse {
  ok: true;

  user: MeUpdateResponse.User;
}

export namespace MeUpdateResponse {
  export interface User {
    id: string;

    createdAt: (string & {}) | string;

    email: string;

    avatarUrl?: string | null;

    emailVerifiedAt?: (string & {}) | string | null;

    name?: string | null;

    phone?: string | null;

    timezone?: string | null;

    updatedAt?: (string & {}) | string | null;
  }
}

export interface MeCheckAdminResponse {
  isAdmin: boolean;

  ok: true;

  permissions?: Array<string>;

  role?: string;
}

export interface MeGetContextResponse {
  isAdmin: boolean;

  ok: true;

  orgs: Array<MeGetContextResponse.Org>;

  user: MeGetContextResponse.User;
}

export namespace MeGetContextResponse {
  export interface Org {
    orgId: string;

    orgName: string;

    plan: string;

    role: string;
  }

  export interface User {
    id: string;

    createdAt: (string & {}) | string;

    email: string;

    avatarUrl?: string | null;

    emailVerifiedAt?: (string & {}) | string | null;

    name?: string | null;

    phone?: string | null;

    timezone?: string | null;

    updatedAt?: (string & {}) | string | null;
  }
}

export interface MeUpdateParams {
  avatarUrl?: string | null;

  name?: string;

  phone?: string | null;

  timezone?: string;
}

Me.LinkedAccounts = LinkedAccounts;

export declare namespace Me {
  export {
    type MeRetrieveResponse as MeRetrieveResponse,
    type MeUpdateResponse as MeUpdateResponse,
    type MeCheckAdminResponse as MeCheckAdminResponse,
    type MeGetContextResponse as MeGetContextResponse,
    type MeUpdateParams as MeUpdateParams,
  };

  export {
    LinkedAccounts as LinkedAccounts,
    type LinkedAccountListResponse as LinkedAccountListResponse,
    type LinkedAccountUnlinkResponse as LinkedAccountUnlinkResponse,
  };
}
