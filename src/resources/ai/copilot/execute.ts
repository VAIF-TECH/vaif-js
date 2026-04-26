// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Execute extends APIResource {
  create(body: ExecuteCreateParams, options?: RequestOptions): APIPromise<ExecuteCreateResponse> {
    return this._client.post('/ai/copilot/execute', { body, ...options });
  }
}

export interface ExecuteCreateResponse {
  ok: boolean;

  artifacts?: unknown;

  dryRun?: boolean;

  error?: unknown;

  plan?: unknown;

  results?: Array<unknown>;

[k: string]: unknown
}

export interface ExecuteCreateParams {
  planId: string;

  sessionId: string;

  dryRun?: boolean;

  stepIds?: Array<string>;
}

export declare namespace Execute {
  export {
    type ExecuteCreateResponse as ExecuteCreateResponse,
    type ExecuteCreateParams as ExecuteCreateParams
  };
}
