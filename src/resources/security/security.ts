// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AuditAPI from './audit';
import { Audit } from './audit';
import * as OverviewAPI from './overview';
import { Overview } from './overview';

export class Security extends APIResource {
  audit: AuditAPI.Audit = new AuditAPI.Audit(this._client);
  overview: OverviewAPI.Overview = new OverviewAPI.Overview(this._client);
}

Security.Audit = Audit;
Security.Overview = Overview;

export declare namespace Security {
  export {
    Audit as Audit
  };

  export {
    Overview as Overview
  };
}
