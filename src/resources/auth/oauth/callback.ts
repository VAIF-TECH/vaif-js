// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Callback extends APIResource {
  /**
   * Handle OAuth redirect from provider — redirects to the app with a token or error
   */
  getCallback(provider: 'google' | 'github' | 'microsoft' | 'apple', query: CallbackGetCallbackParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/auth/oauth/${provider}/callback`, { query, ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}

export interface CallbackGetCallbackParams {
  code?: string;

  error?: string;

  error_description?: string;

  state?: string;
}

export declare namespace Callback {
  export {
    type CallbackGetCallbackParams as CallbackGetCallbackParams
  };
}
