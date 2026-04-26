// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as TokensAPI from './tokens';
import {
  TokenCreateParams,
  TokenCreateResponse,
  TokenListByProjectResponse,
  TokenRevokeResponse,
  Tokens,
} from './tokens';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Deployments extends APIResource {
  tokens: TokensAPI.Tokens = new TokensAPI.Tokens(this._client);

  retrieve(deploymentID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/deployments/${deploymentID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  listSteps(deploymentID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/deployments/${deploymentID}/steps`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  promote(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/deployments/promote', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  retrieveByProject(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/deployments/project/${projectID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  rollback(deploymentID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/deployments/${deploymentID}/rollback`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  trigger(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/deployments/trigger', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

Deployments.Tokens = Tokens;

export declare namespace Deployments {
  export {
    Tokens as Tokens,
    type TokenCreateResponse as TokenCreateResponse,
    type TokenListByProjectResponse as TokenListByProjectResponse,
    type TokenRevokeResponse as TokenRevokeResponse,
    type TokenCreateParams as TokenCreateParams,
  };
}
