// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AuthorizeAPI from './authorize';
import { Authorize, AuthorizeCreateResponse } from './authorize';
import * as CallbackAPI from './callback';
import { Callback, CallbackCreateParams, CallbackCreateResponse } from './callback';
import * as LoginAPI from './login';
import { Login, LoginCreateParams, LoginCreateResponse } from './login';
import * as TokenAPI from './token';
import { Token, TokenCreateParams, TokenCreateResponse } from './token';

export class Cli extends APIResource {
  authorize: AuthorizeAPI.Authorize = new AuthorizeAPI.Authorize(this._client);
  callback: CallbackAPI.Callback = new CallbackAPI.Callback(this._client);
  login: LoginAPI.Login = new LoginAPI.Login(this._client);
  token: TokenAPI.Token = new TokenAPI.Token(this._client);
}

Cli.Authorize = Authorize;
Cli.Callback = Callback;
Cli.Login = Login;
Cli.Token = Token;

export declare namespace Cli {
  export {
    Authorize as Authorize,
    type AuthorizeCreateResponse as AuthorizeCreateResponse
  };

  export {
    Callback as Callback,
    type CallbackCreateResponse as CallbackCreateResponse,
    type CallbackCreateParams as CallbackCreateParams
  };

  export {
    Login as Login,
    type LoginCreateResponse as LoginCreateResponse,
    type LoginCreateParams as LoginCreateParams
  };

  export {
    Token as Token,
    type TokenCreateResponse as TokenCreateResponse,
    type TokenCreateParams as TokenCreateParams
  };
}
