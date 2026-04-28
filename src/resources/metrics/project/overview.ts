// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseOverview extends APIResource {
  static override readonly _key: readonly ['metrics', 'project', 'overview'] = Object.freeze([
    'metrics',
    'project',
    'overview',
  ] as const);

  getOverview(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/metrics/project/${projectID}/overview`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
export class Overview extends BaseOverview {}
