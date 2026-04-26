// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Feedback extends APIResource {
  create(body: FeedbackCreateParams, options?: RequestOptions): APIPromise<FeedbackCreateResponse> {
    return this._client.post('/ai/copilot/feedback', { body, ...options });
  }
}

export interface FeedbackCreateResponse {
  ok: true;
}

export interface FeedbackCreateParams {
  feedbackType: 'correct' | 'incorrect' | 'partial';

  messageId: string;

  sessionId: string;

  correctedIntent?: string;

  userFeedback?: string;
}

export declare namespace Feedback {
  export {
    type FeedbackCreateResponse as FeedbackCreateResponse,
    type FeedbackCreateParams as FeedbackCreateParams
  };
}
