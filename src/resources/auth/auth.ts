// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CliAPI from './cli';
import {
  Cli,
  CliApproveCallbackParams,
  CliApproveCallbackResponse,
  CliAuthorizeResponse,
  CliLoginParams,
  CliLoginResponse,
  CliPollTokenParams,
  CliPollTokenResponse,
} from './cli';
import * as OAuthAPI from './oauth';
import { OAuth, OAuthHandleCallbackParams, OAuthInitiateParams, OAuthListProvidersResponse } from './oauth';
import * as VerifyEmailAPI from './verify-email';
import {
  VerifyEmail,
  VerifyEmailConfirmParams,
  VerifyEmailConfirmResponse,
  VerifyEmailSendResponse,
} from './verify-email';
import * as MeAPI from './me/me';
import {
  Me,
  MeCheckAdminResponse,
  MeGetContextResponse,
  MeRetrieveResponse,
  MeUpdateParams,
  MeUpdateResponse,
} from './me/me';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Auth extends APIResource {
  me: MeAPI.Me = new MeAPI.Me(this._client);
  verifyEmail: VerifyEmailAPI.VerifyEmail = new VerifyEmailAPI.VerifyEmail(this._client);
  oauth: OAuthAPI.OAuth = new OAuthAPI.OAuth(this._client);
  cli: CliAPI.Cli = new CliAPI.Cli(this._client);

  /**
   * Authenticate with email and password
   */
  login(body: AuthLoginParams, options?: RequestOptions): APIPromise<AuthLoginResponse> {
    return this._client.post('/auth/login', { body, ...options });
  }

  /**
   * Invalidate the current session and clear the refresh token cookie
   */
  logout(options?: RequestOptions): APIPromise<AuthLogoutResponse> {
    return this._client.post('/auth/logout', options);
  }

  /**
   * Rotate the refresh token and issue a new access token
   */
  refreshToken(options?: RequestOptions): APIPromise<AuthRefreshTokenResponse> {
    return this._client.post('/auth/refresh', options);
  }

  /**
   * Request a password reset email
   */
  requestPasswordReset(
    body: AuthRequestPasswordResetParams,
    options?: RequestOptions,
  ): APIPromise<AuthRequestPasswordResetResponse> {
    return this._client.post('/auth/forgot-password', { body, ...options });
  }

  /**
   * Submit a new password using a reset token
   */
  resetPassword(
    body: AuthResetPasswordParams,
    options?: RequestOptions,
  ): APIPromise<AuthResetPasswordResponse> {
    return this._client.post('/auth/reset-password', { body, ...options });
  }

  /**
   * Register a new user account
   */
  signup(body: AuthSignupParams, options?: RequestOptions): APIPromise<AuthSignupResponse> {
    return this._client.post('/auth/signup', { body, ...options });
  }
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

    createdAt: (string & {}) | string;

    email: string;

    avatarUrl?: string | null;

    name?: string | null;

    phone?: string | null;

    timezone?: string | null;
  }
}

export interface AuthLogoutResponse {
  ok: true;
}

export interface AuthRefreshTokenResponse {
  accessToken: string;

  expiresIn: number;

  ok: true;

  user: AuthRefreshTokenResponse.User;
}

export namespace AuthRefreshTokenResponse {
  export interface User {
    id: string;

    createdAt: (string & {}) | string;

    email: string;

    avatarUrl?: string | null;

    name?: string | null;

    phone?: string | null;

    timezone?: string | null;
  }
}

export interface AuthRequestPasswordResetResponse {
  message: string;

  ok: true;
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

    createdAt: (string & {}) | string;

    email: string;

    avatarUrl?: string | null;

    name?: string | null;

    phone?: string | null;

    timezone?: string | null;
  }
}

export interface AuthLoginParams {
  email: string;

  password: string;
}

export interface AuthRequestPasswordResetParams {
  email: string;
}

export interface AuthResetPasswordParams {
  token: string;

  password: string;
}

export interface AuthSignupParams {
  email: string;

  password: string;

  name?: string;
}

Auth.Me = Me;
Auth.VerifyEmail = VerifyEmail;
Auth.OAuth = OAuth;
Auth.Cli = Cli;

export declare namespace Auth {
  export {
    type AuthLoginResponse as AuthLoginResponse,
    type AuthLogoutResponse as AuthLogoutResponse,
    type AuthRefreshTokenResponse as AuthRefreshTokenResponse,
    type AuthRequestPasswordResetResponse as AuthRequestPasswordResetResponse,
    type AuthResetPasswordResponse as AuthResetPasswordResponse,
    type AuthSignupResponse as AuthSignupResponse,
    type AuthLoginParams as AuthLoginParams,
    type AuthRequestPasswordResetParams as AuthRequestPasswordResetParams,
    type AuthResetPasswordParams as AuthResetPasswordParams,
    type AuthSignupParams as AuthSignupParams,
  };

  export {
    Me as Me,
    type MeRetrieveResponse as MeRetrieveResponse,
    type MeUpdateResponse as MeUpdateResponse,
    type MeCheckAdminResponse as MeCheckAdminResponse,
    type MeGetContextResponse as MeGetContextResponse,
    type MeUpdateParams as MeUpdateParams,
  };

  export {
    VerifyEmail as VerifyEmail,
    type VerifyEmailConfirmResponse as VerifyEmailConfirmResponse,
    type VerifyEmailSendResponse as VerifyEmailSendResponse,
    type VerifyEmailConfirmParams as VerifyEmailConfirmParams,
  };

  export {
    OAuth as OAuth,
    type OAuthListProvidersResponse as OAuthListProvidersResponse,
    type OAuthHandleCallbackParams as OAuthHandleCallbackParams,
    type OAuthInitiateParams as OAuthInitiateParams,
  };

  export {
    Cli as Cli,
    type CliApproveCallbackResponse as CliApproveCallbackResponse,
    type CliAuthorizeResponse as CliAuthorizeResponse,
    type CliLoginResponse as CliLoginResponse,
    type CliPollTokenResponse as CliPollTokenResponse,
    type CliApproveCallbackParams as CliApproveCallbackParams,
    type CliLoginParams as CliLoginParams,
    type CliPollTokenParams as CliPollTokenParams,
  };
}
