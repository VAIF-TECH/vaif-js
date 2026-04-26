// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Dedicated extends APIResource {
  create(projectID: string, body: DedicatedCreateParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post(path`/projects/${projectID}/database/dedicated`, { body, ...options });
  }

  retrieve(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/projects/${projectID}/database/dedicated`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  delete(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/projects/${projectID}/database/dedicated`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  restart(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/projects/${projectID}/database/dedicated/restart`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  retrieveConnection(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/projects/${projectID}/database/dedicated/connection`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  retrieveStatus(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/projects/${projectID}/database/dedicated/status`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type DedicatedCreateResponse = unknown;

export interface DedicatedCreateParams {
  tier: 'micro' | 'small' | 'medium' | 'large' | 'xl' | '2xl' | 'custom';

  customRamGb?: number;

  customStorageGb?: number;

  customVcpus?: number;

  postgresVersion?: string;

  region?: string;
}

export declare namespace Dedicated {
  export {
    type DedicatedCreateResponse as DedicatedCreateResponse,
    type DedicatedCreateParams as DedicatedCreateParams,
  };
}
