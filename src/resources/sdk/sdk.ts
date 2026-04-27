// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as GenerateAPI from './generate';
import { BaseGenerate, Generate } from './generate';

export class BaseSDK extends APIResource {
  static override readonly _key: readonly ['sdk'] = Object.freeze(['sdk'] as const)

}
export class SDK extends BaseSDK {
  generate: GenerateAPI.Generate = new GenerateAPI.Generate(this._client);
}

SDK.Generate = Generate;
SDK.BaseGenerate = BaseGenerate;

export declare namespace SDK {
  export {
    Generate as Generate,
    BaseGenerate as BaseGenerate
  };
}
