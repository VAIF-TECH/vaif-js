// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseRetry extends APIResource {
  static override readonly _key: readonly ['integrations', 'deliveries', 'retry'] = Object.freeze([
    'integrations',
    'deliveries',
    'retry',
  ] as const);

  /**
   * Retry a failed webhook delivery
   */
  retry(deliveryID: string, options?: RequestOptions): APIPromise<RetryRetryResponse> {
    return this._client.post(path`/integrations/deliveries/${deliveryID}/retry`, options);
  }
}
export class Retry extends BaseRetry {}

export interface RetryRetryResponse {
  ok: true;
}

export declare namespace Retry {
  export { type RetryRetryResponse as RetryRetryResponse };
}
