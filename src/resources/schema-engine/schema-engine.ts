// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ApplyAPI from './apply';
import { Apply, ApplyCreateParams, ApplyCreateResponse, BaseApply } from './apply';
import * as ChangesAPI from './changes';
import { BaseChanges, ChangeGetChangesResponse, Changes } from './changes';
import * as IntrospectAPI from './introspect';
import { BaseIntrospect, Introspect, IntrospectRetrieveResponse } from './introspect';
import * as PreviewAPI from './preview';
import { BasePreview, Preview, PreviewCreateParams, PreviewCreateResponse } from './preview';
import * as QueryAPI from './query';
import { BaseQuery, Query, QueryCreateParams, QueryCreateResponse } from './query';
import * as MigrationsAPI from './migrations/migrations';
import { BaseMigrations, Migrations } from './migrations/migrations';

export class BaseSchemaEngine extends APIResource {
  static override readonly _key: readonly ['schemaEngine'] = Object.freeze(['schemaEngine'] as const)

}
export class SchemaEngine extends BaseSchemaEngine {
  apply: ApplyAPI.Apply = new ApplyAPI.Apply(this._client);
  changes: ChangesAPI.Changes = new ChangesAPI.Changes(this._client);
  introspect: IntrospectAPI.Introspect = new IntrospectAPI.Introspect(this._client);
  migrations: MigrationsAPI.Migrations = new MigrationsAPI.Migrations(this._client);
  preview: PreviewAPI.Preview = new PreviewAPI.Preview(this._client);
  query: QueryAPI.Query = new QueryAPI.Query(this._client);
}

SchemaEngine.Apply = Apply;
SchemaEngine.BaseApply = BaseApply;
SchemaEngine.Changes = Changes;
SchemaEngine.BaseChanges = BaseChanges;
SchemaEngine.Introspect = Introspect;
SchemaEngine.BaseIntrospect = BaseIntrospect;
SchemaEngine.Migrations = Migrations;
SchemaEngine.BaseMigrations = BaseMigrations;
SchemaEngine.Preview = Preview;
SchemaEngine.BasePreview = BasePreview;
SchemaEngine.Query = Query;
SchemaEngine.BaseQuery = BaseQuery;

export declare namespace SchemaEngine {
  export {
    Apply as Apply,
    BaseApply as BaseApply,
    type ApplyCreateResponse as ApplyCreateResponse,
    type ApplyCreateParams as ApplyCreateParams
  };

  export {
    Changes as Changes,
    BaseChanges as BaseChanges,
    type ChangeGetChangesResponse as ChangeGetChangesResponse
  };

  export {
    Introspect as Introspect,
    BaseIntrospect as BaseIntrospect,
    type IntrospectRetrieveResponse as IntrospectRetrieveResponse
  };

  export {
    Migrations as Migrations,
    BaseMigrations as BaseMigrations
  };

  export {
    Preview as Preview,
    BasePreview as BasePreview,
    type PreviewCreateResponse as PreviewCreateResponse,
    type PreviewCreateParams as PreviewCreateParams
  };

  export {
    Query as Query,
    BaseQuery as BaseQuery,
    type QueryCreateResponse as QueryCreateResponse,
    type QueryCreateParams as QueryCreateParams
  };
}
