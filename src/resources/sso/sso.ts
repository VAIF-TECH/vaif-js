// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as OrgAPI from './org/org';
import { BaseOrg, Org } from './org/org';

export class BaseSSO extends APIResource {
  static override readonly _key: readonly ['sso'] = Object.freeze(['sso'] as const);
}
export class SSO extends BaseSSO {
  org: OrgAPI.Org = new OrgAPI.Org(this._client);
}

SSO.Org = Org;
SSO.BaseOrg = BaseOrg;

export declare namespace SSO {
  export { Org as Org, BaseOrg as BaseOrg };
}
