// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';

export class Chat extends APIResource {
  create(body: ChatCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/ai/copilot/editor/chat', { body, ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}

export interface ChatCreateParams {
  message: string;

  projectId: string;

  files?: Array<ChatCreateParams.File>;

  selectedFile?: string;

  selectedRange?: ChatCreateParams.SelectedRange;

  sessionId?: string;
}

export namespace ChatCreateParams {
  export interface File {
    content: string;

    path: string;
  }

  export interface SelectedRange {
    endLine: number;

    startLine: number;
  }
}

export declare namespace Chat {
  export {
    type ChatCreateParams as ChatCreateParams
  };
}
