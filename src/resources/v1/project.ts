// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class BaseProject extends APIResource {
  static override readonly _key: readonly ['v1', 'project'] = Object.freeze(['v1', 'project'] as const);

  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/v1/project', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
export class Project extends BaseProject {}
