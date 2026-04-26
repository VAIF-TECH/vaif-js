// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Sessions extends APIResource {
  delete(sessionID: string, params: SessionDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { projectId, userId } = params
    return this._client.delete(path`/projects/${projectId}/users/${userId}/sessions/${sessionID}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  getSessions(userID: string, params: SessionGetSessionsParams, options?: RequestOptions): APIPromise<void> {
    const { projectId } = params
    return this._client.get(path`/projects/${projectId}/users/${userID}/sessions`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  revokeAll(userID: string, params: SessionRevokeAllParams, options?: RequestOptions): APIPromise<void> {
    const { projectId } = params
    return this._client.post(path`/projects/${projectId}/users/${userID}/sessions/revoke-all`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}

export interface SessionDeleteParams {
  projectId: string;

  userId: string;
}

export interface SessionGetSessionsParams {
  projectId: string;
}

export interface SessionRevokeAllParams {
  projectId: string;
}

export declare namespace Sessions {
  export {
    type SessionDeleteParams as SessionDeleteParams,
    type SessionGetSessionsParams as SessionGetSessionsParams,
    type SessionRevokeAllParams as SessionRevokeAllParams
  };
}
