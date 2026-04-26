// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Invites extends APIResource {
  list(orgID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/orgs/${orgID}/invites`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  delete(inviteID: string, params: InviteDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { orgId } = params;
    return this._client.delete(path`/orgs/${orgId}/invites/${inviteID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  accept(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/orgs/invites/accept', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface InviteDeleteParams {
  orgId: string;
}

export declare namespace Invites {
  export { type InviteDeleteParams as InviteDeleteParams };
}
