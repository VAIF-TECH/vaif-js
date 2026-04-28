// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ConfigureAPI from './configure';
import { BaseConfigure, Configure, ConfigureConfigureParams, ConfigureConfigureResponse } from './configure';
import * as ProviderAPI from './provider/provider';
import {
  BaseProvider,
  Provider,
  ProviderDeleteParams,
  ProviderDeleteResponse,
  ProviderUpdateParams,
  ProviderUpdateResponse,
} from './provider/provider';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseOrg extends APIResource {
  static override readonly _key: readonly ['oauth', 'org'] = Object.freeze(['oauth', 'org'] as const);

  /**
   * List OAuth configurations for an organization
   */
  retrieve(orgID: string, options?: RequestOptions): APIPromise<OrgRetrieveResponse> {
    return this._client.get(path`/oauth/org/${orgID}`, options);
  }
}
export class Org extends BaseOrg {
  configure: ConfigureAPI.Configure = new ConfigureAPI.Configure(this._client);
  provider: ProviderAPI.Provider = new ProviderAPI.Provider(this._client);
}

export interface OrgRetrieveResponse {
  connections: Array<OrgRetrieveResponse.Connection>;
}

export namespace OrgRetrieveResponse {
  export interface Connection {
    id: string;

    clientId: string;

    createdAt: string | (string & {});

    enabled: boolean;

    provider: string;

    redirectUri: string;
  }
}

Org.Configure = Configure;
Org.BaseConfigure = BaseConfigure;
Org.Provider = Provider;
Org.BaseProvider = BaseProvider;

export declare namespace Org {
  export { type OrgRetrieveResponse as OrgRetrieveResponse };

  export {
    Configure as Configure,
    BaseConfigure as BaseConfigure,
    type ConfigureConfigureResponse as ConfigureConfigureResponse,
    type ConfigureConfigureParams as ConfigureConfigureParams,
  };

  export {
    Provider as Provider,
    BaseProvider as BaseProvider,
    type ProviderUpdateResponse as ProviderUpdateResponse,
    type ProviderDeleteResponse as ProviderDeleteResponse,
    type ProviderUpdateParams as ProviderUpdateParams,
    type ProviderDeleteParams as ProviderDeleteParams,
  };
}
