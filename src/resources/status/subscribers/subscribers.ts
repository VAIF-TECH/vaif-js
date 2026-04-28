// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CountAPI from './count';
import { BaseCount, Count } from './count';

export class BaseSubscribers extends APIResource {
  static override readonly _key: readonly ['status', 'subscribers'] = Object.freeze([
    'status',
    'subscribers',
  ] as const);
}
export class Subscribers extends BaseSubscribers {
  count: CountAPI.Count = new CountAPI.Count(this._client);
}

Subscribers.Count = Count;
Subscribers.BaseCount = BaseCount;

export declare namespace Subscribers {
  export { Count as Count, BaseCount as BaseCount };
}
