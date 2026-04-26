// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BillingContactsAPI from './billing-contacts';
import {
  BillingContactCreateParams,
  BillingContactCreateResponse,
  BillingContactDeleteParams,
  BillingContactDeleteResponse,
  BillingContactListResponse,
  BillingContacts,
} from './billing-contacts';
import * as InvitesAPI from './invites';
import { InviteDeleteParams, Invites } from './invites';
import * as MembersAPI from './members';
import { Members } from './members';
import * as ProfileAPI from './profile';
import { Profile } from './profile';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Orgs extends APIResource {
  members: MembersAPI.Members = new MembersAPI.Members(this._client);
  invites: InvitesAPI.Invites = new InvitesAPI.Invites(this._client);
  profile: ProfileAPI.Profile = new ProfileAPI.Profile(this._client);
  billingContacts: BillingContactsAPI.BillingContacts = new BillingContactsAPI.BillingContacts(this._client);

  create(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/orgs/', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/orgs/', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  checkName(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/orgs/check-name', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  retrieveMembership(orgID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/orgs/${orgID}/membership`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

Orgs.Members = Members;
Orgs.Invites = Invites;
Orgs.Profile = Profile;
Orgs.BillingContacts = BillingContacts;

export declare namespace Orgs {
  export { Members as Members };

  export { Invites as Invites, type InviteDeleteParams as InviteDeleteParams };

  export { Profile as Profile };

  export {
    BillingContacts as BillingContacts,
    type BillingContactCreateResponse as BillingContactCreateResponse,
    type BillingContactListResponse as BillingContactListResponse,
    type BillingContactDeleteResponse as BillingContactDeleteResponse,
    type BillingContactCreateParams as BillingContactCreateParams,
    type BillingContactDeleteParams as BillingContactDeleteParams,
  };
}
