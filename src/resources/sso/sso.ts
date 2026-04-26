// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as OrgAPI from './org';
import { Org } from './org';

export class SSO extends APIResource {
  org: OrgAPI.Org = new OrgAPI.Org(this._client);
}

SSO.Org = Org;

export declare namespace SSO {
  export { Org as Org };
}
