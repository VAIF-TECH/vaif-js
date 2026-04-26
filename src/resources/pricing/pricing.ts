// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AIFeaturesAPI from './ai-features';
import { AIFeatures } from './ai-features';
import * as CompareAPI from './compare';
import { Compare } from './compare';
import * as EnterpriseAPI from './enterprise';
import { Enterprise } from './enterprise';
import * as PlansAPI from './plans';
import { Plans } from './plans';

export class Pricing extends APIResource {
  aiFeatures: AIFeaturesAPI.AIFeatures = new AIFeaturesAPI.AIFeatures(this._client);
  compare: CompareAPI.Compare = new CompareAPI.Compare(this._client);
  enterprise: EnterpriseAPI.Enterprise = new EnterpriseAPI.Enterprise(this._client);
  plans: PlansAPI.Plans = new PlansAPI.Plans(this._client);
}

Pricing.AIFeatures = AIFeatures;
Pricing.Compare = Compare;
Pricing.Enterprise = Enterprise;
Pricing.Plans = Plans;

export declare namespace Pricing {
  export {
    AIFeatures as AIFeatures
  };

  export {
    Compare as Compare
  };

  export {
    Enterprise as Enterprise
  };

  export {
    Plans as Plans
  };
}
