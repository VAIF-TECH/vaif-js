// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ConnectorAPI from './connector';
import { Connector, ConnectorQueryParams, ConnectorQueryResponse } from './connector';
import * as ExtensionsAPI from './extensions/extensions';
import { Extensions } from './extensions/extensions';
import * as WrappersAPI from './wrappers/wrappers';
import { Wrappers } from './wrappers/wrappers';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Database extends APIResource {
  extensions: ExtensionsAPI.Extensions = new ExtensionsAPI.Extensions(this._client);
  wrappers: WrappersAPI.Wrappers = new WrappersAPI.Wrappers(this._client);
  connector: ConnectorAPI.Connector = new ConnectorAPI.Connector(this._client);

  listTiers(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/database/tiers', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

Database.Extensions = Extensions;
Database.Wrappers = Wrappers;
Database.Connector = Connector;

export declare namespace Database {
  export { Extensions as Extensions };

  export { Wrappers as Wrappers };

  export {
    Connector as Connector,
    type ConnectorQueryResponse as ConnectorQueryResponse,
    type ConnectorQueryParams as ConnectorQueryParams,
  };
}
