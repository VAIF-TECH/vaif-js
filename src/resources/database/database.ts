// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as TiersAPI from './tiers';
import { BaseTiers, Tiers } from './tiers';
import * as ConnectorAPI from './connector/connector';
import { BaseConnector, Connector } from './connector/connector';
import * as ExtensionsAPI from './extensions/extensions';
import { BaseExtensions, Extensions } from './extensions/extensions';
import * as WrappersAPI from './wrappers/wrappers';
import { BaseWrappers, Wrappers } from './wrappers/wrappers';

export class BaseDatabase extends APIResource {
  static override readonly _key: readonly ['database'] = Object.freeze(['database'] as const)

}
export class Database extends BaseDatabase {
  connector: ConnectorAPI.Connector = new ConnectorAPI.Connector(this._client);
  extensions: ExtensionsAPI.Extensions = new ExtensionsAPI.Extensions(this._client);
  tiers: TiersAPI.Tiers = new TiersAPI.Tiers(this._client);
  wrappers: WrappersAPI.Wrappers = new WrappersAPI.Wrappers(this._client);
}

Database.Connector = Connector;
Database.BaseConnector = BaseConnector;
Database.Extensions = Extensions;
Database.BaseExtensions = BaseExtensions;
Database.Tiers = Tiers;
Database.BaseTiers = BaseTiers;
Database.Wrappers = Wrappers;
Database.BaseWrappers = BaseWrappers;

export declare namespace Database {
  export {
    Connector as Connector,
    BaseConnector as BaseConnector
  };

  export {
    Extensions as Extensions,
    BaseExtensions as BaseExtensions
  };

  export {
    Tiers as Tiers,
    BaseTiers as BaseTiers
  };

  export {
    Wrappers as Wrappers,
    BaseWrappers as BaseWrappers
  };
}
