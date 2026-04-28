// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as InquireAPI from './inquire';
import { BaseInquire, Inquire, InquireCreateParams, InquireCreateResponse } from './inquire';
import * as SubdomainAPI from './subdomain';
import { BaseSubdomain, Subdomain } from './subdomain';
import * as OrgAPI from './org/org';
import { BaseOrg, Org } from './org/org';
import * as QuotesAPI from './quotes/quotes';
import { BaseQuotes, Quotes } from './quotes/quotes';

export class BaseEnterprise extends APIResource {
  static override readonly _key: readonly ['enterprise'] = Object.freeze(['enterprise'] as const);
}
export class Enterprise extends BaseEnterprise {
  inquire: InquireAPI.Inquire = new InquireAPI.Inquire(this._client);
  org: OrgAPI.Org = new OrgAPI.Org(this._client);
  quotes: QuotesAPI.Quotes = new QuotesAPI.Quotes(this._client);
  subdomain: SubdomainAPI.Subdomain = new SubdomainAPI.Subdomain(this._client);
}

Enterprise.Inquire = Inquire;
Enterprise.BaseInquire = BaseInquire;
Enterprise.Org = Org;
Enterprise.BaseOrg = BaseOrg;
Enterprise.Quotes = Quotes;
Enterprise.BaseQuotes = BaseQuotes;
Enterprise.Subdomain = Subdomain;
Enterprise.BaseSubdomain = BaseSubdomain;

export declare namespace Enterprise {
  export {
    Inquire as Inquire,
    BaseInquire as BaseInquire,
    type InquireCreateResponse as InquireCreateResponse,
    type InquireCreateParams as InquireCreateParams,
  };

  export { Org as Org, BaseOrg as BaseOrg };

  export { Quotes as Quotes, BaseQuotes as BaseQuotes };

  export { Subdomain as Subdomain, BaseSubdomain as BaseSubdomain };
}
