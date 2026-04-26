// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as EnableAllAPI from './enable-all';
import { EnableAll } from './enable-all';
import * as InstallAPI from './install';
import { Install } from './install';
import * as ConnectionsAPI from './connections/connections';
import { Connections } from './connections/connections';
import * as EventsAPI from './events/events';
import { Events } from './events/events';
import * as StatsAPI from './stats/stats';
import { Stats } from './stats/stats';
import * as StatusAPI from './status/status';
import { Status } from './status/status';
import * as SubscriptionsAPI from './subscriptions/subscriptions';
import { Subscriptions } from './subscriptions/subscriptions';

export class Realtime extends APIResource {
  connections: ConnectionsAPI.Connections = new ConnectionsAPI.Connections(this._client);
  enableAll: EnableAllAPI.EnableAll = new EnableAllAPI.EnableAll(this._client);
  events: EventsAPI.Events = new EventsAPI.Events(this._client);
  install: InstallAPI.Install = new InstallAPI.Install(this._client);
  stats: StatsAPI.Stats = new StatsAPI.Stats(this._client);
  status: StatusAPI.Status = new StatusAPI.Status(this._client);
  subscriptions: SubscriptionsAPI.Subscriptions = new SubscriptionsAPI.Subscriptions(this._client);
}

Realtime.Connections = Connections;
Realtime.EnableAll = EnableAll;
Realtime.Events = Events;
Realtime.Install = Install;
Realtime.Stats = Stats;
Realtime.Status = Status;
Realtime.Subscriptions = Subscriptions;

export declare namespace Realtime {
  export {
    Connections as Connections
  };

  export {
    EnableAll as EnableAll
  };

  export {
    Events as Events
  };

  export {
    Install as Install
  };

  export {
    Stats as Stats
  };

  export {
    Status as Status
  };

  export {
    Subscriptions as Subscriptions
  };
}
