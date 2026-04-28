// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class BaseInquire extends APIResource {
  static override readonly _key: readonly ['enterprise', 'inquire'] = Object.freeze([
    'enterprise',
    'inquire',
  ] as const);

  create(body: InquireCreateParams, options?: RequestOptions): APIPromise<InquireCreateResponse> {
    return this._client.post('/enterprise/inquire', { body, ...options });
  }
}
export class Inquire extends BaseInquire {}

export interface InquireCreateResponse {
  inquiryId: string;

  message: string;

  ok: true;

  [k: string]: unknown;
}

export interface InquireCreateParams {
  companyName: string;

  contactEmail: string;

  contactName: string;

  companySize?: '1-10' | '11-50' | '51-200' | '201-500' | '500+';

  contactPhone?: string;

  currentPlan?: 'free' | 'starter' | 'pro' | 'agency' | 'studio_plus';

  estimatedProjects?: number;

  requirements?: InquireCreateParams.Requirements;

  source?: string;

  useCase?: string;
}

export namespace InquireCreateParams {
  export interface Requirements {
    bedrockRouting?: boolean;

    customRetention?: boolean;

    customSla?: boolean;

    dedicatedDb?: boolean;

    dedicatedSupport?: boolean;

    hipaaCompliance?: boolean;

    saml?: boolean;

    soc2Compliance?: boolean;

    sso?: boolean;

    vertexRouting?: boolean;
  }
}

export declare namespace Inquire {
  export {
    type InquireCreateResponse as InquireCreateResponse,
    type InquireCreateParams as InquireCreateParams,
  };
}
