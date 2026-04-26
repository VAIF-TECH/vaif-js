// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Schedule extends APIResource {
  retrieve(functionID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/functions/${functionID}/schedule`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  update(functionID: string, body: ScheduleUpdateParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.put(path`/functions/${functionID}/schedule`, { body, ...options });
  }

  delete(functionID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/functions/${functionID}/schedule`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type ScheduleUpdateResponse = unknown;

export interface ScheduleUpdateParams {
  cron: string;

  enabled?: boolean;
}

export declare namespace Schedule {
  export {
    type ScheduleUpdateResponse as ScheduleUpdateResponse,
    type ScheduleUpdateParams as ScheduleUpdateParams,
  };
}
