// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as DedicatedAPI from './dedicated';
import { Dedicated, DedicatedCreateParams, DedicatedCreateResponse } from './dedicated';

export class Database extends APIResource {
  dedicated: DedicatedAPI.Dedicated = new DedicatedAPI.Dedicated(this._client);
}

Database.Dedicated = Dedicated;

export declare namespace Database {
  export {
    Dedicated as Dedicated,
    type DedicatedCreateResponse as DedicatedCreateResponse,
    type DedicatedCreateParams as DedicatedCreateParams,
  };
}
