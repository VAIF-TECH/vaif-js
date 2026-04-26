// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class Editor extends APIResource {
  chat(body: EditorChatParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/ai/copilot/editor/chat', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface EditorChatParams {
  message: string;

  projectId: string;

  files?: Array<EditorChatParams.File>;

  selectedFile?: string;

  selectedRange?: EditorChatParams.SelectedRange;

  sessionId?: string;
}

export namespace EditorChatParams {
  export interface File {
    content: string;

    path: string;
  }

  export interface SelectedRange {
    endLine: number;

    startLine: number;
  }
}

export declare namespace Editor {
  export { type EditorChatParams as EditorChatParams };
}
