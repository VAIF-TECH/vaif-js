// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Schemas extends APIResource {
  /**
   * Save a project schema
   */
  create(body: SchemaCreateParams, options?: RequestOptions): APIPromise<SchemaCreateResponse> {
    return this._client.post('/schemas/', { body, ...options });
  }

  /**
   * List schemas for a project
   */
  listForProject(projectID: string, options?: RequestOptions): APIPromise<SchemaListForProjectResponse> {
    return this._client.get(path`/schemas/project/${projectID}`, options);
  }
}

export interface SchemaCreateResponse {
  id: string;

  createdAt: string | (string & {});

  name: string;

  projectId: string;

  envId?: string | null;

  schema?: unknown;

  [k: string]: unknown;
}

export type SchemaListForProjectResponse =
  Array<SchemaListForProjectResponse.SchemaListForProjectResponseItem>;

export namespace SchemaListForProjectResponse {
  export interface SchemaListForProjectResponseItem {
    id: string;

    createdAt: string | (string & {});

    name: string;

    projectId: string;

    envId?: string | null;

    schema?: unknown;

    [k: string]: unknown;
  }
}

export interface SchemaCreateParams {
  projectId: string;

  envId?: string;

  name?: string;

  schema?: unknown;
}

export declare namespace Schemas {
  export {
    type SchemaCreateResponse as SchemaCreateResponse,
    type SchemaListForProjectResponse as SchemaListForProjectResponse,
    type SchemaCreateParams as SchemaCreateParams,
  };
}
