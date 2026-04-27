// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CopilotAPI from './copilot/copilot';
import { BaseCopilot, Copilot } from './copilot/copilot';

export class BaseAI extends APIResource {
  static override readonly _key: readonly ['ai'] = Object.freeze(['ai'] as const)

}
export class AI extends BaseAI {
  copilot: CopilotAPI.Copilot = new CopilotAPI.Copilot(this._client);
}

AI.Copilot = Copilot;
AI.BaseCopilot = BaseCopilot;

export declare namespace AI {
  export {
    Copilot as Copilot,
    BaseCopilot as BaseCopilot
  };
}
