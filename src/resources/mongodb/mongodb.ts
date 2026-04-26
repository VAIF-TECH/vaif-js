// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AggregateAPI from './aggregate';
import { Aggregate } from './aggregate';
import * as BulkWriteAPI from './bulk-write';
import { BulkWrite } from './bulk-write';
import * as CommandAPI from './command';
import { Command } from './command';
import * as CountAPI from './count';
import { Count } from './count';
import * as DeleteManyAPI from './delete-many';
import { DeleteMany } from './delete-many';
import * as DeleteOneAPI from './delete-one';
import { DeleteOne } from './delete-one';
import * as DistinctAPI from './distinct';
import { Distinct } from './distinct';
import * as EstimatedCountAPI from './estimated-count';
import { EstimatedCount } from './estimated-count';
import * as FindAPI from './find';
import { Find } from './find';
import * as FindByIDAPI from './find-by-id';
import { FindByID, FindByIDRetrieveParams } from './find-by-id';
import * as FindOneAPI from './find-one';
import { FindOne } from './find-one';
import * as FindOneAndDeleteAPI from './find-one-and-delete';
import { FindOneAndDelete } from './find-one-and-delete';
import * as FindOneAndReplaceAPI from './find-one-and-replace';
import { FindOneAndReplace } from './find-one-and-replace';
import * as FindOneAndUpdateAPI from './find-one-and-update';
import { FindOneAndUpdate } from './find-one-and-update';
import * as IndexesAPI from './indexes';
import { IndexDeleteParams, Indexes } from './indexes';
import * as InsertManyAPI from './insert-many';
import { InsertMany } from './insert-many';
import * as InsertOneAPI from './insert-one';
import { InsertOne } from './insert-one';
import * as ReplaceOneAPI from './replace-one';
import { ReplaceOne } from './replace-one';
import * as UpdateManyAPI from './update-many';
import { UpdateMany } from './update-many';
import * as UpdateOneAPI from './update-one';
import { UpdateOne } from './update-one';
import * as CollectionsAPI from './collections/collections';
import { Collections } from './collections/collections';
import * as CursorAPI from './cursor/cursor';
import { Cursor } from './cursor/cursor';

export class MongoDB extends APIResource {
  aggregate: AggregateAPI.Aggregate = new AggregateAPI.Aggregate(this._client);
  bulkWrite: BulkWriteAPI.BulkWrite = new BulkWriteAPI.BulkWrite(this._client);
  collections: CollectionsAPI.Collections = new CollectionsAPI.Collections(this._client);
  command: CommandAPI.Command = new CommandAPI.Command(this._client);
  count: CountAPI.Count = new CountAPI.Count(this._client);
  cursor: CursorAPI.Cursor = new CursorAPI.Cursor(this._client);
  deleteMany: DeleteManyAPI.DeleteMany = new DeleteManyAPI.DeleteMany(this._client);
  deleteOne: DeleteOneAPI.DeleteOne = new DeleteOneAPI.DeleteOne(this._client);
  distinct: DistinctAPI.Distinct = new DistinctAPI.Distinct(this._client);
  estimatedCount: EstimatedCountAPI.EstimatedCount = new EstimatedCountAPI.EstimatedCount(this._client);
  find: FindAPI.Find = new FindAPI.Find(this._client);
  findByID: FindByIDAPI.FindByID = new FindByIDAPI.FindByID(this._client);
  findOne: FindOneAPI.FindOne = new FindOneAPI.FindOne(this._client);
  findOneAndDelete: FindOneAndDeleteAPI.FindOneAndDelete = new FindOneAndDeleteAPI.FindOneAndDelete(this._client);
  findOneAndReplace: FindOneAndReplaceAPI.FindOneAndReplace = new FindOneAndReplaceAPI.FindOneAndReplace(this._client);
  findOneAndUpdate: FindOneAndUpdateAPI.FindOneAndUpdate = new FindOneAndUpdateAPI.FindOneAndUpdate(this._client);
  indexes: IndexesAPI.Indexes = new IndexesAPI.Indexes(this._client);
  insertMany: InsertManyAPI.InsertMany = new InsertManyAPI.InsertMany(this._client);
  insertOne: InsertOneAPI.InsertOne = new InsertOneAPI.InsertOne(this._client);
  replaceOne: ReplaceOneAPI.ReplaceOne = new ReplaceOneAPI.ReplaceOne(this._client);
  updateMany: UpdateManyAPI.UpdateMany = new UpdateManyAPI.UpdateMany(this._client);
  updateOne: UpdateOneAPI.UpdateOne = new UpdateOneAPI.UpdateOne(this._client);
}

MongoDB.Aggregate = Aggregate;
MongoDB.BulkWrite = BulkWrite;
MongoDB.Collections = Collections;
MongoDB.Command = Command;
MongoDB.Count = Count;
MongoDB.Cursor = Cursor;
MongoDB.DeleteMany = DeleteMany;
MongoDB.DeleteOne = DeleteOne;
MongoDB.Distinct = Distinct;
MongoDB.EstimatedCount = EstimatedCount;
MongoDB.Find = Find;
MongoDB.FindByID = FindByID;
MongoDB.FindOne = FindOne;
MongoDB.FindOneAndDelete = FindOneAndDelete;
MongoDB.FindOneAndReplace = FindOneAndReplace;
MongoDB.FindOneAndUpdate = FindOneAndUpdate;
MongoDB.Indexes = Indexes;
MongoDB.InsertMany = InsertMany;
MongoDB.InsertOne = InsertOne;
MongoDB.ReplaceOne = ReplaceOne;
MongoDB.UpdateMany = UpdateMany;
MongoDB.UpdateOne = UpdateOne;

export declare namespace MongoDB {
  export {
    Aggregate as Aggregate
  };

  export {
    BulkWrite as BulkWrite
  };

  export {
    Collections as Collections
  };

  export {
    Command as Command
  };

  export {
    Count as Count
  };

  export {
    Cursor as Cursor
  };

  export {
    DeleteMany as DeleteMany
  };

  export {
    DeleteOne as DeleteOne
  };

  export {
    Distinct as Distinct
  };

  export {
    EstimatedCount as EstimatedCount
  };

  export {
    Find as Find
  };

  export {
    FindByID as FindByID,
    type FindByIDRetrieveParams as FindByIDRetrieveParams
  };

  export {
    FindOne as FindOne
  };

  export {
    FindOneAndDelete as FindOneAndDelete
  };

  export {
    FindOneAndReplace as FindOneAndReplace
  };

  export {
    FindOneAndUpdate as FindOneAndUpdate
  };

  export {
    Indexes as Indexes,
    type IndexDeleteParams as IndexDeleteParams
  };

  export {
    InsertMany as InsertMany
  };

  export {
    InsertOne as InsertOne
  };

  export {
    ReplaceOne as ReplaceOne
  };

  export {
    UpdateMany as UpdateMany
  };

  export {
    UpdateOne as UpdateOne
  };
}
