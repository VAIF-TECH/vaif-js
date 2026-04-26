// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class BaseCreateProject extends APIResource {
  static override readonly _key: readonly ['templates', 'createProject'] = Object.freeze(['templates', 'createProject'] as const)

  create(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/templates/create-project', { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}
export class CreateProject extends BaseCreateProject {

}
