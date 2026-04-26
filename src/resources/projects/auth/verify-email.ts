// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class VerifyEmail extends APIResource {
  confirm(
    projectID: string,
    body: VerifyEmailConfirmParams,
    options?: RequestOptions,
  ): APIPromise<VerifyEmailConfirmResponse> {
    return this._client.post(path`/projects/${projectID}/auth/verify-email/confirm`, { body, ...options });
  }

  send(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/projects/${projectID}/auth/verify-email/send`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface VerifyEmailConfirmResponse {
  message: string;

  ok: true;
}

export interface VerifyEmailConfirmParams {
  token?: string;
}

export declare namespace VerifyEmail {
  export {
    type VerifyEmailConfirmResponse as VerifyEmailConfirmResponse,
    type VerifyEmailConfirmParams as VerifyEmailConfirmParams,
  };
}
