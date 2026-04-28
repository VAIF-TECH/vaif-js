// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as BranchesAPI from './branches';
import { BaseBranches, Branches } from './branches';
import * as CloneAPI from './clone';
import { BaseClone, Clone } from './clone';
import * as CommitAPI from './commit';
import { BaseCommit, Commit } from './commit';
import * as FilesAPI from './files';
import { BaseFiles, Files } from './files';
import * as InitAPI from './init';
import { BaseInit, Init } from './init';
import * as LogAPI from './log';
import { BaseLog, Log } from './log';
import * as PullAPI from './pull';
import { BasePull, Pull } from './pull';
import * as PushAPI from './push';
import { BasePush, Push } from './push';
import * as StatusAPI from './status';
import { BaseStatus, Status } from './status';
import * as WriteAPI from './write';
import { BaseWrite, Write } from './write';

export class BaseGit extends APIResource {
  static override readonly _key: readonly ['ai', 'copilot', 'git'] = Object.freeze([
    'ai',
    'copilot',
    'git',
  ] as const);
}
export class Git extends BaseGit {
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
Git.BaseBranches = BaseBranches;
Git.Clone = Clone;
Git.BaseClone = BaseClone;
Git.Commit = Commit;
Git.BaseCommit = BaseCommit;
Git.Files = Files;
Git.BaseFiles = BaseFiles;
Git.Init = Init;
Git.BaseInit = BaseInit;
Git.Log = Log;
Git.BaseLog = BaseLog;
Git.Pull = Pull;
Git.BasePull = BasePull;
Git.Push = Push;
Git.BasePush = BasePush;
Git.Status = Status;
Git.BaseStatus = BaseStatus;
Git.Write = Write;
Git.BaseWrite = BaseWrite;

export declare namespace Git {
  export { Branches as Branches, BaseBranches as BaseBranches };

  export { Clone as Clone, BaseClone as BaseClone };

  export { Commit as Commit, BaseCommit as BaseCommit };

  export { Files as Files, BaseFiles as BaseFiles };

  export { Init as Init, BaseInit as BaseInit };

  export { Log as Log, BaseLog as BaseLog };

  export { Pull as Pull, BasePull as BasePull };

  export { Push as Push, BasePush as BasePush };

  export { Status as Status, BaseStatus as BaseStatus };

  export { Write as Write, BaseWrite as BaseWrite };
}
