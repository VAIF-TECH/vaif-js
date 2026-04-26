// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Cli extends APIResource {
  /**
   * Approve a pending CLI auth session from the web app
   */
  approveCallback(
    body: CliApproveCallbackParams,
    options?: RequestOptions,
  ): APIPromise<CliApproveCallbackResponse> {
    return this._client.post('/auth/cli/callback', { body, ...options });
  }

  /**
   * Request a CLI auth session code — returns a code and browser URL for approval
   */
  authorize(options?: RequestOptions): APIPromise<CliAuthorizeResponse> {
    return this._client.post('/auth/cli/authorize', options);
  }

  /**
   * Authenticate CLI with email and password (fallback flow)
   */
  login(body: CliLoginParams, options?: RequestOptions): APIPromise<CliLoginResponse> {
    return this._client.post('/auth/cli/login', { body, ...options });
  }

  /**
   * Poll for CLI auth token after browser approval
   */
  pollToken(body: CliPollTokenParams, options?: RequestOptions): APIPromise<CliPollTokenResponse> {
    return this._client.post('/auth/cli/token', { body, ...options });
  }
}

export interface CliApproveCallbackResponse {
  ok: true;
}

export interface CliAuthorizeResponse {
  code: string;

  url: string;
}

export interface CliLoginResponse {
  accessToken: string;

  expiresIn: number;

  ok: true;

  refreshToken: string;

  user: CliLoginResponse.User;
}

export namespace CliLoginResponse {
  export interface User {
    id: string;

    email: string;

    name?: string | null;
  }
}

export type CliPollTokenResponse = CliPollTokenResponse.UnionMember0 | CliPollTokenResponse.UnionMember1;

export namespace CliPollTokenResponse {
  export interface UnionMember0 {
    ok: false;

    status: 'pending';
  }

  export interface UnionMember1 {
    accessToken: string;

    expiresIn: number;

    ok: true;

    user: UnionMember1.User;
  }

  export namespace UnionMember1 {
    export interface User {
      id: string;

      email: string;

      name?: string | null;
    }
  }
}

export interface CliApproveCallbackParams {
  code: string;
}

export interface CliLoginParams {
  email: string;

  password: string;
}

export interface CliPollTokenParams {
  code: string;
}

export declare namespace Cli {
  export {
    type CliApproveCallbackResponse as CliApproveCallbackResponse,
    type CliAuthorizeResponse as CliAuthorizeResponse,
    type CliLoginResponse as CliLoginResponse,
    type CliPollTokenResponse as CliPollTokenResponse,
    type CliApproveCallbackParams as CliApproveCallbackParams,
    type CliLoginParams as CliLoginParams,
    type CliPollTokenParams as CliPollTokenParams,
  };
}
