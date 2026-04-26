// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CallbackAPI from './callback';
import { Callback } from './callback';
import * as OrgAPI from './org/org';
import { Org, OrgRetrieveResponse } from './org/org';

export class OAuth extends APIResource {
  callback: CallbackAPI.Callback = new CallbackAPI.Callback(this._client);
  org: OrgAPI.Org = new OrgAPI.Org(this._client);
}

OAuth.Callback = Callback;
OAuth.Org = Org;

export declare namespace OAuth {
  export {
    Callback as Callback
  };

  export {
    Org as Org,
    type OrgRetrieveResponse as OrgRetrieveResponse
  };
}
