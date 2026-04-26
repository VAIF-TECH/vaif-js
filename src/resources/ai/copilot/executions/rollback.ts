// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Rollback extends APIResource {
  rollback(executionID: string, body: RollbackRollbackParams, options?: RequestOptions): APIPromise<RollbackRollbackResponse> {
    return this._client.post(path`/ai/copilot/execution/${executionID}/rollback`, { body, ...options });
  }
}

export interface RollbackRollbackResponse {
  checkpoint: RollbackRollbackResponse.Checkpoint;

  message: string;

  ok: true;
}

export namespace RollbackRollbackResponse {
  export interface Checkpoint {
    id: string;

    stepId: string;

    stepIndex: number;

  [k: string]: unknown
  }
}

export interface RollbackRollbackParams {
  checkpointId: string;
}

export declare namespace Rollback {
  export {
    type RollbackRollbackResponse as RollbackRollbackResponse,
    type RollbackRollbackParams as RollbackRollbackParams
  };
}
