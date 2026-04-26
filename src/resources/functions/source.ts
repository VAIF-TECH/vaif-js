// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Source extends APIResource {
  source(functionID: string, body: SourceSourceParams, options?: RequestOptions): APIPromise<SourceSourceResponse> {
    return this._client.put(path`/functions/${functionID}/source`, { body, ...options });
  }
}

export interface SourceSourceResponse {
  ok: true;
}

export interface SourceSourceParams {
  sourceCode: string;
}

export declare namespace Source {
  export {
    type SourceSourceResponse as SourceSourceResponse,
    type SourceSourceParams as SourceSourceParams
  };
}
