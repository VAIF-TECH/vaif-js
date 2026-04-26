// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Admin extends APIResource {
  /**
   * Check whether the current user has admin access
   */
  list(options?: RequestOptions): APIPromise<AdminListResponse> {
    return this._client.get('/auth/me/admin', options);
  }
}

export interface AdminListResponse {
  isAdmin: boolean;

  ok: true;

  permissions?: Array<string>;

  role?: string;
}

export declare namespace Admin {
  export {
    type AdminListResponse as AdminListResponse
  };
}
