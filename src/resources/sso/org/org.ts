// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ConfigureAPI from './configure';
import { Configure } from './configure';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Org extends APIResource {
  configure: ConfigureAPI.Configure = new ConfigureAPI.Configure(this._client);

  retrieve(orgID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/sso/org/${orgID}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}

Org.Configure = Configure;

export declare namespace Org {
  export {
    Configure as Configure
  };
}
