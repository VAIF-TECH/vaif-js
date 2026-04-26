// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as PromoteAPI from './promote';
import { BasePromote, Promote } from './promote';

export class BaseMemories extends APIResource {
  static override readonly _key: readonly ['ai', 'copilot', 'memories'] = Object.freeze(['ai', 'copilot', 'memories'] as const)

}
export class Memories extends BaseMemories {
  promote: PromoteAPI.Promote = new PromoteAPI.Promote(this._client);
}

Memories.Promote = Promote;
Memories.BasePromote = BasePromote;

export declare namespace Memories {
  export {
    Promote as Promote,
    BasePromote as BasePromote
  };
}
