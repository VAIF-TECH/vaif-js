// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseTest extends APIResource {
  static override readonly _key: readonly ['integrations', 'subscriptions', 'test'] = Object.freeze(['integrations', 'subscriptions', 'test'] as const)

  /**
   * Send a test event to an integration subscription
   */
  test(id: string, options?: RequestOptions): APIPromise<TestTestResponse> {
    return this._client.post(path`/integrations/subscriptions/${id}/test`, options);
  }
}
export class Test extends BaseTest {

}

export interface TestTestResponse {
  ok: true;
}

export declare namespace Test {
  export {
    type TestTestResponse as TestTestResponse
  };
}
