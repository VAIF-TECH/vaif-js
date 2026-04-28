// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AtomAPI from './atom';
import { Atom, BaseAtom } from './atom';
import * as IncidentsAPI from './incidents';
import { BaseIncidents, Incidents } from './incidents';
import * as RssAPI from './rss';
import { BaseRss, Rss } from './rss';
import * as SubscribeAPI from './subscribe';
import { BaseSubscribe, Subscribe, SubscribeCreateParams, SubscribeCreateResponse } from './subscribe';
import * as UnsubscribeAPI from './unsubscribe';
import { BaseUnsubscribe, Unsubscribe, UnsubscribeRetrieveResponse } from './unsubscribe';
import * as UptimeAPI from './uptime';
import { BaseUptime, Uptime, UptimeRetrieveResponse } from './uptime';
import * as SubscribersAPI from './subscribers/subscribers';
import { BaseSubscribers, Subscribers } from './subscribers/subscribers';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class BaseStatus extends APIResource {
  static override readonly _key: readonly ['status'] = Object.freeze(['status'] as const);

  /**
   * Get platform status
   */
  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/status', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
export class Status extends BaseStatus {
  atom: AtomAPI.Atom = new AtomAPI.Atom(this._client);
  incidents: IncidentsAPI.Incidents = new IncidentsAPI.Incidents(this._client);
  rss: RssAPI.Rss = new RssAPI.Rss(this._client);
  subscribe: SubscribeAPI.Subscribe = new SubscribeAPI.Subscribe(this._client);
  subscribers: SubscribersAPI.Subscribers = new SubscribersAPI.Subscribers(this._client);
  unsubscribe: UnsubscribeAPI.Unsubscribe = new UnsubscribeAPI.Unsubscribe(this._client);
  uptime: UptimeAPI.Uptime = new UptimeAPI.Uptime(this._client);
}

Status.Atom = Atom;
Status.BaseAtom = BaseAtom;
Status.Incidents = Incidents;
Status.BaseIncidents = BaseIncidents;
Status.Rss = Rss;
Status.BaseRss = BaseRss;
Status.Subscribe = Subscribe;
Status.BaseSubscribe = BaseSubscribe;
Status.Subscribers = Subscribers;
Status.BaseSubscribers = BaseSubscribers;
Status.Unsubscribe = Unsubscribe;
Status.BaseUnsubscribe = BaseUnsubscribe;
Status.Uptime = Uptime;
Status.BaseUptime = BaseUptime;

export declare namespace Status {
  export { Atom as Atom, BaseAtom as BaseAtom };

  export { Incidents as Incidents, BaseIncidents as BaseIncidents };

  export { Rss as Rss, BaseRss as BaseRss };

  export {
    Subscribe as Subscribe,
    BaseSubscribe as BaseSubscribe,
    type SubscribeCreateResponse as SubscribeCreateResponse,
    type SubscribeCreateParams as SubscribeCreateParams,
  };

  export { Subscribers as Subscribers, BaseSubscribers as BaseSubscribers };

  export {
    Unsubscribe as Unsubscribe,
    BaseUnsubscribe as BaseUnsubscribe,
    type UnsubscribeRetrieveResponse as UnsubscribeRetrieveResponse,
  };

  export {
    Uptime as Uptime,
    BaseUptime as BaseUptime,
    type UptimeRetrieveResponse as UptimeRetrieveResponse,
  };
}
