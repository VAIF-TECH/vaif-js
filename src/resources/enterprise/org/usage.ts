// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseUsage extends APIResource {
  static override readonly _key: readonly ['enterprise', 'org', 'usage'] = Object.freeze([
    'enterprise',
    'org',
    'usage',
  ] as const);

  getHistory(orgID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/enterprise/org/${orgID}/usage/history`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  getProjects(orgID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/enterprise/org/${orgID}/usage/projects`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  getUsage(orgID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/enterprise/org/${orgID}/usage`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
export class Usage extends BaseUsage {}
