// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class BaseContext extends APIResource {
  static override readonly _key: readonly ['auth', 'me', 'context'] = Object.freeze(['auth', 'me', 'context'] as const)

  /**
   * Get current user profile, org memberships, and admin status in one call
   */
  list(options?: RequestOptions): APIPromise<ContextListResponse> {
    return this._client.get('/auth/me/context', options);
  }
}
export class Context extends BaseContext {

}

export interface ContextListResponse {
  isAdmin: boolean;

  ok: true;

  orgs: Array<ContextListResponse.Org>;

  user: ContextListResponse.User;
}

export namespace ContextListResponse {
  export interface Org {
    orgId: string;

    orgName: string;

    plan: string;

    role: string;
  }

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

export declare namespace Context {
  export {
    type ContextListResponse as ContextListResponse
  };
}
