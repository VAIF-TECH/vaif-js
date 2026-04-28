// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseMembers extends APIResource {
  static override readonly _key: readonly ['projects', 'members'] = Object.freeze([
    'projects',
    'members',
  ] as const);

  delete(userID: string, params: MemberDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { projectId } = params;
    return this._client.delete(path`/projects/${projectId}/members/${userID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  getMembers(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/projects/${projectID}/members`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  members(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/projects/${projectID}/members`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
export class Members extends BaseMembers {}

export interface MemberDeleteParams {
  projectId: string;
}

export declare namespace Members {
  export { type MemberDeleteParams as MemberDeleteParams };
}
