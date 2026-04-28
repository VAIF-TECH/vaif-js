// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AcceptAPI from './accept';
import { Accept, BaseAccept } from './accept';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseInvites extends APIResource {
  static override readonly _key: readonly ['orgs', 'invites'] = Object.freeze(['orgs', 'invites'] as const);

  delete(inviteID: string, params: InviteDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { orgId } = params;
    return this._client.delete(path`/orgs/${orgId}/invites/${inviteID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  getInvites(orgID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/orgs/${orgID}/invites`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
export class Invites extends BaseInvites {
  accept: AcceptAPI.Accept = new AcceptAPI.Accept(this._client);
}

export interface InviteDeleteParams {
  orgId: string;
}

Invites.Accept = Accept;
Invites.BaseAccept = BaseAccept;

export declare namespace Invites {
  export { type InviteDeleteParams as InviteDeleteParams };

  export { Accept as Accept, BaseAccept as BaseAccept };
}
