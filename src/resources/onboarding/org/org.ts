// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AutoSetupAPI from './auto-setup';
import { AutoSetup, BaseAutoSetup } from './auto-setup';
import * as CompleteStepAPI from './complete-step';
import { BaseCompleteStep, CompleteStep } from './complete-step';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseOrg extends APIResource {
  static override readonly _key: readonly ['onboarding', 'org'] = Object.freeze([
    'onboarding',
    'org',
  ] as const);

  retrieve(orgID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/onboarding/org/${orgID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
export class Org extends BaseOrg {
  autoSetup: AutoSetupAPI.AutoSetup = new AutoSetupAPI.AutoSetup(this._client);
  completeStep: CompleteStepAPI.CompleteStep = new CompleteStepAPI.CompleteStep(this._client);
}

Org.AutoSetup = AutoSetup;
Org.BaseAutoSetup = BaseAutoSetup;
Org.CompleteStep = CompleteStep;
Org.BaseCompleteStep = BaseCompleteStep;

export declare namespace Org {
  export { AutoSetup as AutoSetup, BaseAutoSetup as BaseAutoSetup };

  export { CompleteStep as CompleteStep, BaseCompleteStep as BaseCompleteStep };
}
