// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseTrainingConsent extends APIResource {
  static override readonly _key: readonly ['ai', 'copilot', 'trainingConsent'] = Object.freeze([
    'ai',
    'copilot',
    'trainingConsent',
  ] as const);

  create(
    sessionID: string,
    body: TrainingConsentCreateParams,
    options?: RequestOptions,
  ): APIPromise<TrainingConsentCreateResponse> {
    return this._client.post(path`/ai/copilot/training-consent/${sessionID}`, { body, ...options });
  }
}
export class TrainingConsent extends BaseTrainingConsent {}

export interface TrainingConsentCreateResponse {
  consent: boolean;

  ok: true;
}

export interface TrainingConsentCreateParams {
  consent: boolean;
}

export declare namespace TrainingConsent {
  export {
    type TrainingConsentCreateResponse as TrainingConsentCreateResponse,
    type TrainingConsentCreateParams as TrainingConsentCreateParams,
  };
}
