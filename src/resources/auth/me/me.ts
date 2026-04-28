// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AdminAPI from './admin';
import { Admin, AdminListResponse, BaseAdmin } from './admin';
import * as ContextAPI from './context';
import { BaseContext, Context, ContextListResponse } from './context';
import * as LinkedAccountsAPI from './linked-accounts';
import {
  BaseLinkedAccounts,
  LinkedAccountDeleteResponse,
  LinkedAccountListResponse,
  LinkedAccounts,
} from './linked-accounts';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class BaseMe extends APIResource {
  static override readonly _key: readonly ['auth', 'me'] = Object.freeze(['auth', 'me'] as const);

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
export class Me extends BaseMe {
  admin: AdminAPI.Admin = new AdminAPI.Admin(this._client);
  context: ContextAPI.Context = new ContextAPI.Context(this._client);
  linkedAccounts: LinkedAccountsAPI.LinkedAccounts = new LinkedAccountsAPI.LinkedAccounts(this._client);
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
Me.BaseAdmin = BaseAdmin;
Me.Context = Context;
Me.BaseContext = BaseContext;
Me.LinkedAccounts = LinkedAccounts;
Me.BaseLinkedAccounts = BaseLinkedAccounts;

export declare namespace Me {
  export {
    type MeUpdateResponse as MeUpdateResponse,
    type MeListResponse as MeListResponse,
    type MeUpdateParams as MeUpdateParams,
  };

  export { Admin as Admin, BaseAdmin as BaseAdmin, type AdminListResponse as AdminListResponse };

  export { Context as Context, BaseContext as BaseContext, type ContextListResponse as ContextListResponse };

  export {
    LinkedAccounts as LinkedAccounts,
    BaseLinkedAccounts as BaseLinkedAccounts,
    type LinkedAccountListResponse as LinkedAccountListResponse,
    type LinkedAccountDeleteResponse as LinkedAccountDeleteResponse,
  };
}
