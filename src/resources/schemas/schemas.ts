// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ProjectAPI from './project';
import { BaseProject, Project, ProjectRetrieveResponse } from './project';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class BaseSchemas extends APIResource {
  static override readonly _key: readonly ['schemas'] = Object.freeze(['schemas'] as const)

  /**
   * Save a project schema
   */
  create(body: SchemaCreateParams, options?: RequestOptions): APIPromise<SchemaCreateResponse> {
    return this._client.post('/schemas/', { body, ...options });
  }
}
export class Schemas extends BaseSchemas {
  project: ProjectAPI.Project = new ProjectAPI.Project(this._client);
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
Schemas.BaseProject = BaseProject;

export declare namespace Schemas {
  export {
    type SchemaCreateResponse as SchemaCreateResponse,
    type SchemaCreateParams as SchemaCreateParams
  };

  export {
    Project as Project,
    BaseProject as BaseProject,
    type ProjectRetrieveResponse as ProjectRetrieveResponse
  };
}
