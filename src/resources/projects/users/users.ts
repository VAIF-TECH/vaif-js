// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as BanAPI from './ban';
import { Ban, BanBanParams, BanBanResponse } from './ban';
import * as SessionsAPI from './sessions';
import { SessionDeleteParams, SessionGetSessionsParams, SessionRevokeAllParams, Sessions } from './sessions';
import * as UnbanAPI from './unban';
import { Unban, UnbanUnbanParams } from './unban';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Users extends APIResource {
  ban: BanAPI.Ban = new BanAPI.Ban(this._client);
  sessions: SessionsAPI.Sessions = new SessionsAPI.Sessions(this._client);
  unban: UnbanAPI.Unban = new UnbanAPI.Unban(this._client);

  retrieve(userID: string, params: UserRetrieveParams, options?: RequestOptions): APIPromise<void> {
    const { projectId } = params
    return this._client.get(path`/projects/${projectId}/users/${userID}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  update(userID: string, params: UserUpdateParams, options?: RequestOptions): APIPromise<UserUpdateResponse> {
    const { projectId, ...body } = params
    return this._client.patch(path`/projects/${projectId}/users/${userID}`, { body, ...options });
  }

  delete(userID: string, params: UserDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { projectId } = params
    return this._client.delete(path`/projects/${projectId}/users/${userID}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  getUsers(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/projects/${projectID}/users`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  users(projectID: string, body: UserUsersParams, options?: RequestOptions): APIPromise<UserUsersResponse> {
    return this._client.post(path`/projects/${projectID}/users`, { body, ...options });
  }
}

export interface UserUpdateResponse {
  user: UserUpdateResponse.User;
}

export namespace UserUpdateResponse {
  export interface User {
    id: string;

    banned: boolean | null;

    bannedAt: string | (string & {}) | null;

    bannedReason: string | null;

    email: string | null;

    phone: string | null;

    provider: string | null;

    updatedAt: string | (string & {}) | null;

    appMetadata?: unknown;

    metadata?: unknown;

  [k: string]: unknown
  }
}

export interface UserUsersResponse {
  user: UserUsersResponse.User;
}

export namespace UserUsersResponse {
  export interface User {
    id: string;

    createdAt: string | (string & {});

    email: string | null;

    phone: string | null;

    provider: string | null;

    metadata?: unknown;

  [k: string]: unknown
  }
}

export interface UserRetrieveParams {
  projectId: string;
}

export interface UserUpdateParams {
  /**
   * Path param
   */
  projectId: string;

  /**
   * Body param
   */
  appMetadata?: { [key: string]: unknown };

  /**
   * Body param
   */
  banned?: boolean;

  /**
   * Body param
   */
  bannedReason?: string;

  /**
   * Body param
   */
  email?: string;

  /**
   * Body param
   */
  metadata?: { [key: string]: unknown };

  /**
   * Body param
   */
  phone?: string;
}

export interface UserDeleteParams {
  projectId: string;
}

export interface UserUsersParams {
  email?: string;

  metadata?: { [key: string]: unknown };

  password?: string;

  phone?: string;

  provider?: string;
}

Users.Ban = Ban;
Users.Sessions = Sessions;
Users.Unban = Unban;

export declare namespace Users {
  export {
    type UserUpdateResponse as UserUpdateResponse,
    type UserUsersResponse as UserUsersResponse,
    type UserRetrieveParams as UserRetrieveParams,
    type UserUpdateParams as UserUpdateParams,
    type UserDeleteParams as UserDeleteParams,
    type UserUsersParams as UserUsersParams
  };

  export {
    Ban as Ban,
    type BanBanResponse as BanBanResponse,
    type BanBanParams as BanBanParams
  };

  export {
    Sessions as Sessions,
    type SessionDeleteParams as SessionDeleteParams,
    type SessionGetSessionsParams as SessionGetSessionsParams,
    type SessionRevokeAllParams as SessionRevokeAllParams
  };

  export {
    Unban as Unban,
    type UnbanUnbanParams as UnbanUnbanParams
  };
}
