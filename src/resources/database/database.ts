// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as TiersAPI from './tiers';
import { Tiers } from './tiers';
import * as ConnectorAPI from './connector/connector';
import { Connector } from './connector/connector';
import * as ExtensionsAPI from './extensions/extensions';
import { Extensions } from './extensions/extensions';
import * as WrappersAPI from './wrappers/wrappers';
import { Wrappers } from './wrappers/wrappers';

export class Database extends APIResource {
  connector: ConnectorAPI.Connector = new ConnectorAPI.Connector(this._client);
  extensions: ExtensionsAPI.Extensions = new ExtensionsAPI.Extensions(this._client);
  tiers: TiersAPI.Tiers = new TiersAPI.Tiers(this._client);
  wrappers: WrappersAPI.Wrappers = new WrappersAPI.Wrappers(this._client);
}

Database.Connector = Connector;
Database.Extensions = Extensions;
Database.Tiers = Tiers;
Database.Wrappers = Wrappers;

export declare namespace Database {
  export {
    Connector as Connector
  };

  export {
    Extensions as Extensions
  };

  export {
    Tiers as Tiers
  };

  export {
    Wrappers as Wrappers
  };
}
