// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as BranchesAPI from './branches';
import { Branches } from './branches';
import * as CloneAPI from './clone';
import { Clone } from './clone';
import * as CommitAPI from './commit';
import { Commit } from './commit';
import * as FilesAPI from './files';
import { Files } from './files';
import * as InitAPI from './init';
import { Init } from './init';
import * as LogAPI from './log';
import { Log } from './log';
import * as PullAPI from './pull';
import { Pull } from './pull';
import * as PushAPI from './push';
import { Push } from './push';
import * as StatusAPI from './status';
import { Status } from './status';
import * as WriteAPI from './write';
import { Write } from './write';

export class Git extends APIResource {
  branches: BranchesAPI.Branches = new BranchesAPI.Branches(this._client);
  clone: CloneAPI.Clone = new CloneAPI.Clone(this._client);
  commit: CommitAPI.Commit = new CommitAPI.Commit(this._client);
  files: FilesAPI.Files = new FilesAPI.Files(this._client);
  init: InitAPI.Init = new InitAPI.Init(this._client);
  log: LogAPI.Log = new LogAPI.Log(this._client);
  pull: PullAPI.Pull = new PullAPI.Pull(this._client);
  push: PushAPI.Push = new PushAPI.Push(this._client);
  status: StatusAPI.Status = new StatusAPI.Status(this._client);
  write: WriteAPI.Write = new WriteAPI.Write(this._client);
}

Git.Branches = Branches;
Git.Clone = Clone;
Git.Commit = Commit;
Git.Files = Files;
Git.Init = Init;
Git.Log = Log;
Git.Pull = Pull;
Git.Push = Push;
Git.Status = Status;
Git.Write = Write;

export declare namespace Git {
  export {
    Branches as Branches
  };

  export {
    Clone as Clone
  };

  export {
    Commit as Commit
  };

  export {
    Files as Files
  };

  export {
    Init as Init
  };

  export {
    Log as Log
  };

  export {
    Pull as Pull
  };

  export {
    Push as Push
  };

  export {
    Status as Status
  };

  export {
    Write as Write
  };
}
