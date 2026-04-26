// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ConnectionsAPI from './connections';
import { Connections } from './connections';
import * as EventsAPI from './events';
import { Events } from './events';
import * as StatsAPI from './stats';
import { Stats } from './stats';
import * as StatusAPI from './status';
import { Status } from './status';
import * as SubscriptionsAPI from './subscriptions';
import { Subscriptions } from './subscriptions';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Realtime extends APIResource {
  status: StatusAPI.Status = new StatusAPI.Status(this._client);
  stats: StatsAPI.Stats = new StatsAPI.Stats(this._client);
  connections: ConnectionsAPI.Connections = new ConnectionsAPI.Connections(this._client);
  subscriptions: SubscriptionsAPI.Subscriptions = new SubscriptionsAPI.Subscriptions(this._client);
  events: EventsAPI.Events = new EventsAPI.Events(this._client);

  enableAll(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/realtime/enable-all', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  install(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/realtime/install', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

Realtime.Status = Status;
Realtime.Stats = Stats;
Realtime.Connections = Connections;
Realtime.Subscriptions = Subscriptions;
Realtime.Events = Events;

export declare namespace Realtime {
  export { Status as Status };

  export { Stats as Stats };

  export { Connections as Connections };

  export { Subscriptions as Subscriptions };

  export { Events as Events };
}
