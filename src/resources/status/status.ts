// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as SubscribersAPI from './subscribers';
import { Subscribers } from './subscribers';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Status extends APIResource {
  subscribers: SubscribersAPI.Subscribers = new SubscribersAPI.Subscribers(this._client);

  /**
   * Get platform status
   */
  retrieve(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/status', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Atom feed for incidents
   */
  getAtomFeed(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/status/atom', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * RSS feed for incidents
   */
  getRssFeed(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/status/rss', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get uptime history for a component
   */
  getUptime(componentID: string, options?: RequestOptions): APIPromise<StatusGetUptimeResponse> {
    return this._client.get(path`/status/uptime/${componentID}`, options);
  }

  /**
   * List recent public incidents
   */
  listIncidents(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/status/incidents', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Subscribe to status updates
   */
  subscribe(body: StatusSubscribeParams, options?: RequestOptions): APIPromise<StatusSubscribeResponse> {
    return this._client.post('/status/subscribe', { body, ...options });
  }

  /**
   * Unsubscribe from status updates
   */
  unsubscribe(token: string, options?: RequestOptions): APIPromise<StatusUnsubscribeResponse> {
    return this._client.get(path`/status/unsubscribe/${token}`, options);
  }
}

export interface StatusGetUptimeResponse {
  componentId: string;

  days: number;

  history: Array<StatusGetUptimeResponse.History>;
}

export namespace StatusGetUptimeResponse {
  export interface History {
    avgLatency: number | null;

    date: string | (string & {});

    uptime: number;
  }
}

export interface StatusSubscribeResponse {
  message: string;

  ok: true;
}

export interface StatusUnsubscribeResponse {
  message: string;

  ok: true;
}

export interface StatusSubscribeParams {
  email: string;
}

Status.Subscribers = Subscribers;

export declare namespace Status {
  export {
    type StatusGetUptimeResponse as StatusGetUptimeResponse,
    type StatusSubscribeResponse as StatusSubscribeResponse,
    type StatusUnsubscribeResponse as StatusUnsubscribeResponse,
    type StatusSubscribeParams as StatusSubscribeParams,
  };

  export { Subscribers as Subscribers };
}
