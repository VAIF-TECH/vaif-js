// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as QueryAPI from './query';
import { Query, QueryQueryParams, QueryQueryResponse } from './query';
import * as TablesAPI from './tables';
import { Tables } from './tables';
import * as TestAPI from './test';
import { Test } from './test';

export class Connector extends APIResource {
  query: QueryAPI.Query = new QueryAPI.Query(this._client);
  tables: TablesAPI.Tables = new TablesAPI.Tables(this._client);
  test: TestAPI.Test = new TestAPI.Test(this._client);
}

Connector.Query = Query;
Connector.Tables = Tables;
Connector.Test = Test;

export declare namespace Connector {
  export {
    Query as Query,
    type QueryQueryResponse as QueryQueryResponse,
    type QueryQueryParams as QueryQueryParams
  };

  export {
    Tables as Tables
  };

  export {
    Test as Test
  };
}
