// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ConfigureAPI from './configure';
import { BaseConfigure, Configure } from './configure';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseOrg extends APIResource {
  static override readonly _key: readonly ['sso', 'org'] = Object.freeze(['sso', 'org'] as const)

  retrieve(orgID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/sso/org/${orgID}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}
export class Org extends BaseOrg {
  configure: ConfigureAPI.Configure = new ConfigureAPI.Configure(this._client);
}

Org.Configure = Configure;
Org.BaseConfigure = BaseConfigure;

export declare namespace Org {
  export {
    Configure as Configure,
    BaseConfigure as BaseConfigure
  };
}
