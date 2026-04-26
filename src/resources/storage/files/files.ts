// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CopyAPI from './copy';
import { Copy } from './copy';
import * as DeleteBatchAPI from './delete-batch';
import { DeleteBatch } from './delete-batch';
import * as MetadataAPI from './metadata';
import { Metadata } from './metadata';
import * as MoveAPI from './move';
import { Move } from './move';

export class Files extends APIResource {
  copy: CopyAPI.Copy = new CopyAPI.Copy(this._client);
  deleteBatch: DeleteBatchAPI.DeleteBatch = new DeleteBatchAPI.DeleteBatch(this._client);
  metadata: MetadataAPI.Metadata = new MetadataAPI.Metadata(this._client);
  move: MoveAPI.Move = new MoveAPI.Move(this._client);
}

Files.Copy = Copy;
Files.DeleteBatch = DeleteBatch;
Files.Metadata = Metadata;
Files.Move = Move;

export declare namespace Files {
  export {
    Copy as Copy
  };

  export {
    DeleteBatch as DeleteBatch
  };

  export {
    Metadata as Metadata
  };

  export {
    Move as Move
  };
}
