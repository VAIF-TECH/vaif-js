// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class BaseLogout extends APIResource {
  static override readonly _key: readonly ['auth', 'logout'] = Object.freeze(['auth', 'logout'] as const)

  /**
   * Invalidate the current session and clear the refresh token cookie
   */
  create(options?: RequestOptions): APIPromise<LogoutCreateResponse> {
    return this._client.post('/auth/logout', options);
  }
}
export class Logout extends BaseLogout {

}

export interface LogoutCreateResponse {
  ok: true;
}

export declare namespace Logout {
  export {
    type LogoutCreateResponse as LogoutCreateResponse
  };
}
