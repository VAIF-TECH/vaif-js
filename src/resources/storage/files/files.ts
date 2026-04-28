// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CopyAPI from './copy';
import { BaseCopy, Copy } from './copy';
import * as DeleteBatchAPI from './delete-batch';
import { BaseDeleteBatch, DeleteBatch } from './delete-batch';
import * as MetadataAPI from './metadata';
import { BaseMetadata, Metadata } from './metadata';
import * as MoveAPI from './move';
import { BaseMove, Move } from './move';

export class BaseFiles extends APIResource {
  static override readonly _key: readonly ['storage', 'files'] = Object.freeze(['storage', 'files'] as const);
}
export class Files extends BaseFiles {
  copy: CopyAPI.Copy = new CopyAPI.Copy(this._client);
  deleteBatch: DeleteBatchAPI.DeleteBatch = new DeleteBatchAPI.DeleteBatch(this._client);
  metadata: MetadataAPI.Metadata = new MetadataAPI.Metadata(this._client);
  move: MoveAPI.Move = new MoveAPI.Move(this._client);
}

Files.Copy = Copy;
Files.BaseCopy = BaseCopy;
Files.DeleteBatch = DeleteBatch;
Files.BaseDeleteBatch = BaseDeleteBatch;
Files.Metadata = Metadata;
Files.BaseMetadata = BaseMetadata;
Files.Move = Move;
Files.BaseMove = BaseMove;

export declare namespace Files {
  export { Copy as Copy, BaseCopy as BaseCopy };

  export { DeleteBatch as DeleteBatch, BaseDeleteBatch as BaseDeleteBatch };

  export { Metadata as Metadata, BaseMetadata as BaseMetadata };

  export { Move as Move, BaseMove as BaseMove };
}
