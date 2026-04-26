// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AggregateAPI from './aggregate';
import { Aggregate } from './aggregate';
import * as CollectionsAPI from './collections';
import { Collections } from './collections';
import * as CursorAPI from './cursor';
import { Cursor, CursorCloseParams, CursorNextParams } from './cursor';
import * as FindAPI from './find';
import { Find } from './find';
import * as IndexesAPI from './indexes';
import { IndexDeleteParams, Indexes } from './indexes';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class MongoDB extends APIResource {
  collections: CollectionsAPI.Collections = new CollectionsAPI.Collections(this._client);
  find: FindAPI.Find = new FindAPI.Find(this._client);
  aggregate: AggregateAPI.Aggregate = new AggregateAPI.Aggregate(this._client);
  indexes: IndexesAPI.Indexes = new IndexesAPI.Indexes(this._client);
  cursor: CursorAPI.Cursor = new CursorAPI.Cursor(this._client);

  bulkWrite(collection: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/mongodb/${collection}/bulkWrite`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  count(collection: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/mongodb/${collection}/count`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  deleteMany(collection: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/mongodb/${collection}/deleteMany`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  deleteOne(collection: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/mongodb/${collection}/deleteOne`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  distinct(collection: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/mongodb/${collection}/distinct`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  estimatedCount(collection: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/mongodb/${collection}/estimatedCount`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  executeCommand(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/mongodb/command', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  findByID(id: string, params: MongoDBFindByIDParams, options?: RequestOptions): APIPromise<void> {
    const { collection } = params;
    return this._client.get(path`/mongodb/${collection}/findById/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  findOne(collection: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/mongodb/${collection}/findOne`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  findOneAndDelete(collection: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/mongodb/${collection}/findOneAndDelete`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  findOneAndReplace(collection: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/mongodb/${collection}/findOneAndReplace`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  findOneAndUpdate(collection: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/mongodb/${collection}/findOneAndUpdate`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  insertMany(collection: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/mongodb/${collection}/insertMany`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  insertOne(collection: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/mongodb/${collection}/insertOne`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  replaceOne(collection: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/mongodb/${collection}/replaceOne`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  updateMany(collection: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/mongodb/${collection}/updateMany`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  updateOne(collection: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/mongodb/${collection}/updateOne`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface MongoDBFindByIDParams {
  collection: string;
}

MongoDB.Collections = Collections;
MongoDB.Find = Find;
MongoDB.Aggregate = Aggregate;
MongoDB.Indexes = Indexes;
MongoDB.Cursor = Cursor;

export declare namespace MongoDB {
  export { type MongoDBFindByIDParams as MongoDBFindByIDParams };

  export { Collections as Collections };

  export { Find as Find };

  export { Aggregate as Aggregate };

  export { Indexes as Indexes, type IndexDeleteParams as IndexDeleteParams };

  export {
    Cursor as Cursor,
    type CursorCloseParams as CursorCloseParams,
    type CursorNextParams as CursorNextParams,
  };
}
