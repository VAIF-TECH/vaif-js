// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AnalyticsAPI from './analytics/analytics';
import { Analytics, BaseAnalytics } from './analytics/analytics';
import * as DeliveriesAPI from './deliveries/deliveries';
import { BaseDeliveries, Deliveries } from './deliveries/deliveries';
import * as DlqAPI from './dlq/dlq';
import { BaseDlq, Dlq } from './dlq/dlq';
import * as SubscriptionsAPI from './subscriptions/subscriptions';
import { BaseSubscriptions, SubscriptionCreateParams, SubscriptionCreateResponse, SubscriptionDeleteResponse, SubscriptionUpdateResponse, Subscriptions } from './subscriptions/subscriptions';

export class BaseIntegrations extends APIResource {
  static override readonly _key: readonly ['integrations'] = Object.freeze(['integrations'] as const)

}
export class Integrations extends BaseIntegrations {
  analytics: AnalyticsAPI.Analytics = new AnalyticsAPI.Analytics(this._client);
  deliveries: DeliveriesAPI.Deliveries = new DeliveriesAPI.Deliveries(this._client);
  dlq: DlqAPI.Dlq = new DlqAPI.Dlq(this._client);
  subscriptions: SubscriptionsAPI.Subscriptions = new SubscriptionsAPI.Subscriptions(this._client);
}

Integrations.Analytics = Analytics;
Integrations.BaseAnalytics = BaseAnalytics;
Integrations.Deliveries = Deliveries;
Integrations.BaseDeliveries = BaseDeliveries;
Integrations.Dlq = Dlq;
Integrations.BaseDlq = BaseDlq;
Integrations.Subscriptions = Subscriptions;
Integrations.BaseSubscriptions = BaseSubscriptions;

export declare namespace Integrations {
  export {
    Analytics as Analytics,
    BaseAnalytics as BaseAnalytics
  };

  export {
    Deliveries as Deliveries,
    BaseDeliveries as BaseDeliveries
  };

  export {
    Dlq as Dlq,
    BaseDlq as BaseDlq
  };

  export {
    Subscriptions as Subscriptions,
    BaseSubscriptions as BaseSubscriptions,
    type SubscriptionCreateResponse as SubscriptionCreateResponse,
    type SubscriptionUpdateResponse as SubscriptionUpdateResponse,
    type SubscriptionDeleteResponse as SubscriptionDeleteResponse,
    type SubscriptionCreateParams as SubscriptionCreateParams
  };
}
