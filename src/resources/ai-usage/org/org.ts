// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as BreakdownAPI from './breakdown';
import { Breakdown } from './breakdown';
import * as ExhaustionEventsAPI from './exhaustion-events';
import { ExhaustionEvents } from './exhaustion-events';
import * as HistoryAPI from './history';
import { History } from './history';
import * as RecentAPI from './recent';
import { Recent } from './recent';
import * as RollupsAPI from './rollups';
import { Rollups } from './rollups';
import * as SummaryAPI from './summary';
import { Summary } from './summary';

export class Org extends APIResource {
  breakdown: BreakdownAPI.Breakdown = new BreakdownAPI.Breakdown(this._client);
  exhaustionEvents: ExhaustionEventsAPI.ExhaustionEvents = new ExhaustionEventsAPI.ExhaustionEvents(this._client);
  history: HistoryAPI.History = new HistoryAPI.History(this._client);
  recent: RecentAPI.Recent = new RecentAPI.Recent(this._client);
  rollups: RollupsAPI.Rollups = new RollupsAPI.Rollups(this._client);
  summary: SummaryAPI.Summary = new SummaryAPI.Summary(this._client);
}

Org.Breakdown = Breakdown;
Org.ExhaustionEvents = ExhaustionEvents;
Org.History = History;
Org.Recent = Recent;
Org.Rollups = Rollups;
Org.Summary = Summary;

export declare namespace Org {
  export {
    Breakdown as Breakdown
  };

  export {
    ExhaustionEvents as ExhaustionEvents
  };

  export {
    History as History
  };

  export {
    Recent as Recent
  };

  export {
    Rollups as Rollups
  };

  export {
    Summary as Summary
  };
}
