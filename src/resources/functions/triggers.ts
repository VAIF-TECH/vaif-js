// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseTriggers extends APIResource {
  static override readonly _key: readonly ['functions', 'triggers'] = Object.freeze(['functions', 'triggers'] as const)

  delete(triggerID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/functions/triggers/${triggerID}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  getTriggers(functionID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/functions/${functionID}/triggers`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  triggers(functionID: string, body: TriggerTriggersParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post(path`/functions/${functionID}/triggers`, { body, ...options });
  }
}
export class Triggers extends BaseTriggers {

}

export type TriggerTriggersResponse = unknown

export interface TriggerTriggersParams {
  event: 'db.insert' | 'db.update' | 'db.delete';

  tableName: string;

  enabled?: boolean;

  filter?: { [key: string]: unknown };
}

export declare namespace Triggers {
  export {
    type TriggerTriggersResponse as TriggerTriggersResponse,
    type TriggerTriggersParams as TriggerTriggersParams
  };
}
