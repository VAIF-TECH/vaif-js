// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as DeliveriesAPI from './deliveries';
import {
  Deliveries,
  DeliveryListForEventResponse,
  DeliveryListForSubscriptionResponse,
  DeliveryRetryResponse,
} from './deliveries';
import * as DlqAPI from './dlq';
import { Dlq, DlqListForProjectResponse } from './dlq';
import * as SubscriptionsAPI from './subscriptions';
import {
  SubscriptionCreateParams,
  SubscriptionCreateResponse,
  SubscriptionDeleteResponse,
  SubscriptionListForProjectResponse,
  SubscriptionSendTestEventResponse,
  SubscriptionUpdateResponse,
  Subscriptions,
} from './subscriptions';
import * as AnalyticsAPI from './analytics/analytics';
import { Analytics } from './analytics/analytics';

export class Integrations extends APIResource {
  subscriptions: SubscriptionsAPI.Subscriptions = new SubscriptionsAPI.Subscriptions(this._client);
  deliveries: DeliveriesAPI.Deliveries = new DeliveriesAPI.Deliveries(this._client);
  dlq: DlqAPI.Dlq = new DlqAPI.Dlq(this._client);
  analytics: AnalyticsAPI.Analytics = new AnalyticsAPI.Analytics(this._client);
}

Integrations.Subscriptions = Subscriptions;
Integrations.Deliveries = Deliveries;
Integrations.Dlq = Dlq;
Integrations.Analytics = Analytics;

export declare namespace Integrations {
  export {
    Subscriptions as Subscriptions,
    type SubscriptionCreateResponse as SubscriptionCreateResponse,
    type SubscriptionUpdateResponse as SubscriptionUpdateResponse,
    type SubscriptionDeleteResponse as SubscriptionDeleteResponse,
    type SubscriptionListForProjectResponse as SubscriptionListForProjectResponse,
    type SubscriptionSendTestEventResponse as SubscriptionSendTestEventResponse,
    type SubscriptionCreateParams as SubscriptionCreateParams,
  };

  export {
    Deliveries as Deliveries,
    type DeliveryListForEventResponse as DeliveryListForEventResponse,
    type DeliveryListForSubscriptionResponse as DeliveryListForSubscriptionResponse,
    type DeliveryRetryResponse as DeliveryRetryResponse,
  };

  export { Dlq as Dlq, type DlqListForProjectResponse as DlqListForProjectResponse };

  export { Analytics as Analytics };
}
