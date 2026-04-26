// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as PauseAPI from './pause';
import { BasePause, Pause } from './pause';
import * as ResumeAPI from './resume';
import { BaseResume, Resume, ResumeResumeParams, ResumeResumeResponse } from './resume';
import * as RollbackAPI from './rollback';
import { BaseRollback, Rollback, RollbackRollbackParams, RollbackRollbackResponse } from './rollback';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BaseExecutions extends APIResource {
  static override readonly _key: readonly ['ai', 'copilot', 'executions'] = Object.freeze(['ai', 'copilot', 'executions'] as const)

  retrieve(executionID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/ai/copilot/execution/${executionID}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  retrieve2(sessionID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/ai/copilot/executions/${sessionID}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}
export class Executions extends BaseExecutions {
  pause: PauseAPI.Pause = new PauseAPI.Pause(this._client);
  resume: ResumeAPI.Resume = new ResumeAPI.Resume(this._client);
  rollback: RollbackAPI.Rollback = new RollbackAPI.Rollback(this._client);
}

Executions.Pause = Pause;
Executions.BasePause = BasePause;
Executions.Resume = Resume;
Executions.BaseResume = BaseResume;
Executions.Rollback = Rollback;
Executions.BaseRollback = BaseRollback;

export declare namespace Executions {
  export {
    Pause as Pause,
    BasePause as BasePause
  };

  export {
    Resume as Resume,
    BaseResume as BaseResume,
    type ResumeResumeResponse as ResumeResumeResponse,
    type ResumeResumeParams as ResumeResumeParams
  };

  export {
    Rollback as Rollback,
    BaseRollback as BaseRollback,
    type RollbackRollbackResponse as RollbackRollbackResponse,
    type RollbackRollbackParams as RollbackRollbackParams
  };
}
