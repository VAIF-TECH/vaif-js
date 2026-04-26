// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ProjectAPI from './project';
import { Project, ProjectRetrieveResponse } from './project';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Schemas extends APIResource {
  project: ProjectAPI.Project = new ProjectAPI.Project(this._client);

  /**
   * Save a project schema
   */
  create(body: SchemaCreateParams, options?: RequestOptions): APIPromise<SchemaCreateResponse> {
    return this._client.post('/schemas/', { body, ...options });
  }
}

export interface SchemaCreateResponse {
  id: string;

  createdAt: string | (string & {});

  name: string;

  projectId: string;

  envId?: string | null;

  schema?: unknown;

[k: string]: unknown
}

export interface SchemaCreateParams {
  projectId: string;

  envId?: string;

  name?: string;

  schema?: unknown;
}

Schemas.Project = Project;

export declare namespace Schemas {
  export {
    type SchemaCreateResponse as SchemaCreateResponse,
    type SchemaCreateParams as SchemaCreateParams
  };

  export {
    Project as Project,
    type ProjectRetrieveResponse as ProjectRetrieveResponse
  };
}
