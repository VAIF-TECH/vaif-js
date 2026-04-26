// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ForgotPasswordAPI from './forgot-password';
import { BaseForgotPassword, ForgotPassword, ForgotPasswordCreateParams, ForgotPasswordCreateResponse } from './forgot-password';
import * as LoginAPI from './login';
import { BaseLogin, Login, LoginCreateParams, LoginCreateResponse } from './login';
import * as LogoutAPI from './logout';
import { BaseLogout, Logout, LogoutCreateResponse } from './logout';
import * as RefreshAPI from './refresh';
import { BaseRefresh, Refresh, RefreshCreateResponse } from './refresh';
import * as ResetPasswordAPI from './reset-password';
import { BaseResetPassword, ResetPassword, ResetPasswordCreateParams, ResetPasswordCreateResponse } from './reset-password';
import * as SignupAPI from './signup';
import { BaseSignup, Signup, SignupCreateParams, SignupCreateResponse } from './signup';
import * as CliAPI from './cli/cli';
import { BaseCli, Cli } from './cli/cli';
import * as MeAPI from './me/me';
import { BaseMe, Me, MeListResponse, MeUpdateParams, MeUpdateResponse } from './me/me';
import * as OAuthAPI from './oauth/oauth';
import { BaseOAuth, OAuth, OAuthRetrieveParams } from './oauth/oauth';
import * as VerifyEmailAPI from './verify-email/verify-email';
import { BaseVerifyEmail, VerifyEmail } from './verify-email/verify-email';

export class BaseAuth extends APIResource {
  static override readonly _key: readonly ['auth'] = Object.freeze(['auth'] as const)

}
export class Auth extends BaseAuth {
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
Auth.BaseCli = BaseCli;
Auth.ForgotPassword = ForgotPassword;
Auth.BaseForgotPassword = BaseForgotPassword;
Auth.Login = Login;
Auth.BaseLogin = BaseLogin;
Auth.Logout = Logout;
Auth.BaseLogout = BaseLogout;
Auth.Me = Me;
Auth.BaseMe = BaseMe;
Auth.OAuth = OAuth;
Auth.BaseOAuth = BaseOAuth;
Auth.Refresh = Refresh;
Auth.BaseRefresh = BaseRefresh;
Auth.ResetPassword = ResetPassword;
Auth.BaseResetPassword = BaseResetPassword;
Auth.Signup = Signup;
Auth.BaseSignup = BaseSignup;
Auth.VerifyEmail = VerifyEmail;
Auth.BaseVerifyEmail = BaseVerifyEmail;

export declare namespace Auth {
  export {
    Cli as Cli,
    BaseCli as BaseCli
  };

  export {
    ForgotPassword as ForgotPassword,
    BaseForgotPassword as BaseForgotPassword,
    type ForgotPasswordCreateResponse as ForgotPasswordCreateResponse,
    type ForgotPasswordCreateParams as ForgotPasswordCreateParams
  };

  export {
    Login as Login,
    BaseLogin as BaseLogin,
    type LoginCreateResponse as LoginCreateResponse,
    type LoginCreateParams as LoginCreateParams
  };

  export {
    Logout as Logout,
    BaseLogout as BaseLogout,
    type LogoutCreateResponse as LogoutCreateResponse
  };

  export {
    Me as Me,
    BaseMe as BaseMe,
    type MeUpdateResponse as MeUpdateResponse,
    type MeListResponse as MeListResponse,
    type MeUpdateParams as MeUpdateParams
  };

  export {
    OAuth as OAuth,
    BaseOAuth as BaseOAuth,
    type OAuthRetrieveParams as OAuthRetrieveParams
  };

  export {
    Refresh as Refresh,
    BaseRefresh as BaseRefresh,
    type RefreshCreateResponse as RefreshCreateResponse
  };

  export {
    ResetPassword as ResetPassword,
    BaseResetPassword as BaseResetPassword,
    type ResetPasswordCreateResponse as ResetPasswordCreateResponse,
    type ResetPasswordCreateParams as ResetPasswordCreateParams
  };

  export {
    Signup as Signup,
    BaseSignup as BaseSignup,
    type SignupCreateResponse as SignupCreateResponse,
    type SignupCreateParams as SignupCreateParams
  };

  export {
    VerifyEmail as VerifyEmail,
    BaseVerifyEmail as BaseVerifyEmail
  };
}
