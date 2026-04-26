// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Deploy extends APIResource {
  /**
   * Deploy Copilot-generated resources (SSE stream)
   */
  create(body: DeployCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/ai/copilot/deploy', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * List deploy history for a project
   */
  retrieve(
    projectID: string,
    query: DeployRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DeployRetrieveResponse> {
    return this._client.get(path`/ai/copilot/deploy/history/${projectID}`, { query, ...options });
  }

  /**
   * Rollback a deploy (SSE stream)
   */
  rollback(deployID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/ai/copilot/deploy/${deployID}/rollback`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface DeployRetrieveResponse {
  deploys: Array<unknown>;

  pagination: DeployRetrieveResponse.Pagination;
}

export namespace DeployRetrieveResponse {
  export interface Pagination {
    hasMore: boolean;

    limit: number;

    offset: number;
  }
}

export interface DeployCreateParams {
  projectId: string;

  resources: Array<DeployCreateParams.Resource>;

  dryRun?: boolean;

  sessionId?: string;
}

export namespace DeployCreateParams {
  export interface Resource {
    id: string;

    content: string;

    path: string;

    type: 'schema' | 'storage' | 'functions' | 'routes' | 'cron' | 'auth';

    name?: string;
  }
}

export interface DeployRetrieveParams {
  limit?: number;

  offset?: number;

  status?: 'success' | 'failed' | 'partial_failure' | 'rolled_back' | 'in_progress';
}

export declare namespace Deploy {
  export {
    type DeployRetrieveResponse as DeployRetrieveResponse,
    type DeployCreateParams as DeployCreateParams,
    type DeployRetrieveParams as DeployRetrieveParams,
  };
}
