// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as EventAPI from './event';
import { Event, EventRetrieveResponse } from './event';
import * as RetryAPI from './retry';
import { Retry, RetryRetryResponse } from './retry';
import * as SubscriptionAPI from './subscription';
import { Subscription, SubscriptionRetrieveResponse } from './subscription';

export class Deliveries extends APIResource {
  event: EventAPI.Event = new EventAPI.Event(this._client);
  retry: RetryAPI.Retry = new RetryAPI.Retry(this._client);
  subscription: SubscriptionAPI.Subscription = new SubscriptionAPI.Subscription(this._client);
}

Deliveries.Event = Event;
Deliveries.Retry = Retry;
Deliveries.Subscription = Subscription;

export declare namespace Deliveries {
  export {
    Event as Event,
    type EventRetrieveResponse as EventRetrieveResponse
  };

  export {
    Retry as Retry,
    type RetryRetryResponse as RetryRetryResponse
  };

  export {
    Subscription as Subscription,
    type SubscriptionRetrieveResponse as SubscriptionRetrieveResponse
  };
}
