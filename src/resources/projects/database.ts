// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Database extends APIResource {
  dedicated(projectID: string, body: DatabaseDedicatedParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post(path`/projects/${projectID}/database/dedicated`, { body, ...options });
  }

  dedicated2(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/projects/${projectID}/database/dedicated`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  getConnection(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/projects/${projectID}/database/dedicated/connection`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  getDedicated(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/projects/${projectID}/database/dedicated`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  getStatus(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/projects/${projectID}/database/dedicated/status`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  restart(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/projects/${projectID}/database/dedicated/restart`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}

export type DatabaseDedicatedResponse = unknown

export interface DatabaseDedicatedParams {
  tier: 'micro' | 'small' | 'medium' | 'large' | 'xl' | '2xl' | 'custom';

  customRamGb?: number;

  customStorageGb?: number;

  customVcpus?: number;

  postgresVersion?: string;

  region?: string;
}

export declare namespace Database {
  export {
    type DatabaseDedicatedResponse as DatabaseDedicatedResponse,
    type DatabaseDedicatedParams as DatabaseDedicatedParams
  };
}
