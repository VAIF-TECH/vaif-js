// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CountAPI from './count';
import { Count } from './count';

export class Subscribers extends APIResource {
  count: CountAPI.Count = new CountAPI.Count(this._client);
}

Subscribers.Count = Count;

export declare namespace Subscribers {
  export {
    Count as Count
  };
}
