// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseSessions extends APIResource {
  static override readonly _key: readonly ['ai', 'copilot', 'sessions'] = Object.freeze(['ai', 'copilot', 'sessions'] as const)

  retrieve(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/ai/copilot/sessions/${projectID}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  update(sessionID: string, body: SessionUpdateParams, options?: RequestOptions): APIPromise<SessionUpdateResponse> {
    return this._client.patch(path`/ai/copilot/session/${sessionID}`, { body, ...options });
  }

  delete(sessionID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/ai/copilot/session/${sessionID}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  retrieve2(sessionID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/ai/copilot/session/${sessionID}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}
export class Sessions extends BaseSessions {

}

export interface SessionUpdateResponse {
  ok: true;
}

export interface SessionUpdateParams {
  title?: string;
}

export declare namespace Sessions {
  export {
    type SessionUpdateResponse as SessionUpdateResponse,
    type SessionUpdateParams as SessionUpdateParams
  };
}
