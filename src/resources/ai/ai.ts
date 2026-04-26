// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CopilotAPI from './copilot/copilot';
import { Copilot } from './copilot/copilot';

export class AI extends APIResource {
  copilot: CopilotAPI.Copilot = new CopilotAPI.Copilot(this._client);
}

AI.Copilot = Copilot;

export declare namespace AI {
  export {
    Copilot as Copilot
  };
}
