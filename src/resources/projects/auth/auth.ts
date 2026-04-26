// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as OAuthAppsAPI from './oauth-apps';
import { OAuthAppDeleteParams, OAuthAppUpdateParams, OAuthAppUpdateResponse, OAuthApps } from './oauth-apps';
import * as SettingsAPI from './settings';
import { SettingPatchAllParams, SettingPatchAllResponse, Settings } from './settings';
import * as VerifyEmailAPI from './verify-email';
import { VerifyEmail, VerifyEmailConfirmParams, VerifyEmailConfirmResponse } from './verify-email';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Auth extends APIResource {
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);
  oauthApps: OAuthAppsAPI.OAuthApps = new OAuthAppsAPI.OAuthApps(this._client);
  verifyEmail: VerifyEmailAPI.VerifyEmail = new VerifyEmailAPI.VerifyEmail(this._client);

  forgotPassword(
    projectID: string,
    body: AuthForgotPasswordParams,
    options?: RequestOptions,
  ): APIPromise<AuthForgotPasswordResponse> {
    return this._client.post(path`/projects/${projectID}/auth/forgot-password`, { body, ...options });
  }

  login(projectID: string, body: AuthLoginParams, options?: RequestOptions): APIPromise<AuthLoginResponse> {
    return this._client.post(path`/projects/${projectID}/auth/login`, { body, ...options });
  }

  logout(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/projects/${projectID}/auth/logout`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  refresh(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/projects/${projectID}/auth/refresh`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  resetPassword(
    projectID: string,
    body: AuthResetPasswordParams,
    options?: RequestOptions,
  ): APIPromise<AuthResetPasswordResponse> {
    return this._client.post(path`/projects/${projectID}/auth/reset-password`, { body, ...options });
  }

  retrieveMe(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/projects/${projectID}/auth/me`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  signup(
    projectID: string,
    body: AuthSignupParams,
    options?: RequestOptions,
  ): APIPromise<AuthSignupResponse> {
    return this._client.post(path`/projects/${projectID}/auth/signup`, { body, ...options });
  }

  syncUsers(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/projects/${projectID}/auth/sync-users`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface AuthForgotPasswordResponse {
  message: string;

  ok: true;

  resetToken?: string;
}

export interface AuthLoginResponse {
  accessToken: string;

  expiresIn: number;

  ok: true;

  user: AuthLoginResponse.User;
}

export namespace AuthLoginResponse {
  export interface User {
    id: string;

    email: string | null;

    metadata?: unknown;

    phone?: string | null;

    provider?: string | null;
  }
}

export interface AuthResetPasswordResponse {
  message: string;

  ok: true;
}

export interface AuthSignupResponse {
  accessToken: string;

  expiresIn: number;

  ok: true;

  user: AuthSignupResponse.User;
}

export namespace AuthSignupResponse {
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

export interface AuthForgotPasswordParams {
  email?: string;
}

export interface AuthLoginParams {
  email?: string;

  password?: string;
}

export interface AuthResetPasswordParams {
  token?: string;

  password?: string;
}

export interface AuthSignupParams {
  email?: string;

  metadata?: { [key: string]: unknown };

  password?: string;

  phone?: string;
}

Auth.Settings = Settings;
Auth.OAuthApps = OAuthApps;
Auth.VerifyEmail = VerifyEmail;

export declare namespace Auth {
  export {
    type AuthForgotPasswordResponse as AuthForgotPasswordResponse,
    type AuthLoginResponse as AuthLoginResponse,
    type AuthResetPasswordResponse as AuthResetPasswordResponse,
    type AuthSignupResponse as AuthSignupResponse,
    type AuthForgotPasswordParams as AuthForgotPasswordParams,
    type AuthLoginParams as AuthLoginParams,
    type AuthResetPasswordParams as AuthResetPasswordParams,
    type AuthSignupParams as AuthSignupParams,
  };

  export {
    Settings as Settings,
    type SettingPatchAllResponse as SettingPatchAllResponse,
    type SettingPatchAllParams as SettingPatchAllParams,
  };

  export {
    OAuthApps as OAuthApps,
    type OAuthAppUpdateResponse as OAuthAppUpdateResponse,
    type OAuthAppUpdateParams as OAuthAppUpdateParams,
    type OAuthAppDeleteParams as OAuthAppDeleteParams,
  };

  export {
    VerifyEmail as VerifyEmail,
    type VerifyEmailConfirmResponse as VerifyEmailConfirmResponse,
    type VerifyEmailConfirmParams as VerifyEmailConfirmParams,
  };
}
