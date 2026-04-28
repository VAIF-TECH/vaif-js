// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as PackagesAPI from './packages';
import { BasePackages, Packages } from './packages';

export class BaseCredits extends APIResource {
  static override readonly _key: readonly ['billing', 'credits'] = Object.freeze([
    'billing',
    'credits',
  ] as const);
}
export class Credits extends BaseCredits {
  packages: PackagesAPI.Packages = new PackagesAPI.Packages(this._client);
}

Credits.Packages = Packages;
Credits.BasePackages = BasePackages;

export declare namespace Credits {
  export { Packages as Packages, BasePackages as BasePackages };
}
