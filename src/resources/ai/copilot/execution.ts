// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Execution extends APIResource {
  retrieve(executionID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/ai/copilot/execution/${executionID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  pause(executionID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/ai/copilot/execution/${executionID}/pause`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  resume(
    executionID: string,
    body: ExecutionResumeParams,
    options?: RequestOptions,
  ): APIPromise<ExecutionResumeResponse> {
    return this._client.post(path`/ai/copilot/execution/${executionID}/resume`, { body, ...options });
  }

  rollback(
    executionID: string,
    body: ExecutionRollbackParams,
    options?: RequestOptions,
  ): APIPromise<ExecutionRollbackResponse> {
    return this._client.post(path`/ai/copilot/execution/${executionID}/rollback`, { body, ...options });
  }
}

export interface ExecutionResumeResponse {
  executionId: string;

  message: string;

  ok: true;

  fromCheckpoint?: string;
}

export interface ExecutionRollbackResponse {
  checkpoint: ExecutionRollbackResponse.Checkpoint;

  message: string;

  ok: true;
}

export namespace ExecutionRollbackResponse {
  export interface Checkpoint {
    id: string;

    stepId: string;

    stepIndex: number;

    [k: string]: unknown;
  }
}

export interface ExecutionResumeParams {
  fromCheckpoint?: string;
}

export interface ExecutionRollbackParams {
  checkpointId: string;
}

export declare namespace Execution {
  export {
    type ExecutionResumeResponse as ExecutionResumeResponse,
    type ExecutionRollbackResponse as ExecutionRollbackResponse,
    type ExecutionResumeParams as ExecutionResumeParams,
    type ExecutionRollbackParams as ExecutionRollbackParams,
  };
}
