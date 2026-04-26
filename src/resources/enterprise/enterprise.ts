// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as InquireAPI from './inquire';
import { Inquire, InquireCreateParams, InquireCreateResponse } from './inquire';
import * as SubdomainAPI from './subdomain';
import { Subdomain } from './subdomain';
import * as OrgAPI from './org/org';
import { Org } from './org/org';
import * as QuotesAPI from './quotes/quotes';
import { Quotes } from './quotes/quotes';

export class Enterprise extends APIResource {
  inquire: InquireAPI.Inquire = new InquireAPI.Inquire(this._client);
  org: OrgAPI.Org = new OrgAPI.Org(this._client);
  quotes: QuotesAPI.Quotes = new QuotesAPI.Quotes(this._client);
  subdomain: SubdomainAPI.Subdomain = new SubdomainAPI.Subdomain(this._client);
}

Enterprise.Inquire = Inquire;
Enterprise.Org = Org;
Enterprise.Quotes = Quotes;
Enterprise.Subdomain = Subdomain;

export declare namespace Enterprise {
  export {
    Inquire as Inquire,
    type InquireCreateResponse as InquireCreateResponse,
    type InquireCreateParams as InquireCreateParams
  };

  export {
    Org as Org
  };

  export {
    Quotes as Quotes
  };

  export {
    Subdomain as Subdomain
  };
}
