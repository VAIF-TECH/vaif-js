// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseRevoke extends APIResource {
  static override readonly _key: readonly ['projects', 'apiKeys', 'revoke'] = Object.freeze([
    'projects',
    'apiKeys',
    'revoke',
  ] as const);

  revoke(keyID: string, params: RevokeRevokeParams, options?: RequestOptions): APIPromise<void> {
    const { projectId } = params;
    return this._client.post(path`/projects/${projectId}/api-keys/${keyID}/revoke`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
export class Revoke extends BaseRevoke {}

export interface RevokeRevokeParams {
  projectId: string;
}

export declare namespace Revoke {
  export { type RevokeRevokeParams as RevokeRevokeParams };
}
