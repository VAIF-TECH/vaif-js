// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseDelivery extends APIResource {
  static override readonly _key: readonly ['jobs', 'webhooks', 'delivery'] = Object.freeze([
    'jobs',
    'webhooks',
    'delivery',
  ] as const);

  retrieve(deliveryID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/jobs/webhooks/delivery/${deliveryID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
export class Delivery extends BaseDelivery {}
