// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as StreamAPI from './stream';
import { BaseStream, Stream } from './stream';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseProject extends APIResource {
  static override readonly _key: readonly ['logs', 'project'] = Object.freeze(['logs', 'project'] as const);

  /**
   * List logs for a project
   */
  retrieve(
    projectID: string,
    query: ProjectRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ProjectRetrieveResponse> {
    return this._client.get(path`/logs/project/${projectID}`, { query, ...options });
  }
}
export class Project extends BaseProject {
  stream: StreamAPI.Stream = new StreamAPI.Stream(this._client);
}

export type ProjectRetrieveResponse = Array<ProjectRetrieveResponse.ProjectRetrieveResponseItem>;

export namespace ProjectRetrieveResponse {
  export interface ProjectRetrieveResponseItem {
    id: string;

    projectId: string | null;

    createdAt?: string | (string & {}) | null;

    level?: string | null;

    message?: string | null;

    [k: string]: unknown;
  }
}

export interface ProjectRetrieveParams {
  level?: 'info' | 'warn' | 'error';

  limit?: number;
}

Project.Stream = Stream;
Project.BaseStream = BaseStream;

export declare namespace Project {
  export {
    type ProjectRetrieveResponse as ProjectRetrieveResponse,
    type ProjectRetrieveParams as ProjectRetrieveParams,
  };

  export { Stream as Stream, BaseStream as BaseStream };
}
