// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ProjectAPI from './project';
import { BaseProject, Project, ProjectRetrieveResponse } from './project';
import * as RevokeAPI from './revoke';
import { BaseRevoke, Revoke, RevokeRevokeResponse } from './revoke';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class BaseTokens extends APIResource {
  static override readonly _key: readonly ['deployments', 'tokens'] = Object.freeze([
    'deployments',
    'tokens',
  ] as const);

  /**
   * Create a deployment token
   */
  create(body: TokenCreateParams, options?: RequestOptions): APIPromise<TokenCreateResponse> {
    return this._client.post('/deployments/tokens', { body, ...options });
  }
}
export class Tokens extends BaseTokens {
  project: ProjectAPI.Project = new ProjectAPI.Project(this._client);
  revoke: RevokeAPI.Revoke = new RevokeAPI.Revoke(this._client);
}

export interface TokenCreateResponse {
  id: string;

  token: string;

  ok: true;
}

export interface TokenCreateParams {
  envId: string;

  projectId: string;
}

Tokens.Project = Project;
Tokens.BaseProject = BaseProject;
Tokens.Revoke = Revoke;
Tokens.BaseRevoke = BaseRevoke;

export declare namespace Tokens {
  export { type TokenCreateResponse as TokenCreateResponse, type TokenCreateParams as TokenCreateParams };

  export {
    Project as Project,
    BaseProject as BaseProject,
    type ProjectRetrieveResponse as ProjectRetrieveResponse,
  };

  export { Revoke as Revoke, BaseRevoke as BaseRevoke, type RevokeRevokeResponse as RevokeRevokeResponse };
}
