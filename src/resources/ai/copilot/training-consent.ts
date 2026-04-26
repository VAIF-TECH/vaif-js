// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class TrainingConsent extends APIResource {
  create(sessionID: string, body: TrainingConsentCreateParams, options?: RequestOptions): APIPromise<TrainingConsentCreateResponse> {
    return this._client.post(path`/ai/copilot/training-consent/${sessionID}`, { body, ...options });
  }
}

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
    type TrainingConsentCreateParams as TrainingConsentCreateParams
  };
}
