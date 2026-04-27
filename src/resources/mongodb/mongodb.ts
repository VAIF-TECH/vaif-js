// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AggregateAPI from './aggregate';
import { Aggregate, BaseAggregate } from './aggregate';
import * as BulkWriteAPI from './bulk-write';
import { BaseBulkWrite, BulkWrite } from './bulk-write';
import * as CommandAPI from './command';
import { BaseCommand, Command } from './command';
import * as CountAPI from './count';
import { BaseCount, Count } from './count';
import * as DeleteManyAPI from './delete-many';
import { BaseDeleteMany, DeleteMany } from './delete-many';
import * as DeleteOneAPI from './delete-one';
import { BaseDeleteOne, DeleteOne } from './delete-one';
import * as DistinctAPI from './distinct';
import { BaseDistinct, Distinct } from './distinct';
import * as EstimatedCountAPI from './estimated-count';
import { BaseEstimatedCount, EstimatedCount } from './estimated-count';
import * as FindAPI from './find';
import { BaseFind, Find } from './find';
import * as FindByIDAPI from './find-by-id';
import { BaseFindByID, FindByID, FindByIDRetrieveParams } from './find-by-id';
import * as FindOneAPI from './find-one';
import { BaseFindOne, FindOne } from './find-one';
import * as FindOneAndDeleteAPI from './find-one-and-delete';
import { BaseFindOneAndDelete, FindOneAndDelete } from './find-one-and-delete';
import * as FindOneAndReplaceAPI from './find-one-and-replace';
import { BaseFindOneAndReplace, FindOneAndReplace } from './find-one-and-replace';
import * as FindOneAndUpdateAPI from './find-one-and-update';
import { BaseFindOneAndUpdate, FindOneAndUpdate } from './find-one-and-update';
import * as IndexesAPI from './indexes';
import { BaseIndexes, IndexDeleteParams, Indexes } from './indexes';
import * as InsertManyAPI from './insert-many';
import { BaseInsertMany, InsertMany } from './insert-many';
import * as InsertOneAPI from './insert-one';
import { BaseInsertOne, InsertOne } from './insert-one';
import * as ReplaceOneAPI from './replace-one';
import { BaseReplaceOne, ReplaceOne } from './replace-one';
import * as UpdateManyAPI from './update-many';
import { BaseUpdateMany, UpdateMany } from './update-many';
import * as UpdateOneAPI from './update-one';
import { BaseUpdateOne, UpdateOne } from './update-one';
import * as CollectionsAPI from './collections/collections';
import { BaseCollections, Collections } from './collections/collections';
import * as CursorAPI from './cursor/cursor';
import { BaseCursor, Cursor } from './cursor/cursor';

