// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as OrgAPI from './org/org';
import { BaseOrg, Org } from './org/org';

export class BaseCredits extends APIResource {
  static override readonly _key: readonly ['credits'] = Object.freeze(['credits'] as const)

}
export class Credits extends BaseCredits {
  org: OrgAPI.Org = new OrgAPI.Org(this._client);
}

Credits.Org = Org;
Credits.BaseOrg = BaseOrg;

export declare namespace Credits {
  export {
    Org as Org,
    BaseOrg as BaseOrg
  };
}
