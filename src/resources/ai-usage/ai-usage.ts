// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as OrgAPI from './org/org';
import { BaseOrg, Org } from './org/org';

export class BaseAIUsage extends APIResource {
  static override readonly _key: readonly ['aiUsage'] = Object.freeze(['aiUsage'] as const);
}
export class AIUsage extends BaseAIUsage {
  org: OrgAPI.Org = new OrgAPI.Org(this._client);
}

AIUsage.Org = Org;
AIUsage.BaseOrg = BaseOrg;

export declare namespace AIUsage {
  export { Org as Org, BaseOrg as BaseOrg };
}
