// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Deliveries extends APIResource {
  /**
   * List deliveries for an event
   */
  listForEvent(eventID: string, options?: RequestOptions): APIPromise<DeliveryListForEventResponse> {
    return this._client.get(path`/integrations/deliveries/event/${eventID}`, options);
  }

  /**
   * List deliveries for a subscription
   */
  listForSubscription(
    subscriptionID: string,
    options?: RequestOptions,
  ): APIPromise<DeliveryListForSubscriptionResponse> {
    return this._client.get(path`/integrations/deliveries/subscription/${subscriptionID}`, options);
  }

  /**
   * Retry a failed webhook delivery
   */
  retry(deliveryID: string, options?: RequestOptions): APIPromise<DeliveryRetryResponse> {
    return this._client.post(path`/integrations/deliveries/${deliveryID}/retry`, options);
  }
}

export interface DeliveryListForEventResponse {
  deliveries: Array<unknown>;
}

export interface DeliveryListForSubscriptionResponse {
  deliveries: Array<unknown>;
}

export interface DeliveryRetryResponse {
  ok: true;
}

export declare namespace Deliveries {
  export {
    type DeliveryListForEventResponse as DeliveryListForEventResponse,
    type DeliveryListForSubscriptionResponse as DeliveryListForSubscriptionResponse,
    type DeliveryRetryResponse as DeliveryRetryResponse,
  };
}
