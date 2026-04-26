// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as EventsAPI from './events';
import { Events } from './events';
import * as StatsAPI from './stats';
import { Stats } from './stats';

export class Project extends APIResource {
  events: EventsAPI.Events = new EventsAPI.Events(this._client);
  stats: StatsAPI.Stats = new StatsAPI.Stats(this._client);
}

Project.Events = Events;
Project.Stats = Stats;

export declare namespace Project {
  export {
    Events as Events
  };

  export {
    Stats as Stats
  };
}
