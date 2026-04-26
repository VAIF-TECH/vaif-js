// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as QueryAPI from './query';
import { BaseQuery, Query, QueryQueryParams, QueryQueryResponse } from './query';
import * as TablesAPI from './tables';
import { BaseTables, Tables } from './tables';
import * as TestAPI from './test';
import { BaseTest, Test } from './test';

export class BaseConnector extends APIResource {
  static override readonly _key: readonly ['database', 'connector'] = Object.freeze(['database', 'connector'] as const)

}
export class Connector extends BaseConnector {
  query: QueryAPI.Query = new QueryAPI.Query(this._client);
  tables: TablesAPI.Tables = new TablesAPI.Tables(this._client);
  test: TestAPI.Test = new TestAPI.Test(this._client);
}

Connector.Query = Query;
Connector.BaseQuery = BaseQuery;
Connector.Tables = Tables;
Connector.BaseTables = BaseTables;
Connector.Test = Test;
Connector.BaseTest = BaseTest;

export declare namespace Connector {
  export {
    Query as Query,
    BaseQuery as BaseQuery,
    type QueryQueryResponse as QueryQueryResponse,
    type QueryQueryParams as QueryQueryParams
  };

  export {
    Tables as Tables,
    BaseTables as BaseTables
  };

  export {
    Test as Test,
    BaseTest as BaseTest
  };
}
