// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseTest extends APIResource {
  static override readonly _key: readonly ['database', 'connector', 'test'] = Object.freeze(['database', 'connector', 'test'] as const)

  test(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/database/connector/${projectID}/test`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}
export class Test extends BaseTest {

}
