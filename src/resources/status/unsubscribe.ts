// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Unsubscribe extends APIResource {
  /**
   * Unsubscribe from status updates
   */
  retrieve(token: string, options?: RequestOptions): APIPromise<UnsubscribeRetrieveResponse> {
    return this._client.get(path`/status/unsubscribe/${token}`, options);
  }
}

export interface UnsubscribeRetrieveResponse {
  message: string;

  ok: true;
}

export declare namespace Unsubscribe {
  export {
    type UnsubscribeRetrieveResponse as UnsubscribeRetrieveResponse
  };
}
