// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Resume extends APIResource {
  resume(executionID: string, body: ResumeResumeParams, options?: RequestOptions): APIPromise<ResumeResumeResponse> {
    return this._client.post(path`/ai/copilot/execution/${executionID}/resume`, { body, ...options });
  }
}

export interface ResumeResumeResponse {
  executionId: string;

  message: string;

  ok: true;

  fromCheckpoint?: string;
}

export interface ResumeResumeParams {
  fromCheckpoint?: string;
}

export declare namespace Resume {
  export {
    type ResumeResumeResponse as ResumeResumeResponse,
    type ResumeResumeParams as ResumeResumeParams
  };
}
