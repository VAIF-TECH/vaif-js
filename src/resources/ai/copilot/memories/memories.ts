// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as PromoteAPI from './promote';
import { Promote } from './promote';

export class Memories extends APIResource {
  promote: PromoteAPI.Promote = new PromoteAPI.Promote(this._client);
}

Memories.Promote = Promote;

export declare namespace Memories {
  export {
    Promote as Promote
  };
}
