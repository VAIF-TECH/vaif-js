// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ForgotPasswordAPI from './forgot-password';
import { ForgotPassword, ForgotPasswordCreateParams, ForgotPasswordCreateResponse } from './forgot-password';
import * as LoginAPI from './login';
import { Login, LoginCreateParams, LoginCreateResponse } from './login';
import * as LogoutAPI from './logout';
import { Logout, LogoutCreateResponse } from './logout';
import * as RefreshAPI from './refresh';
import { Refresh, RefreshCreateResponse } from './refresh';
import * as ResetPasswordAPI from './reset-password';
import { ResetPassword, ResetPasswordCreateParams, ResetPasswordCreateResponse } from './reset-password';
import * as SignupAPI from './signup';
import { Signup, SignupCreateParams, SignupCreateResponse } from './signup';
import * as CliAPI from './cli/cli';
import { Cli } from './cli/cli';
import * as MeAPI from './me/me';
import { Me, MeListResponse, MeUpdateParams, MeUpdateResponse } from './me/me';
import * as OAuthAPI from './oauth/oauth';
import { OAuth, OAuthRetrieveParams } from './oauth/oauth';
import * as VerifyEmailAPI from './verify-email/verify-email';
import { VerifyEmail } from './verify-email/verify-email';

export class Auth extends APIResource {
  cli: CliAPI.Cli = new CliAPI.Cli(this._client);
  forgotPassword: ForgotPasswordAPI.ForgotPassword = new ForgotPasswordAPI.ForgotPassword(this._client);
  login: LoginAPI.Login = new LoginAPI.Login(this._client);
  logout: LogoutAPI.Logout = new LogoutAPI.Logout(this._client);
  me: MeAPI.Me = new MeAPI.Me(this._client);
  oauth: OAuthAPI.OAuth = new OAuthAPI.OAuth(this._client);
  refresh: RefreshAPI.Refresh = new RefreshAPI.Refresh(this._client);
  resetPassword: ResetPasswordAPI.ResetPassword = new ResetPasswordAPI.ResetPassword(this._client);
  signup: SignupAPI.Signup = new SignupAPI.Signup(this._client);
  verifyEmail: VerifyEmailAPI.VerifyEmail = new VerifyEmailAPI.VerifyEmail(this._client);
}

Auth.Cli = Cli;
Auth.ForgotPassword = ForgotPassword;
Auth.Login = Login;
Auth.Logout = Logout;
Auth.Me = Me;
Auth.OAuth = OAuth;
Auth.Refresh = Refresh;
Auth.ResetPassword = ResetPassword;
Auth.Signup = Signup;
Auth.VerifyEmail = VerifyEmail;

export declare namespace Auth {
  export {
    Cli as Cli
  };

  export {
    ForgotPassword as ForgotPassword,
    type ForgotPasswordCreateResponse as ForgotPasswordCreateResponse,
    type ForgotPasswordCreateParams as ForgotPasswordCreateParams
  };

  export {
    Login as Login,
    type LoginCreateResponse as LoginCreateResponse,
    type LoginCreateParams as LoginCreateParams
  };

  export {
    Logout as Logout,
    type LogoutCreateResponse as LogoutCreateResponse
  };

  export {
    Me as Me,
    type MeUpdateResponse as MeUpdateResponse,
    type MeListResponse as MeListResponse,
    type MeUpdateParams as MeUpdateParams
  };

  export {
    OAuth as OAuth,
    type OAuthRetrieveParams as OAuthRetrieveParams
  };

  export {
    Refresh as Refresh,
    type RefreshCreateResponse as RefreshCreateResponse
  };

  export {
    ResetPassword as ResetPassword,
    type ResetPasswordCreateResponse as ResetPasswordCreateResponse,
    type ResetPasswordCreateParams as ResetPasswordCreateParams
  };

  export {
    Signup as Signup,
    type SignupCreateResponse as SignupCreateResponse,
    type SignupCreateParams as SignupCreateParams
  };

  export {
    VerifyEmail as VerifyEmail
  };
}
