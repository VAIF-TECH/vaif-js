// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as GenerateAPI from './generate';
import { Generate } from './generate';

export class SDK extends APIResource {
  generate: GenerateAPI.Generate = new GenerateAPI.Generate(this._client);
}

SDK.Generate = Generate;

export declare namespace SDK {
  export {
    Generate as Generate
  };
}
