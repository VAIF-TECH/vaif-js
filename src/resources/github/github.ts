// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as OAuthAPI from './oauth/oauth';
import { BaseOAuth, OAuth } from './oauth/oauth';

export class BaseGitHub extends APIResource {
  static override readonly _key: readonly ['github'] = Object.freeze(['github'] as const);
}
export class GitHub extends BaseGitHub {
  oauth: OAuthAPI.OAuth = new OAuthAPI.OAuth(this._client);
}

GitHub.OAuth = OAuth;
GitHub.BaseOAuth = BaseOAuth;

export declare namespace GitHub {
  export { OAuth as OAuth, BaseOAuth as BaseOAuth };
}
