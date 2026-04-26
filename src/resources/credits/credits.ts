// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as OrgAPI from './org';
import { Org } from './org';

export class Credits extends APIResource {
  org: OrgAPI.Org = new OrgAPI.Org(this._client);
}

Credits.Org = Org;

export declare namespace Credits {
  export { Org as Org };
}
