// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as HistoryAPI from './history';
import { History, HistoryRetrieveParams, HistoryRetrieveResponse } from './history';
import * as RollbackAPI from './rollback';
import { Rollback } from './rollback';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Deploy extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);
  rollback: RollbackAPI.Rollback = new RollbackAPI.Rollback(this._client);

  /**
   * Deploy Copilot-generated resources (SSE stream)
   */
  create(body: DeployCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/ai/copilot/deploy', { body, ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  /**
   * Get a single deploy record
   */
  retrieve(deployID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(path`/ai/copilot/deploy/${deployID}`, options);
  }
}

export type DeployRetrieveResponse = unknown

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

Deploy.History = History;
Deploy.Rollback = Rollback;

export declare namespace Deploy {
  export {
    type DeployRetrieveResponse as DeployRetrieveResponse,
    type DeployCreateParams as DeployCreateParams
  };

  export {
    History as History,
    type HistoryRetrieveResponse as HistoryRetrieveResponse,
    type HistoryRetrieveParams as HistoryRetrieveParams
  };

  export {
    Rollback as Rollback
  };
}
