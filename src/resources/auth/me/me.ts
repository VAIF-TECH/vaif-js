// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AdminAPI from './admin';
import { Admin, AdminListResponse } from './admin';
import * as ContextAPI from './context';
import { Context, ContextListResponse } from './context';
import * as LinkedAccountsAPI from './linked-accounts';
import { LinkedAccountDeleteResponse, LinkedAccountListResponse, LinkedAccounts } from './linked-accounts';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Me extends APIResource {
  admin: AdminAPI.Admin = new AdminAPI.Admin(this._client);
  context: ContextAPI.Context = new ContextAPI.Context(this._client);
  linkedAccounts: LinkedAccountsAPI.LinkedAccounts = new LinkedAccountsAPI.LinkedAccounts(this._client);

  /**
   * Update the current authenticated user's profile
   */
  update(body: MeUpdateParams, options?: RequestOptions): APIPromise<MeUpdateResponse> {
    return this._client.patch('/auth/me', { body, ...options });
  }

  /**
   * Get the current authenticated user's profile
   */
  list(options?: RequestOptions): APIPromise<MeListResponse> {
    return this._client.get('/auth/me', options);
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

export interface MeListResponse {
  ok: true;

  user: MeListResponse.User;
}

export namespace MeListResponse {
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

Me.Admin = Admin;
Me.Context = Context;
Me.LinkedAccounts = LinkedAccounts;

export declare namespace Me {
  export {
    type MeUpdateResponse as MeUpdateResponse,
    type MeListResponse as MeListResponse,
    type MeUpdateParams as MeUpdateParams
  };

  export {
    Admin as Admin,
    type AdminListResponse as AdminListResponse
  };

  export {
    Context as Context,
    type ContextListResponse as ContextListResponse
  };

  export {
    LinkedAccounts as LinkedAccounts,
    type LinkedAccountListResponse as LinkedAccountListResponse,
    type LinkedAccountDeleteResponse as LinkedAccountDeleteResponse
  };
}
