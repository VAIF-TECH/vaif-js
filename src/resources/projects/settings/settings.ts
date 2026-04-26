// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AddonsAPI from './addons';
import { Addons } from './addons';
import * as APIAPI from './api';
import { API } from './api';
import * as ComputeAPI from './compute';
import { Compute } from './compute';
import * as JwtAPI from './jwt';
import { Jwt } from './jwt';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Settings extends APIResource {
  compute: ComputeAPI.Compute = new ComputeAPI.Compute(this._client);
  api: APIAPI.API = new APIAPI.API(this._client);
  jwt: JwtAPI.Jwt = new JwtAPI.Jwt(this._client);
  addons: AddonsAPI.Addons = new AddonsAPI.Addons(this._client);

  retrieve(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/projects/${projectID}/settings`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

Settings.Compute = Compute;
Settings.API = API;
Settings.Jwt = Jwt;
Settings.Addons = Addons;

export declare namespace Settings {
  export { Compute as Compute };

  export { API as API };

  export { Jwt as Jwt };

  export { Addons as Addons };
}
