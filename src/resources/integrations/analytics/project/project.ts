// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as EventsAPI from './events';
import { BaseEvents, Events } from './events';
import * as StatsAPI from './stats';
import { BaseStats, Stats } from './stats';

export class BaseProject extends APIResource {
  static override readonly _key: readonly ['integrations', 'analytics', 'project'] = Object.freeze(['integrations', 'analytics', 'project'] as const)

}
export class Project extends BaseProject {
  events: EventsAPI.Events = new EventsAPI.Events(this._client);
  stats: StatsAPI.Stats = new StatsAPI.Stats(this._client);
}

Project.Events = Events;
Project.BaseEvents = BaseEvents;
Project.Stats = Stats;
Project.BaseStats = BaseStats;

export declare namespace Project {
  export {
    Events as Events,
    BaseEvents as BaseEvents
  };

  export {
    Stats as Stats,
    BaseStats as BaseStats
  };
}
