// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Triggers extends APIResource {
  create(functionID: string, body: TriggerCreateParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post(path`/functions/${functionID}/triggers`, { body, ...options });
  }

  list(functionID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/functions/${functionID}/triggers`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  delete(triggerID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/functions/triggers/${triggerID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type TriggerCreateResponse = unknown;

export interface TriggerCreateParams {
  event: 'db.insert' | 'db.update' | 'db.delete';

  tableName: string;

  enabled?: boolean;

  filter?: { [key: string]: unknown };
}

export declare namespace Triggers {
  export {
    type TriggerCreateResponse as TriggerCreateResponse,
    type TriggerCreateParams as TriggerCreateParams,
  };
}
