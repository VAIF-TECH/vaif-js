// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseSchedule extends APIResource {
  static override readonly _key: readonly ['functions', 'schedule'] = Object.freeze([
    'functions',
    'schedule',
  ] as const);

  getSchedule(functionID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/functions/${functionID}/schedule`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  schedule(functionID: string, body: ScheduleScheduleParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.put(path`/functions/${functionID}/schedule`, { body, ...options });
  }

  schedule2(functionID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/functions/${functionID}/schedule`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
export class Schedule extends BaseSchedule {}

export type ScheduleScheduleResponse = unknown;

export interface ScheduleScheduleParams {
  cron: string;

  enabled?: boolean;
}

export declare namespace Schedule {
  export {
    type ScheduleScheduleResponse as ScheduleScheduleResponse,
    type ScheduleScheduleParams as ScheduleScheduleParams,
  };
}
