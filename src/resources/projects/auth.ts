// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Auth extends APIResource {
  update(provider: string, params: AuthUpdateParams, options?: RequestOptions): APIPromise<AuthUpdateResponse> {
    const { projectId, ...body } = params
    return this._client.put(path`/projects/${projectId}/auth/oauth-apps/${provider}`, { body, ...options });
  }

  delete(provider: string, params: AuthDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { projectId } = params
    return this._client.delete(path`/projects/${projectId}/auth/oauth-apps/${provider}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  confirm(projectID: string, body: AuthConfirmParams, options?: RequestOptions): APIPromise<AuthConfirmResponse> {
    return this._client.post(path`/projects/${projectID}/auth/verify-email/confirm`, { body, ...options });
  }

  forgotPassword(projectID: string, body: AuthForgotPasswordParams, options?: RequestOptions): APIPromise<AuthForgotPasswordResponse> {
    return this._client.post(path`/projects/${projectID}/auth/forgot-password`, { body, ...options });
  }

  getMe(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/projects/${projectID}/auth/me`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  getOAuthApps(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/projects/${projectID}/auth/oauth-apps`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  getSettings(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/projects/${projectID}/auth/settings`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  login(projectID: string, body: AuthLoginParams, options?: RequestOptions): APIPromise<AuthLoginResponse> {
    return this._client.post(path`/projects/${projectID}/auth/login`, { body, ...options });
  }

  logout(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/projects/${projectID}/auth/logout`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  refresh(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/projects/${projectID}/auth/refresh`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  resetPassword(projectID: string, body: AuthResetPasswordParams, options?: RequestOptions): APIPromise<AuthResetPasswordResponse> {
    return this._client.post(path`/projects/${projectID}/auth/reset-password`, { body, ...options });
  }

  send(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/projects/${projectID}/auth/verify-email/send`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  settings(projectID: string, body: AuthSettingsParams, options?: RequestOptions): APIPromise<AuthSettingsResponse> {
    return this._client.patch(path`/projects/${projectID}/auth/settings`, { body, ...options });
  }

  signup(projectID: string, body: AuthSignupParams, options?: RequestOptions): APIPromise<AuthSignupResponse> {
    return this._client.post(path`/projects/${projectID}/auth/signup`, { body, ...options });
  }

  syncUsers(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/projects/${projectID}/auth/sync-users`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}

export interface AuthUpdateResponse {
  app: AuthUpdateResponse.App;
}

export namespace AuthUpdateResponse {
  export interface App {
    id: string;

    clientId: string;

    createdAt: string | (string & {}) | null;

    enabled: boolean | null;

    provider: string;

    redirectUri: string | null;

    updatedAt: string | (string & {}) | null;

    scopes?: unknown;

  [k: string]: unknown
  }
}

export interface AuthConfirmResponse {
  message: string;

  ok: true;
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

export interface AuthSettingsResponse {
  settings?: unknown;
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

  [k: string]: unknown
  }
}

export interface AuthUpdateParams {
  /**
   * Path param
   */
  projectId: string;

  /**
   * Body param
   */
  clientId: string;

  /**
   * Body param
   */
  clientSecret: string;

  /**
   * Body param
   */
  redirectUri: string;

  /**
   * Body param
   */
  enabled?: boolean;

  /**
   * Body param
   */
  scopes?: Array<string>;
}

export interface AuthDeleteParams {
  projectId: string;
}

export interface AuthConfirmParams {
  token?: string;
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

export interface AuthSettingsParams {
  accessTokenLifetimeMinutes?: number;

  allowedRedirectUrls?: Array<string>;

  allowPasswordRecovery?: boolean;

  allowSignUp?: boolean;

  lockoutDurationMinutes?: number;

  maxSignInAttempts?: number;

  mfaEnabled?: boolean;

  mfaEnforced?: boolean;

  minPasswordLength?: number;

  refreshTokenLifetimeDays?: number;

  requireEmailVerification?: boolean;

  requireNumbers?: boolean;

  requirePhoneVerification?: boolean;

  requireSpecialChars?: boolean;

  requireUppercase?: boolean;

  singleSessionMode?: boolean;

  userTableAutoCreate?: boolean;

  userTableName?: string | null;

  userTableSyncFields?: Array<string>;
}

export interface AuthSignupParams {
  email?: string;

  metadata?: { [key: string]: unknown };

  password?: string;

  phone?: string;
}

export declare namespace Auth {
  export {
    type AuthUpdateResponse as AuthUpdateResponse,
    type AuthConfirmResponse as AuthConfirmResponse,
    type AuthForgotPasswordResponse as AuthForgotPasswordResponse,
    type AuthLoginResponse as AuthLoginResponse,
    type AuthResetPasswordResponse as AuthResetPasswordResponse,
    type AuthSettingsResponse as AuthSettingsResponse,
    type AuthSignupResponse as AuthSignupResponse,
    type AuthUpdateParams as AuthUpdateParams,
    type AuthDeleteParams as AuthDeleteParams,
    type AuthConfirmParams as AuthConfirmParams,
    type AuthForgotPasswordParams as AuthForgotPasswordParams,
    type AuthLoginParams as AuthLoginParams,
    type AuthResetPasswordParams as AuthResetPasswordParams,
    type AuthSettingsParams as AuthSettingsParams,
    type AuthSignupParams as AuthSignupParams
  };
}
