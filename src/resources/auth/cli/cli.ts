// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AuthorizeAPI from './authorize';
import { Authorize, AuthorizeCreateResponse, BaseAuthorize } from './authorize';
import * as CallbackAPI from './callback';
import { BaseCallback, Callback, CallbackCreateParams, CallbackCreateResponse } from './callback';
import * as LoginAPI from './login';
import { BaseLogin, Login, LoginCreateParams, LoginCreateResponse } from './login';
import * as TokenAPI from './token';
import { BaseToken, Token, TokenCreateParams, TokenCreateResponse } from './token';

export class BaseCli extends APIResource {
  static override readonly _key: readonly ['auth', 'cli'] = Object.freeze(['auth', 'cli'] as const)

}
export class Cli extends BaseCli {
  authorize: AuthorizeAPI.Authorize = new AuthorizeAPI.Authorize(this._client);
  callback: CallbackAPI.Callback = new CallbackAPI.Callback(this._client);
  login: LoginAPI.Login = new LoginAPI.Login(this._client);
  token: TokenAPI.Token = new TokenAPI.Token(this._client);
}

Cli.Authorize = Authorize;
Cli.BaseAuthorize = BaseAuthorize;
Cli.Callback = Callback;
Cli.BaseCallback = BaseCallback;
Cli.Login = Login;
Cli.BaseLogin = BaseLogin;
Cli.Token = Token;
Cli.BaseToken = BaseToken;

export declare namespace Cli {
  export {
    Authorize as Authorize,
    BaseAuthorize as BaseAuthorize,
    type AuthorizeCreateResponse as AuthorizeCreateResponse
  };

  export {
    Callback as Callback,
    BaseCallback as BaseCallback,
    type CallbackCreateResponse as CallbackCreateResponse,
    type CallbackCreateParams as CallbackCreateParams
  };

  export {
    Login as Login,
    BaseLogin as BaseLogin,
    type LoginCreateResponse as LoginCreateResponse,
    type LoginCreateParams as LoginCreateParams
  };

  export {
    Token as Token,
    BaseToken as BaseToken,
    type TokenCreateResponse as TokenCreateResponse,
    type TokenCreateParams as TokenCreateParams
  };
}
