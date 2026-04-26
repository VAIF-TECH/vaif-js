// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as PauseAPI from './pause';
import { Pause } from './pause';
import * as ResumeAPI from './resume';
import { Resume, ResumeResumeParams, ResumeResumeResponse } from './resume';
import * as RollbackAPI from './rollback';
import { Rollback, RollbackRollbackParams, RollbackRollbackResponse } from './rollback';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Executions extends APIResource {
  pause: PauseAPI.Pause = new PauseAPI.Pause(this._client);
  resume: ResumeAPI.Resume = new ResumeAPI.Resume(this._client);
  rollback: RollbackAPI.Rollback = new RollbackAPI.Rollback(this._client);

  retrieve(executionID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/ai/copilot/execution/${executionID}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  retrieve2(sessionID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/ai/copilot/executions/${sessionID}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}

Executions.Pause = Pause;
Executions.Resume = Resume;
Executions.Rollback = Rollback;

export declare namespace Executions {
  export {
    Pause as Pause
  };

  export {
    Resume as Resume,
    type ResumeResumeResponse as ResumeResumeResponse,
    type ResumeResumeParams as ResumeResumeParams
  };

  export {
    Rollback as Rollback,
    type RollbackRollbackResponse as RollbackRollbackResponse,
    type RollbackRollbackParams as RollbackRollbackParams
  };
}
