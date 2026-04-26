// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AutoSetupAPI from './auto-setup';
import { AutoSetup } from './auto-setup';
import * as CompleteStepAPI from './complete-step';
import { CompleteStep } from './complete-step';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Org extends APIResource {
  autoSetup: AutoSetupAPI.AutoSetup = new AutoSetupAPI.AutoSetup(this._client);
  completeStep: CompleteStepAPI.CompleteStep = new CompleteStepAPI.CompleteStep(this._client);

  retrieve(orgID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/onboarding/org/${orgID}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}

Org.AutoSetup = AutoSetup;
Org.CompleteStep = CompleteStep;

export declare namespace Org {
  export {
    AutoSetup as AutoSetup
  };

  export {
    CompleteStep as CompleteStep
  };
}
