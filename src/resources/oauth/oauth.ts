// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CallbackAPI from './callback';
import { BaseCallback, Callback } from './callback';
import * as OrgAPI from './org/org';
import { BaseOrg, Org, OrgRetrieveResponse } from './org/org';

export class BaseOAuth extends APIResource {
  static override readonly _key: readonly ['oauth'] = Object.freeze(['oauth'] as const);
}
export class OAuth extends BaseOAuth {
  callback: CallbackAPI.Callback = new CallbackAPI.Callback(this._client);
  org: OrgAPI.Org = new OrgAPI.Org(this._client);
}

OAuth.Callback = Callback;
OAuth.BaseCallback = BaseCallback;
OAuth.Org = Org;
OAuth.BaseOrg = BaseOrg;

export declare namespace OAuth {
  export { Callback as Callback, BaseCallback as BaseCallback };

  export { Org as Org, BaseOrg as BaseOrg, type OrgRetrieveResponse as OrgRetrieveResponse };
}
