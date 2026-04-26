// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AuditAPI from './audit';
import { Audit, BaseAudit } from './audit';
import * as OverviewAPI from './overview';
import { BaseOverview, Overview } from './overview';

export class BaseSecurity extends APIResource {
  static override readonly _key: readonly ['security'] = Object.freeze(['security'] as const)

}
export class Security extends BaseSecurity {
  audit: AuditAPI.Audit = new AuditAPI.Audit(this._client);
  overview: OverviewAPI.Overview = new OverviewAPI.Overview(this._client);
}

Security.Audit = Audit;
Security.BaseAudit = BaseAudit;
Security.Overview = Overview;
Security.BaseOverview = BaseOverview;

export declare namespace Security {
  export {
    Audit as Audit,
    BaseAudit as BaseAudit
  };

  export {
    Overview as Overview,
    BaseOverview as BaseOverview
  };
}
