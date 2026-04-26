// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as PackagesAPI from './packages';
import { Packages } from './packages';

export class Credits extends APIResource {
  packages: PackagesAPI.Packages = new PackagesAPI.Packages(this._client);
}

Credits.Packages = Packages;

export declare namespace Credits {
  export {
    Packages as Packages
  };
}
