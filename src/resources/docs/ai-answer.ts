// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class BaseAIAnswer extends APIResource {
  static override readonly _key: readonly ['docs', 'aiAnswer'] = Object.freeze(['docs', 'aiAnswer'] as const)

  create(body: AIAnswerCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/docs/ai-answer', { body, ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}
export class AIAnswer extends BaseAIAnswer {

}

export interface AIAnswerCreateParams {
  context: string;

  question: string;

  conversationHistory?: Array<AIAnswerCreateParams.ConversationHistory>;
}

export namespace AIAnswerCreateParams {
  export interface ConversationHistory {
    content: string;

    role: 'user' | 'assistant';
  }
}

export declare namespace AIAnswer {
  export {
    type AIAnswerCreateParams as AIAnswerCreateParams
  };
}
