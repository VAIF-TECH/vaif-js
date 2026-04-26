// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Revoke extends APIResource {
  /**
   * Revoke a deployment token
   */
  revoke(tokenID: string, options?: RequestOptions): APIPromise<RevokeRevokeResponse> {
    return this._client.post(path`/deployments/tokens/${tokenID}/revoke`, options);
  }
}

export interface RevokeRevokeResponse {
  ok: true;
}

export declare namespace Revoke {
  export {
    type RevokeRevokeResponse as RevokeRevokeResponse
  };
}
