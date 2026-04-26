// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Subscription extends APIResource {
  /**
   * List deliveries for a subscription
   */
  retrieve(subscriptionID: string, options?: RequestOptions): APIPromise<SubscriptionRetrieveResponse> {
    return this._client.get(path`/integrations/deliveries/subscription/${subscriptionID}`, options);
  }
}

export interface SubscriptionRetrieveResponse {
  deliveries: Array<unknown>;
}

export declare namespace Subscription {
  export {
    type SubscriptionRetrieveResponse as SubscriptionRetrieveResponse
  };
}
