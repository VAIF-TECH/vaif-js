// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as PollStatusAPI from './poll-status';
import { BasePollStatus, PollStatus } from './poll-status';
import * as SizesAPI from './sizes';
import { BaseSizes, Sizes } from './sizes';

export class BaseInfrastructure extends APIResource {
  static override readonly _key: readonly ['infrastructure'] = Object.freeze(['infrastructure'] as const);
}
export class Infrastructure extends BaseInfrastructure {
  pollStatus: PollStatusAPI.PollStatus = new PollStatusAPI.PollStatus(this._client);
  sizes: SizesAPI.Sizes = new SizesAPI.Sizes(this._client);
}

Infrastructure.PollStatus = PollStatus;
Infrastructure.BasePollStatus = BasePollStatus;
Infrastructure.Sizes = Sizes;
Infrastructure.BaseSizes = BaseSizes;

export declare namespace Infrastructure {
  export { PollStatus as PollStatus, BasePollStatus as BasePollStatus };

  export { Sizes as Sizes, BaseSizes as BaseSizes };
}
