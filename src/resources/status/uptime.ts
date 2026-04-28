// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseUptime extends APIResource {
  static override readonly _key: readonly ['status', 'uptime'] = Object.freeze(['status', 'uptime'] as const);

  /**
   * Get uptime history for a component
   */
  retrieve(componentID: string, options?: RequestOptions): APIPromise<UptimeRetrieveResponse> {
    return this._client.get(path`/status/uptime/${componentID}`, options);
  }
}
export class Uptime extends BaseUptime {}

export interface UptimeRetrieveResponse {
  componentId: string;

  days: number;

  history: Array<UptimeRetrieveResponse.History>;
}

export namespace UptimeRetrieveResponse {
  export interface History {
    avgLatency: number | null;

    date: string | (string & {});

    uptime: number;
  }
}

export declare namespace Uptime {
  export { type UptimeRetrieveResponse as UptimeRetrieveResponse };
}
