// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as EnableAllAPI from './enable-all';
import { BaseEnableAll, EnableAll } from './enable-all';
import * as InstallAPI from './install';
import { BaseInstall, Install } from './install';
import * as ConnectionsAPI from './connections/connections';
import { BaseConnections, Connections } from './connections/connections';
import * as EventsAPI from './events/events';
import { BaseEvents, Events } from './events/events';
import * as StatsAPI from './stats/stats';
import { BaseStats, Stats } from './stats/stats';
import * as StatusAPI from './status/status';
import { BaseStatus, Status } from './status/status';
import * as SubscriptionsAPI from './subscriptions/subscriptions';
import { BaseSubscriptions, Subscriptions } from './subscriptions/subscriptions';

export class BaseRealtime extends APIResource {
  static override readonly _key: readonly ['realtime'] = Object.freeze(['realtime'] as const);
}
export class Realtime extends BaseRealtime {
  connections: ConnectionsAPI.Connections = new ConnectionsAPI.Connections(this._client);
  enableAll: EnableAllAPI.EnableAll = new EnableAllAPI.EnableAll(this._client);
  events: EventsAPI.Events = new EventsAPI.Events(this._client);
  install: InstallAPI.Install = new InstallAPI.Install(this._client);
  stats: StatsAPI.Stats = new StatsAPI.Stats(this._client);
  status: StatusAPI.Status = new StatusAPI.Status(this._client);
  subscriptions: SubscriptionsAPI.Subscriptions = new SubscriptionsAPI.Subscriptions(this._client);
}

Realtime.Connections = Connections;
Realtime.BaseConnections = BaseConnections;
Realtime.EnableAll = EnableAll;
Realtime.BaseEnableAll = BaseEnableAll;
Realtime.Events = Events;
Realtime.BaseEvents = BaseEvents;
Realtime.Install = Install;
Realtime.BaseInstall = BaseInstall;
Realtime.Stats = Stats;
Realtime.BaseStats = BaseStats;
Realtime.Status = Status;
Realtime.BaseStatus = BaseStatus;
Realtime.Subscriptions = Subscriptions;
Realtime.BaseSubscriptions = BaseSubscriptions;

export declare namespace Realtime {
  export { Connections as Connections, BaseConnections as BaseConnections };

  export { EnableAll as EnableAll, BaseEnableAll as BaseEnableAll };

  export { Events as Events, BaseEvents as BaseEvents };

  export { Install as Install, BaseInstall as BaseInstall };

  export { Stats as Stats, BaseStats as BaseStats };

  export { Status as Status, BaseStatus as BaseStatus };

  export { Subscriptions as Subscriptions, BaseSubscriptions as BaseSubscriptions };
}
