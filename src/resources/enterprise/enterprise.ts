// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as QuotesAPI from './quotes';
import { Quotes } from './quotes';
import * as OrgAPI from './org/org';
import { Org } from './org/org';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Enterprise extends APIResource {
  quotes: QuotesAPI.Quotes = new QuotesAPI.Quotes(this._client);
  org: OrgAPI.Org = new OrgAPI.Org(this._client);

  inquire(body: EnterpriseInquireParams, options?: RequestOptions): APIPromise<EnterpriseInquireResponse> {
    return this._client.post('/enterprise/inquire', { body, ...options });
  }

  retrieveSubdomain(subdomain: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/enterprise/subdomain/${subdomain}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface EnterpriseInquireResponse {
  inquiryId: string;

  message: string;

  ok: true;

  [k: string]: unknown;
}

export interface EnterpriseInquireParams {
  companyName: string;

  contactEmail: string;

  contactName: string;

  companySize?: '1-10' | '11-50' | '51-200' | '201-500' | '500+';

  contactPhone?: string;

  currentPlan?: 'free' | 'starter' | 'pro' | 'agency' | 'studio_plus';

  estimatedProjects?: number;

  requirements?: EnterpriseInquireParams.Requirements;

  source?: string;

  useCase?: string;
}

export namespace EnterpriseInquireParams {
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

Enterprise.Quotes = Quotes;
Enterprise.Org = Org;

export declare namespace Enterprise {
  export {
    type EnterpriseInquireResponse as EnterpriseInquireResponse,
    type EnterpriseInquireParams as EnterpriseInquireParams,
  };

  export { Quotes as Quotes };

  export { Org as Org };
}
