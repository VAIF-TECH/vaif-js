// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as BreakdownAPI from './breakdown';
import { BaseBreakdown, Breakdown } from './breakdown';
import * as ExhaustionEventsAPI from './exhaustion-events';
import { BaseExhaustionEvents, ExhaustionEvents } from './exhaustion-events';
import * as HistoryAPI from './history';
import { BaseHistory, History } from './history';
import * as RecentAPI from './recent';
import { BaseRecent, Recent } from './recent';
import * as RollupsAPI from './rollups';
import { BaseRollups, Rollups } from './rollups';
import * as SummaryAPI from './summary';
import { BaseSummary, Summary } from './summary';

export class BaseOrg extends APIResource {
  static override readonly _key: readonly ['aiUsage', 'org'] = Object.freeze(['aiUsage', 'org'] as const);
}
export class Org extends BaseOrg {
  breakdown: BreakdownAPI.Breakdown = new BreakdownAPI.Breakdown(this._client);
  exhaustionEvents: ExhaustionEventsAPI.ExhaustionEvents = new ExhaustionEventsAPI.ExhaustionEvents(
    this._client,
  );
  history: HistoryAPI.History = new HistoryAPI.History(this._client);
  recent: RecentAPI.Recent = new RecentAPI.Recent(this._client);
  rollups: RollupsAPI.Rollups = new RollupsAPI.Rollups(this._client);
  summary: SummaryAPI.Summary = new SummaryAPI.Summary(this._client);
}

Org.Breakdown = Breakdown;
Org.BaseBreakdown = BaseBreakdown;
Org.ExhaustionEvents = ExhaustionEvents;
Org.BaseExhaustionEvents = BaseExhaustionEvents;
Org.History = History;
Org.BaseHistory = BaseHistory;
Org.Recent = Recent;
Org.BaseRecent = BaseRecent;
Org.Rollups = Rollups;
Org.BaseRollups = BaseRollups;
Org.Summary = Summary;
Org.BaseSummary = BaseSummary;

export declare namespace Org {
  export { Breakdown as Breakdown, BaseBreakdown as BaseBreakdown };

  export { ExhaustionEvents as ExhaustionEvents, BaseExhaustionEvents as BaseExhaustionEvents };

  export { History as History, BaseHistory as BaseHistory };

  export { Recent as Recent, BaseRecent as BaseRecent };

  export { Rollups as Rollups, BaseRollups as BaseRollups };

  export { Summary as Summary, BaseSummary as BaseSummary };
}
