// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BillingContactsAPI from './billing-contacts';
import {
  BaseBillingContacts,
  BillingContactBillingContactsParams,
  BillingContactBillingContactsResponse,
  BillingContactDeleteParams,
  BillingContactDeleteResponse,
  BillingContactGetBillingContactsResponse,
  BillingContacts,
} from './billing-contacts';
import * as CheckNameAPI from './check-name';
import { BaseCheckName, CheckName } from './check-name';
import * as MembersAPI from './members';
import { BaseMembers, Members } from './members';
import * as MembershipAPI from './membership';
import { BaseMembership, Membership } from './membership';
import * as ProfileAPI from './profile';
import { BaseProfile, Profile } from './profile';
import * as InvitesAPI from './invites/invites';
import { BaseInvites, InviteDeleteParams, Invites } from './invites/invites';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class BaseOrgs extends APIResource {
  static override readonly _key: readonly ['orgs'] = Object.freeze(['orgs'] as const);

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
}
export class Orgs extends BaseOrgs {
  billingContacts: BillingContactsAPI.BillingContacts = new BillingContactsAPI.BillingContacts(this._client);
  checkName: CheckNameAPI.CheckName = new CheckNameAPI.CheckName(this._client);
  invites: InvitesAPI.Invites = new InvitesAPI.Invites(this._client);
  members: MembersAPI.Members = new MembersAPI.Members(this._client);
  membership: MembershipAPI.Membership = new MembershipAPI.Membership(this._client);
  profile: ProfileAPI.Profile = new ProfileAPI.Profile(this._client);
}

Orgs.BillingContacts = BillingContacts;
Orgs.BaseBillingContacts = BaseBillingContacts;
Orgs.CheckName = CheckName;
Orgs.BaseCheckName = BaseCheckName;
Orgs.Invites = Invites;
Orgs.BaseInvites = BaseInvites;
Orgs.Members = Members;
Orgs.BaseMembers = BaseMembers;
Orgs.Membership = Membership;
Orgs.BaseMembership = BaseMembership;
Orgs.Profile = Profile;
Orgs.BaseProfile = BaseProfile;

export declare namespace Orgs {
  export {
    BillingContacts as BillingContacts,
    BaseBillingContacts as BaseBillingContacts,
    type BillingContactDeleteResponse as BillingContactDeleteResponse,
    type BillingContactBillingContactsResponse as BillingContactBillingContactsResponse,
    type BillingContactGetBillingContactsResponse as BillingContactGetBillingContactsResponse,
    type BillingContactDeleteParams as BillingContactDeleteParams,
    type BillingContactBillingContactsParams as BillingContactBillingContactsParams,
  };

  export { CheckName as CheckName, BaseCheckName as BaseCheckName };

  export { Invites as Invites, BaseInvites as BaseInvites, type InviteDeleteParams as InviteDeleteParams };

  export { Members as Members, BaseMembers as BaseMembers };

  export { Membership as Membership, BaseMembership as BaseMembership };

  export { Profile as Profile, BaseProfile as BaseProfile };
}
