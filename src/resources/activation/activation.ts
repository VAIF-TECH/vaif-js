// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as OrgAPI from './org';
import { BaseOrg, Org } from './org';

export class BaseActivation extends APIResource {
  static override readonly _key: readonly ['activation'] = Object.freeze(['activation'] as const);
}
export class Activation extends BaseActivation {
  org: OrgAPI.Org = new OrgAPI.Org(this._client);
}

Activation.Org = Org;
Activation.BaseOrg = BaseOrg;

export declare namespace Activation {
  export { Org as Org, BaseOrg as BaseOrg };
}
