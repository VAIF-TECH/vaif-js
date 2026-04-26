// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as SessionsAPI from './sessions';
import { SessionDeleteParams, SessionListParams, SessionRevokeAllParams, Sessions } from './sessions';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Users extends APIResource {
  sessions: SessionsAPI.Sessions = new SessionsAPI.Sessions(this._client);

  create(
    projectID: string,
    body: UserCreateParams,
    options?: RequestOptions,
  ): APIPromise<UserCreateResponse> {
    return this._client.post(path`/projects/${projectID}/users`, { body, ...options });
  }

  retrieve(userID: string, params: UserRetrieveParams, options?: RequestOptions): APIPromise<void> {
    const { projectId } = params;
    return this._client.get(path`/projects/${projectId}/users/${userID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  update(userID: string, params: UserUpdateParams, options?: RequestOptions): APIPromise<UserUpdateResponse> {
    const { projectId, ...body } = params;
    return this._client.patch(path`/projects/${projectId}/users/${userID}`, { body, ...options });
  }

  list(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/projects/${projectID}/users`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  delete(userID: string, params: UserDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { projectId } = params;
    return this._client.delete(path`/projects/${projectId}/users/${userID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  ban(userID: string, params: UserBanParams, options?: RequestOptions): APIPromise<UserBanResponse> {
    const { projectId, ...body } = params;
    return this._client.post(path`/projects/${projectId}/users/${userID}/ban`, { body, ...options });
  }

  unban(userID: string, params: UserUnbanParams, options?: RequestOptions): APIPromise<void> {
    const { projectId } = params;
    return this._client.post(path`/projects/${projectId}/users/${userID}/unban`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface UserCreateResponse {
  user: UserCreateResponse.User;
}

export namespace UserCreateResponse {
  export interface User {
    id: string;

    createdAt: string | (string & {});

    email: string | null;

    phone: string | null;

    provider: string | null;

    metadata?: unknown;

    [k: string]: unknown;
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

    [k: string]: unknown;
  }
}

export interface UserBanResponse {
  success: true;
}

export interface UserCreateParams {
  email?: string;

  metadata?: { [key: string]: unknown };

  password?: string;

  phone?: string;

  provider?: string;
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

export interface UserBanParams {
  /**
   * Path param
   */
  projectId: string;

  /**
   * Body param
   */
  reason?: string;
}

export interface UserUnbanParams {
  projectId: string;
}

Users.Sessions = Sessions;

export declare namespace Users {
  export {
    type UserCreateResponse as UserCreateResponse,
    type UserUpdateResponse as UserUpdateResponse,
    type UserBanResponse as UserBanResponse,
    type UserCreateParams as UserCreateParams,
    type UserRetrieveParams as UserRetrieveParams,
    type UserUpdateParams as UserUpdateParams,
    type UserDeleteParams as UserDeleteParams,
    type UserBanParams as UserBanParams,
    type UserUnbanParams as UserUnbanParams,
  };

  export {
    Sessions as Sessions,
    type SessionListParams as SessionListParams,
    type SessionDeleteParams as SessionDeleteParams,
    type SessionRevokeAllParams as SessionRevokeAllParams,
  };
}
