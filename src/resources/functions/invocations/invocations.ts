// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as FunctionAPI from './function';
import { Function } from './function';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Invocations extends APIResource {
  function: FunctionAPI.Function = new FunctionAPI.Function(this._client);

  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/functions/invocations', { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  getInvocations(functionID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/functions/${functionID}/invocations`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}

Invocations.Function = Function;

export declare namespace Invocations {
  export {
    Function as Function
  };
}
