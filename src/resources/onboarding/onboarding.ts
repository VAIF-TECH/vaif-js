// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as OrgAPI from './org/org';
import { Org } from './org/org';

export class Onboarding extends APIResource {
  org: OrgAPI.Org = new OrgAPI.Org(this._client);
}

Onboarding.Org = Org;

export declare namespace Onboarding {
  export {
    Org as Org
  };
}
