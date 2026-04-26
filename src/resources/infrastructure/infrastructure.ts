// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as PollStatusAPI from './poll-status';
import { PollStatus } from './poll-status';
import * as SizesAPI from './sizes';
import { Sizes } from './sizes';

export class Infrastructure extends APIResource {
  pollStatus: PollStatusAPI.PollStatus = new PollStatusAPI.PollStatus(this._client);
  sizes: SizesAPI.Sizes = new SizesAPI.Sizes(this._client);
}

Infrastructure.PollStatus = PollStatus;
Infrastructure.Sizes = Sizes;

export declare namespace Infrastructure {
  export {
    PollStatus as PollStatus
  };

  export {
    Sizes as Sizes
  };
}
