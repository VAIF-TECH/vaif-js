// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Authorize extends APIResource {
  /**
   * Request a CLI auth session code — returns a code and browser URL for approval
   */
  create(options?: RequestOptions): APIPromise<AuthorizeCreateResponse> {
    return this._client.post('/auth/cli/authorize', options);
  }
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
