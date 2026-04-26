// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as OrgAPI from './org';
import { Org } from './org';

export class Activation extends APIResource {
  org: OrgAPI.Org = new OrgAPI.Org(this._client);
}

Activation.Org = Org;

export declare namespace Activation {
  export {
    Org as Org
  };
}