export class BaseMongoDB extends APIResource {
  static override readonly _key: readonly ['mongoDB'] = Object.freeze(['mongoDB'] as const)

}
export class MongoDB extends BaseMongoDB {
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
MongoDB.BaseAggregate = BaseAggregate;
MongoDB.BulkWrite = BulkWrite;
MongoDB.BaseBulkWrite = BaseBulkWrite;
MongoDB.Collections = Collections;
MongoDB.BaseCollections = BaseCollections;
MongoDB.Command = Command;
MongoDB.BaseCommand = BaseCommand;
MongoDB.Count = Count;
MongoDB.BaseCount = BaseCount;
MongoDB.Cursor = Cursor;
MongoDB.BaseCursor = BaseCursor;
MongoDB.DeleteMany = DeleteMany;
MongoDB.BaseDeleteMany = BaseDeleteMany;
MongoDB.DeleteOne = DeleteOne;
MongoDB.BaseDeleteOne = BaseDeleteOne;
MongoDB.Distinct = Distinct;
MongoDB.BaseDistinct = BaseDistinct;
MongoDB.EstimatedCount = EstimatedCount;
MongoDB.BaseEstimatedCount = BaseEstimatedCount;
MongoDB.Find = Find;
MongoDB.BaseFind = BaseFind;
MongoDB.FindByID = FindByID;
MongoDB.BaseFindByID = BaseFindByID;
MongoDB.FindOne = FindOne;
MongoDB.BaseFindOne = BaseFindOne;
MongoDB.FindOneAndDelete = FindOneAndDelete;
MongoDB.BaseFindOneAndDelete = BaseFindOneAndDelete;
MongoDB.FindOneAndReplace = FindOneAndReplace;
MongoDB.BaseFindOneAndReplace = BaseFindOneAndReplace;
MongoDB.FindOneAndUpdate = FindOneAndUpdate;
MongoDB.BaseFindOneAndUpdate = BaseFindOneAndUpdate;
MongoDB.Indexes = Indexes;
MongoDB.BaseIndexes = BaseIndexes;
MongoDB.InsertMany = InsertMany;
MongoDB.BaseInsertMany = BaseInsertMany;
MongoDB.InsertOne = InsertOne;
MongoDB.BaseInsertOne = BaseInsertOne;
MongoDB.ReplaceOne = ReplaceOne;
MongoDB.BaseReplaceOne = BaseReplaceOne;
MongoDB.UpdateMany = UpdateMany;
MongoDB.BaseUpdateMany = BaseUpdateMany;
MongoDB.UpdateOne = UpdateOne;
MongoDB.BaseUpdateOne = BaseUpdateOne;

export declare namespace MongoDB {
  export {
    Aggregate as Aggregate,
    BaseAggregate as BaseAggregate
  };

  export {
    BulkWrite as BulkWrite,
    BaseBulkWrite as BaseBulkWrite
  };

  export {
    Collections as Collections,
    BaseCollections as BaseCollections
  };

  export {
    Command as Command,
    BaseCommand as BaseCommand
  };

  export {
    Count as Count,
    BaseCount as BaseCount
  };

  export {
    Cursor as Cursor,
    BaseCursor as BaseCursor
  };

  export {
    DeleteMany as DeleteMany,
    BaseDeleteMany as BaseDeleteMany
  };

  export {
    DeleteOne as DeleteOne,
    BaseDeleteOne as BaseDeleteOne
  };

  export {
    Distinct as Distinct,
    BaseDistinct as BaseDistinct
  };

  export {
    EstimatedCount as EstimatedCount,
    BaseEstimatedCount as BaseEstimatedCount
  };

  export {
    Find as Find,
    BaseFind as BaseFind
  };

  export {
    FindByID as FindByID,
    BaseFindByID as BaseFindByID,
    type FindByIDRetrieveParams as FindByIDRetrieveParams
  };

  export {
    FindOne as FindOne,
    BaseFindOne as BaseFindOne
  };

  export {
    FindOneAndDelete as FindOneAndDelete,
    BaseFindOneAndDelete as BaseFindOneAndDelete
  };

  export {
    FindOneAndReplace as FindOneAndReplace,
    BaseFindOneAndReplace as BaseFindOneAndReplace
  };

  export {
    FindOneAndUpdate as FindOneAndUpdate,
    BaseFindOneAndUpdate as BaseFindOneAndUpdate
  };

  export {
    Indexes as Indexes,
    BaseIndexes as BaseIndexes,
    type IndexDeleteParams as IndexDeleteParams
  };

  export {
    InsertMany as InsertMany,
    BaseInsertMany as BaseInsertMany
  };

  export {
    InsertOne as InsertOne,
    BaseInsertOne as BaseInsertOne
  };

  export {
    ReplaceOne as ReplaceOne,
    BaseReplaceOne as BaseReplaceOne
  };

  export {
    UpdateMany as UpdateMany,
    BaseUpdateMany as BaseUpdateMany
  };

  export {
    UpdateOne as UpdateOne,
    BaseUpdateOne as BaseUpdateOne
  };
}
