// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseGitHub extends APIResource {
  static override readonly _key: readonly ['projects', 'github'] = Object.freeze(['projects', 'github'] as const)

  branch(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/projects/${projectID}/github/branch`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  connect(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/projects/${projectID}/github/connect`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  disconnect(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/projects/${projectID}/github/disconnect`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  getBranches(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/projects/${projectID}/github/branches`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  getRepos(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/projects/${projectID}/github/repos`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  getStatus(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/projects/${projectID}/github/status`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  getTrackedRepos(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/projects/${projectID}/github/tracked-repos`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  pull(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/projects/${projectID}/github/pull`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  push(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/projects/${projectID}/github/push`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}
export class GitHub extends BaseGitHub {

}
