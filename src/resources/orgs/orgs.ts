// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BillingContactsAPI from './billing-contacts';
import { BillingContactBillingContactsParams, BillingContactBillingContactsResponse, BillingContactDeleteParams, BillingContactDeleteResponse, BillingContactGetBillingContactsResponse, BillingContacts } from './billing-contacts';
import * as CheckNameAPI from './check-name';
import { CheckName } from './check-name';
import * as MembersAPI from './members';
import { Members } from './members';
import * as MembershipAPI from './membership';
import { Membership } from './membership';
import * as ProfileAPI from './profile';
import { Profile } from './profile';
import * as InvitesAPI from './invites/invites';
import { InviteDeleteParams, Invites } from './invites/invites';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Orgs extends APIResource {
  billingContacts: BillingContactsAPI.BillingContacts = new BillingContactsAPI.BillingContacts(this._client);
  checkName: CheckNameAPI.CheckName = new CheckNameAPI.CheckName(this._client);
  invites: InvitesAPI.Invites = new InvitesAPI.Invites(this._client);
  members: MembersAPI.Members = new MembersAPI.Members(this._client);
  membership: MembershipAPI.Membership = new MembershipAPI.Membership(this._client);
  profile: ProfileAPI.Profile = new ProfileAPI.Profile(this._client);

  create(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/orgs/', { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/orgs/', { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}

Orgs.BillingContacts = BillingContacts;
Orgs.CheckName = CheckName;
Orgs.Invites = Invites;
Orgs.Members = Members;
Orgs.Membership = Membership;
Orgs.Profile = Profile;

export declare namespace Orgs {
  export {
    BillingContacts as BillingContacts,
    type BillingContactDeleteResponse as BillingContactDeleteResponse,
    type BillingContactBillingContactsResponse as BillingContactBillingContactsResponse,
    type BillingContactGetBillingContactsResponse as BillingContactGetBillingContactsResponse,
    type BillingContactDeleteParams as BillingContactDeleteParams,
    type BillingContactBillingContactsParams as BillingContactBillingContactsParams
  };

  export {
    CheckName as CheckName
  };

  export {
    Invites as Invites,
    type InviteDeleteParams as InviteDeleteParams
  };

  export {
    Members as Members
  };

  export {
    Membership as Membership
  };

  export {
    Profile as Profile
  };
}
