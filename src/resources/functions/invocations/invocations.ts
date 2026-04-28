// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as FunctionAPI from './function';
import { BaseFunction, Function } from './function';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseInvocations extends APIResource {
  static override readonly _key: readonly ['functions', 'invocations'] = Object.freeze([
    'functions',
    'invocations',
  ] as const);

  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/functions/invocations', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  getInvocations(functionID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/functions/${functionID}/invocations`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
export class Invocations extends BaseInvocations {
  function: FunctionAPI.Function = new FunctionAPI.Function(this._client);
}

Invocations.Function = Function;
Invocations.BaseFunction = BaseFunction;

export declare namespace Invocations {
  export { Function as Function, BaseFunction as BaseFunction };
}
