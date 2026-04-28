// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as MeAPI from './me/me';
import { BaseMe, Me } from './me/me';

export class BaseUsers extends APIResource {
  static override readonly _key: readonly ['users'] = Object.freeze(['users'] as const);
}
export class Users extends BaseUsers {
  me: MeAPI.Me = new MeAPI.Me(this._client);
}

Users.Me = Me;
Users.BaseMe = BaseMe;

export declare namespace Users {
  export { Me as Me, BaseMe as BaseMe };
}
