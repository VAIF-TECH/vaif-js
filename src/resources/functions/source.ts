// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseSource extends APIResource {
  static override readonly _key: readonly ['functions', 'source'] = Object.freeze([
    'functions',
    'source',
  ] as const);

  source(
    functionID: string,
    body: SourceSourceParams,
    options?: RequestOptions,
  ): APIPromise<SourceSourceResponse> {
    return this._client.put(path`/functions/${functionID}/source`, { body, ...options });
  }
}
export class Source extends BaseSource {}

export interface SourceSourceResponse {
  ok: true;
}

export interface SourceSourceParams {
  sourceCode: string;
}

export declare namespace Source {
  export { type SourceSourceResponse as SourceSourceResponse, type SourceSourceParams as SourceSourceParams };
}
