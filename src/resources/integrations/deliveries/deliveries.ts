// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as EventAPI from './event';
import { BaseEvent, Event, EventRetrieveResponse } from './event';
import * as RetryAPI from './retry';
import { BaseRetry, Retry, RetryRetryResponse } from './retry';
import * as SubscriptionAPI from './subscription';
import { BaseSubscription, Subscription, SubscriptionRetrieveResponse } from './subscription';

export class BaseDeliveries extends APIResource {
  static override readonly _key: readonly ['integrations', 'deliveries'] = Object.freeze([
    'integrations',
    'deliveries',
  ] as const);
}
export class Deliveries extends BaseDeliveries {
  event: EventAPI.Event = new EventAPI.Event(this._client);
  retry: RetryAPI.Retry = new RetryAPI.Retry(this._client);
  subscription: SubscriptionAPI.Subscription = new SubscriptionAPI.Subscription(this._client);
}

Deliveries.Event = Event;
Deliveries.BaseEvent = BaseEvent;
Deliveries.Retry = Retry;
Deliveries.BaseRetry = BaseRetry;
Deliveries.Subscription = Subscription;
Deliveries.BaseSubscription = BaseSubscription;

export declare namespace Deliveries {
  export { Event as Event, BaseEvent as BaseEvent, type EventRetrieveResponse as EventRetrieveResponse };

  export { Retry as Retry, BaseRetry as BaseRetry, type RetryRetryResponse as RetryRetryResponse };

  export {
    Subscription as Subscription,
    BaseSubscription as BaseSubscription,
    type SubscriptionRetrieveResponse as SubscriptionRetrieveResponse,
  };
}
