// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AtomAPI from './atom';
import { Atom } from './atom';
import * as IncidentsAPI from './incidents';
import { Incidents } from './incidents';
import * as RssAPI from './rss';
import { Rss } from './rss';
import * as SubscribeAPI from './subscribe';
import { Subscribe, SubscribeCreateParams, SubscribeCreateResponse } from './subscribe';
import * as UnsubscribeAPI from './unsubscribe';
import { Unsubscribe, UnsubscribeRetrieveResponse } from './unsubscribe';
import * as UptimeAPI from './uptime';
import { Uptime, UptimeRetrieveResponse } from './uptime';
import * as SubscribersAPI from './subscribers/subscribers';
import { Subscribers } from './subscribers/subscribers';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Status extends APIResource {
  atom: AtomAPI.Atom = new AtomAPI.Atom(this._client);
  incidents: IncidentsAPI.Incidents = new IncidentsAPI.Incidents(this._client);
  rss: RssAPI.Rss = new RssAPI.Rss(this._client);
  subscribe: SubscribeAPI.Subscribe = new SubscribeAPI.Subscribe(this._client);
  subscribers: SubscribersAPI.Subscribers = new SubscribersAPI.Subscribers(this._client);
  unsubscribe: UnsubscribeAPI.Unsubscribe = new UnsubscribeAPI.Unsubscribe(this._client);
  uptime: UptimeAPI.Uptime = new UptimeAPI.Uptime(this._client);

  /**
   * Get platform status
   */
  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/status', { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}

Status.Atom = Atom;
Status.Incidents = Incidents;
Status.Rss = Rss;
Status.Subscribe = Subscribe;
Status.Subscribers = Subscribers;
Status.Unsubscribe = Unsubscribe;
Status.Uptime = Uptime;

export declare namespace Status {
  export {
    Atom as Atom
  };

  export {
    Incidents as Incidents
  };

  export {
    Rss as Rss
  };

  export {
    Subscribe as Subscribe,
    type SubscribeCreateResponse as SubscribeCreateResponse,
    type SubscribeCreateParams as SubscribeCreateParams
  };

  export {
    Subscribers as Subscribers
  };

  export {
    Unsubscribe as Unsubscribe,
    type UnsubscribeRetrieveResponse as UnsubscribeRetrieveResponse
  };

  export {
    Uptime as Uptime,
    type UptimeRetrieveResponse as UptimeRetrieveResponse
  };
}
