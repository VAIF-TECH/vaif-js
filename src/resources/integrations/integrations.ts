// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AnalyticsAPI from './analytics/analytics';
import { Analytics } from './analytics/analytics';
import * as DeliveriesAPI from './deliveries/deliveries';
import { Deliveries } from './deliveries/deliveries';
import * as DlqAPI from './dlq/dlq';
import { Dlq } from './dlq/dlq';
import * as SubscriptionsAPI from './subscriptions/subscriptions';
import { SubscriptionCreateParams, SubscriptionCreateResponse, SubscriptionDeleteResponse, SubscriptionUpdateResponse, Subscriptions } from './subscriptions/subscriptions';

export class Integrations extends APIResource {
  analytics: AnalyticsAPI.Analytics = new AnalyticsAPI.Analytics(this._client);
  deliveries: DeliveriesAPI.Deliveries = new DeliveriesAPI.Deliveries(this._client);
  dlq: DlqAPI.Dlq = new DlqAPI.Dlq(this._client);
  subscriptions: SubscriptionsAPI.Subscriptions = new SubscriptionsAPI.Subscriptions(this._client);
}

Integrations.Analytics = Analytics;
Integrations.Deliveries = Deliveries;
Integrations.Dlq = Dlq;
Integrations.Subscriptions = Subscriptions;

export declare namespace Integrations {
  export {
    Analytics as Analytics
  };

  export {
    Deliveries as Deliveries
  };

  export {
    Dlq as Dlq
  };

  export {
    Subscriptions as Subscriptions,
    type SubscriptionCreateResponse as SubscriptionCreateResponse,
    type SubscriptionUpdateResponse as SubscriptionUpdateResponse,
    type SubscriptionDeleteResponse as SubscriptionDeleteResponse,
    type SubscriptionCreateParams as SubscriptionCreateParams
  };
}
