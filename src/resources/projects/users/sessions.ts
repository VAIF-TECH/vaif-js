// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Sessions extends APIResource {
  list(userID: string, params: SessionListParams, options?: RequestOptions): APIPromise<void> {
    const { projectId } = params;
    return this._client.get(path`/projects/${projectId}/users/${userID}/sessions`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  delete(sessionID: string, params: SessionDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { projectId, userId } = params;
    return this._client.delete(path`/projects/${projectId}/users/${userId}/sessions/${sessionID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  revokeAll(userID: string, params: SessionRevokeAllParams, options?: RequestOptions): APIPromise<void> {
    const { projectId } = params;
    return this._client.post(path`/projects/${projectId}/users/${userID}/sessions/revoke-all`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface SessionListParams {
  projectId: string;
}

export interface SessionDeleteParams {
  projectId: string;

  userId: string;
}

export interface SessionRevokeAllParams {
  projectId: string;
}

export declare namespace Sessions {
  export {
    type SessionListParams as SessionListParams,
    type SessionDeleteParams as SessionDeleteParams,
    type SessionRevokeAllParams as SessionRevokeAllParams,
  };
}
