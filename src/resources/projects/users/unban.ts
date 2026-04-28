// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseUnban extends APIResource {
  static override readonly _key: readonly ['projects', 'users', 'unban'] = Object.freeze([
    'projects',
    'users',
    'unban',
  ] as const);

  unban(userID: string, params: UnbanUnbanParams, options?: RequestOptions): APIPromise<void> {
    const { projectId } = params;
    return this._client.post(path`/projects/${projectId}/users/${userID}/unban`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
export class Unban extends BaseUnban {}

export interface UnbanUnbanParams {
  projectId: string;
}

export declare namespace Unban {
  export { type UnbanUnbanParams as UnbanUnbanParams };
}
