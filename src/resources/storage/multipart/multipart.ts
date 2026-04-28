// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AbortAPI from './abort';
import { Abort, AbortAbortParams, AbortAbortResponse, BaseAbort } from './abort';
import * as CompleteAPI from './complete';
import { BaseComplete, Complete, CompleteCompleteParams, CompleteCompleteResponse } from './complete';
import * as CreateAPI from './create';
import { BaseCreate, Create, CreateCreateParams, CreateCreateResponse } from './create';
import * as PartURLAPI from './part-url';
import { BasePartURL, PartURL, PartURLPartURLParams, PartURLPartURLResponse } from './part-url';

export class BaseMultipart extends APIResource {
  static override readonly _key: readonly ['storage', 'multipart'] = Object.freeze([
    'storage',
    'multipart',
  ] as const);
}
export class Multipart extends BaseMultipart {
  abort: AbortAPI.Abort = new AbortAPI.Abort(this._client);
  complete: CompleteAPI.Complete = new CompleteAPI.Complete(this._client);
  create: CreateAPI.Create = new CreateAPI.Create(this._client);
  partURL: PartURLAPI.PartURL = new PartURLAPI.PartURL(this._client);
}

Multipart.Abort = Abort;
Multipart.BaseAbort = BaseAbort;
Multipart.Complete = Complete;
Multipart.BaseComplete = BaseComplete;
Multipart.Create = Create;
Multipart.BaseCreate = BaseCreate;
Multipart.PartURL = PartURL;
Multipart.BasePartURL = BasePartURL;

export declare namespace Multipart {
  export {
    Abort as Abort,
    BaseAbort as BaseAbort,
    type AbortAbortResponse as AbortAbortResponse,
    type AbortAbortParams as AbortAbortParams,
  };

  export {
    Complete as Complete,
    BaseComplete as BaseComplete,
    type CompleteCompleteResponse as CompleteCompleteResponse,
    type CompleteCompleteParams as CompleteCompleteParams,
  };

  export {
    Create as Create,
    BaseCreate as BaseCreate,
    type CreateCreateResponse as CreateCreateResponse,
    type CreateCreateParams as CreateCreateParams,
  };

  export {
    PartURL as PartURL,
    BasePartURL as BasePartURL,
    type PartURLPartURLResponse as PartURLPartURLResponse,
    type PartURLPartURLParams as PartURLPartURLParams,
  };
}
