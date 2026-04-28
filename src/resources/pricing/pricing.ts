// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AIFeaturesAPI from './ai-features';
import { AIFeatures, BaseAIFeatures } from './ai-features';
import * as CompareAPI from './compare';
import { BaseCompare, Compare } from './compare';
import * as EnterpriseAPI from './enterprise';
import { BaseEnterprise, Enterprise } from './enterprise';
import * as PlansAPI from './plans';
import { BasePlans, Plans } from './plans';

export class BasePricing extends APIResource {
  static override readonly _key: readonly ['pricing'] = Object.freeze(['pricing'] as const);
}
export class Pricing extends BasePricing {
  aiFeatures: AIFeaturesAPI.AIFeatures = new AIFeaturesAPI.AIFeatures(this._client);
  compare: CompareAPI.Compare = new CompareAPI.Compare(this._client);
  enterprise: EnterpriseAPI.Enterprise = new EnterpriseAPI.Enterprise(this._client);
  plans: PlansAPI.Plans = new PlansAPI.Plans(this._client);
}

Pricing.AIFeatures = AIFeatures;
Pricing.BaseAIFeatures = BaseAIFeatures;
Pricing.Compare = Compare;
Pricing.BaseCompare = BaseCompare;
Pricing.Enterprise = Enterprise;
Pricing.BaseEnterprise = BaseEnterprise;
Pricing.Plans = Plans;
Pricing.BasePlans = BasePlans;

export declare namespace Pricing {
  export { AIFeatures as AIFeatures, BaseAIFeatures as BaseAIFeatures };

  export { Compare as Compare, BaseCompare as BaseCompare };

  export { Enterprise as Enterprise, BaseEnterprise as BaseEnterprise };

  export { Plans as Plans, BasePlans as BasePlans };
}
