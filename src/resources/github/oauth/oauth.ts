// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AuthorizeAPI from './authorize';
import { Authorize } from './authorize';
import * as CallbackAPI from './callback';
import { Callback } from './callback';

export class OAuth extends APIResource {
  authorize: AuthorizeAPI.Authorize = new AuthorizeAPI.Authorize(this._client);
  callback: CallbackAPI.Callback = new CallbackAPI.Callback(this._client);
}

OAuth.Authorize = Authorize;
OAuth.Callback = Callback;

export declare namespace OAuth {
  export {
    Authorize as Authorize
  };

  export {
    Callback as Callback
  };
}
