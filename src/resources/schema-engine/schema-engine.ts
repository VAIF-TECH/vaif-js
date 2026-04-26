// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ApplyAPI from './apply';
import { Apply, ApplyCreateParams, ApplyCreateResponse } from './apply';
import * as ChangesAPI from './changes';
import { ChangeGetChangesResponse, Changes } from './changes';
import * as IntrospectAPI from './introspect';
import { Introspect, IntrospectRetrieveResponse } from './introspect';
import * as PreviewAPI from './preview';
import { Preview, PreviewCreateParams, PreviewCreateResponse } from './preview';
import * as QueryAPI from './query';
import { Query, QueryCreateParams, QueryCreateResponse } from './query';
import * as MigrationsAPI from './migrations/migrations';
import { Migrations } from './migrations/migrations';

export class SchemaEngine extends APIResource {
  apply: ApplyAPI.Apply = new ApplyAPI.Apply(this._client);
  changes: ChangesAPI.Changes = new ChangesAPI.Changes(this._client);
  introspect: IntrospectAPI.Introspect = new IntrospectAPI.Introspect(this._client);
  migrations: MigrationsAPI.Migrations = new MigrationsAPI.Migrations(this._client);
  preview: PreviewAPI.Preview = new PreviewAPI.Preview(this._client);
  query: QueryAPI.Query = new QueryAPI.Query(this._client);
}

SchemaEngine.Apply = Apply;
SchemaEngine.Changes = Changes;
SchemaEngine.Introspect = Introspect;
SchemaEngine.Migrations = Migrations;
SchemaEngine.Preview = Preview;
SchemaEngine.Query = Query;

export declare namespace SchemaEngine {
  export {
    Apply as Apply,
    type ApplyCreateResponse as ApplyCreateResponse,
    type ApplyCreateParams as ApplyCreateParams
  };

  export {
    Changes as Changes,
    type ChangeGetChangesResponse as ChangeGetChangesResponse
  };

  export {
    Introspect as Introspect,
    type IntrospectRetrieveResponse as IntrospectRetrieveResponse
  };

  export {
    Migrations as Migrations
  };

  export {
    Preview as Preview,
    type PreviewCreateResponse as PreviewCreateResponse,
    type PreviewCreateParams as PreviewCreateParams
  };

  export {
    Query as Query,
    type QueryCreateResponse as QueryCreateResponse,
    type QueryCreateParams as QueryCreateParams
  };
}
