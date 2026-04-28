// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as OrgAPI from './org/org';
import { BaseOrg, Org } from './org/org';

export class BaseEntitlements extends APIResource {
  static override readonly _key: readonly ['entitlements'] = Object.freeze(['entitlements'] as const);
}
export class Entitlements extends BaseEntitlements {
  org: OrgAPI.Org = new OrgAPI.Org(this._client);
}

Entitlements.Org = Org;
Entitlements.BaseOrg = BaseOrg;

export declare namespace Entitlements {
  export { Org as Org, BaseOrg as BaseOrg };
}
