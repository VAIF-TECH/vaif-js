// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as OAuthAPI from './oauth';
import { OAuth } from './oauth';

export class GitHub extends APIResource {
  oauth: OAuthAPI.OAuth = new OAuthAPI.OAuth(this._client);
}

GitHub.OAuth = OAuth;

export declare namespace GitHub {
  export { OAuth as OAuth };
}
