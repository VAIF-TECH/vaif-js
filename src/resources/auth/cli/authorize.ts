// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class BaseAuthorize extends APIResource {
  static override readonly _key: readonly ['auth', 'cli', 'authorize'] = Object.freeze(['auth', 'cli', 'authorize'] as const)

  /**
   * Request a CLI auth session code — returns a code and browser URL for approval
   */
  create(options?: RequestOptions): APIPromise<AuthorizeCreateResponse> {
    return this._client.post('/auth/cli/authorize', options);
  }
}
export class Authorize extends BaseAuthorize {

}

export interface AuthorizeCreateResponse {
  code: string;

  url: string;
}

export declare namespace Authorize {
  export {
    type AuthorizeCreateResponse as AuthorizeCreateResponse
  };
}
