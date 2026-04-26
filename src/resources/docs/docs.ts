// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as APIEndpointsAPI from './api-endpoints';
import { APIEndpoints } from './api-endpoints';
import * as ChangelogAPI from './changelog';
import { Changelog } from './changelog';
import * as ExamplesAPI from './examples';
import { Examples } from './examples';
import * as ProjectAPI from './project';
import { Project } from './project';
import * as SDKsAPI from './sdks';
import { SDKs } from './sdks';
import * as V2API from './v2/v2';
import { V2 } from './v2/v2';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Docs extends APIResource {
  project: ProjectAPI.Project = new ProjectAPI.Project(this._client);
  v2: V2API.V2 = new V2API.V2(this._client);
  sdks: SDKsAPI.SDKs = new SDKsAPI.SDKs(this._client);
  apiEndpoints: APIEndpointsAPI.APIEndpoints = new APIEndpointsAPI.APIEndpoints(this._client);
  examples: ExamplesAPI.Examples = new ExamplesAPI.Examples(this._client);
  changelog: ChangelogAPI.Changelog = new ChangelogAPI.Changelog(this._client);

  aiSearch(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/docs/ai-search', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  listCategories(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/docs/categories', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  recordSearchClick(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/docs/search-click', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  search(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/docs/search', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  submitAIAnswer(body: DocSubmitAIAnswerParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/docs/ai-answer', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  submitFeedback(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/docs/feedback', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface DocSubmitAIAnswerParams {
  context: string;

  question: string;

  conversationHistory?: Array<DocSubmitAIAnswerParams.ConversationHistory>;
}

export namespace DocSubmitAIAnswerParams {
  export interface ConversationHistory {
    content: string;

    role: 'user' | 'assistant';
  }
}

Docs.Project = Project;
Docs.V2 = V2;
Docs.SDKs = SDKs;
Docs.APIEndpoints = APIEndpoints;
Docs.Examples = Examples;
Docs.Changelog = Changelog;

export declare namespace Docs {
  export { type DocSubmitAIAnswerParams as DocSubmitAIAnswerParams };

  export { Project as Project };

  export { V2 as V2 };

  export { SDKs as SDKs };

  export { APIEndpoints as APIEndpoints };

  export { Examples as Examples };

  export { Changelog as Changelog };
}
