// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AuthorizeAPI from './authorize';
import { Authorize, BaseAuthorize } from './authorize';
import * as CallbackAPI from './callback';
import { BaseCallback, Callback } from './callback';

export class BaseOAuth extends APIResource {
  static override readonly _key: readonly ['github', 'oauth'] = Object.freeze(['github', 'oauth'] as const);
}
export class OAuth extends BaseOAuth {
  authorize: AuthorizeAPI.Authorize = new AuthorizeAPI.Authorize(this._client);
  callback: CallbackAPI.Callback = new CallbackAPI.Callback(this._client);
}

OAuth.Authorize = Authorize;
OAuth.BaseAuthorize = BaseAuthorize;
OAuth.Callback = Callback;
OAuth.BaseCallback = BaseCallback;

export declare namespace OAuth {
  export { Authorize as Authorize, BaseAuthorize as BaseAuthorize };

  export { Callback as Callback, BaseCallback as BaseCallback };
}
