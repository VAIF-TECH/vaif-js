// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AbortAPI from './abort';
import { Abort, AbortAbortParams, AbortAbortResponse } from './abort';
import * as CompleteAPI from './complete';
import { Complete, CompleteCompleteParams, CompleteCompleteResponse } from './complete';
import * as CreateAPI from './create';
import { Create, CreateCreateParams, CreateCreateResponse } from './create';
import * as PartURLAPI from './part-url';
import { PartURL, PartURLPartURLParams, PartURLPartURLResponse } from './part-url';

export class Multipart extends APIResource {
  abort: AbortAPI.Abort = new AbortAPI.Abort(this._client);
  complete: CompleteAPI.Complete = new CompleteAPI.Complete(this._client);
  create: CreateAPI.Create = new CreateAPI.Create(this._client);
  partURL: PartURLAPI.PartURL = new PartURLAPI.PartURL(this._client);
}

Multipart.Abort = Abort;
Multipart.Complete = Complete;
Multipart.Create = Create;
Multipart.PartURL = PartURL;

export declare namespace Multipart {
  export {
    Abort as Abort,
    type AbortAbortResponse as AbortAbortResponse,
    type AbortAbortParams as AbortAbortParams
  };

  export {
    Complete as Complete,
    type CompleteCompleteResponse as CompleteCompleteResponse,
    type CompleteCompleteParams as CompleteCompleteParams
  };

  export {
    Create as Create,
    type CreateCreateResponse as CreateCreateResponse,
    type CreateCreateParams as CreateCreateParams
  };

  export {
    PartURL as PartURL,
    type PartURLPartURLResponse as PartURLPartURLResponse,
    type PartURLPartURLParams as PartURLPartURLParams
  };
}
