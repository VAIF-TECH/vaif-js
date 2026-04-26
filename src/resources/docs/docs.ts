// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AIAnswerAPI from './ai-answer';
import { AIAnswer, AIAnswerCreateParams, BaseAIAnswer } from './ai-answer';
import * as AISearchAPI from './ai-search';
import { AISearch, BaseAISearch } from './ai-search';
import * as APIEndpointsAPI from './api-endpoints';
import { APIEndpoints, BaseAPIEndpoints } from './api-endpoints';
import * as CategoriesAPI from './categories';
import { BaseCategories, Categories } from './categories';
import * as ChangelogAPI from './changelog';
import { BaseChangelog, Changelog } from './changelog';
import * as ExamplesAPI from './examples';
import { BaseExamples, Examples } from './examples';
import * as FeedbackAPI from './feedback';
import { BaseFeedback, Feedback } from './feedback';
import * as SearchAPI from './search';
import { BaseSearch, Search } from './search';
import * as SearchClickAPI from './search-click';
import { BaseSearchClick, SearchClick } from './search-click';
import * as ProjectAPI from './project/project';
import { BaseProject, Project } from './project/project';
import * as SDKsAPI from './sdks/sdks';
import { BaseSDKs, SDKs } from './sdks/sdks';
import * as V2API from './v2/v2';
import { BaseV2, V2 } from './v2/v2';

export class BaseDocs extends APIResource {
  static override readonly _key: readonly ['docs'] = Object.freeze(['docs'] as const)

}
export class Docs extends BaseDocs {
  aiAnswer: AIAnswerAPI.AIAnswer = new AIAnswerAPI.AIAnswer(this._client);
  aiSearch: AISearchAPI.AISearch = new AISearchAPI.AISearch(this._client);
  apiEndpoints: APIEndpointsAPI.APIEndpoints = new APIEndpointsAPI.APIEndpoints(this._client);
  categories: CategoriesAPI.Categories = new CategoriesAPI.Categories(this._client);
  changelog: ChangelogAPI.Changelog = new ChangelogAPI.Changelog(this._client);
  examples: ExamplesAPI.Examples = new ExamplesAPI.Examples(this._client);
  feedback: FeedbackAPI.Feedback = new FeedbackAPI.Feedback(this._client);
  project: ProjectAPI.Project = new ProjectAPI.Project(this._client);
  sdks: SDKsAPI.SDKs = new SDKsAPI.SDKs(this._client);
  search: SearchAPI.Search = new SearchAPI.Search(this._client);
  searchClick: SearchClickAPI.SearchClick = new SearchClickAPI.SearchClick(this._client);
  v2: V2API.V2 = new V2API.V2(this._client);
}

Docs.AIAnswer = AIAnswer;
Docs.BaseAIAnswer = BaseAIAnswer;
Docs.AISearch = AISearch;
Docs.BaseAISearch = BaseAISearch;
Docs.APIEndpoints = APIEndpoints;
Docs.BaseAPIEndpoints = BaseAPIEndpoints;
Docs.Categories = Categories;
Docs.BaseCategories = BaseCategories;
Docs.Changelog = Changelog;
Docs.BaseChangelog = BaseChangelog;
Docs.Examples = Examples;
Docs.BaseExamples = BaseExamples;
Docs.Feedback = Feedback;
Docs.BaseFeedback = BaseFeedback;
Docs.Project = Project;
Docs.BaseProject = BaseProject;
Docs.SDKs = SDKs;
Docs.BaseSDKs = BaseSDKs;
Docs.Search = Search;
Docs.BaseSearch = BaseSearch;
Docs.SearchClick = SearchClick;
Docs.BaseSearchClick = BaseSearchClick;
Docs.V2 = V2;
Docs.BaseV2 = BaseV2;

export declare namespace Docs {
  export {
    AIAnswer as AIAnswer,
    BaseAIAnswer as BaseAIAnswer,
    type AIAnswerCreateParams as AIAnswerCreateParams
  };

  export {
    AISearch as AISearch,
    BaseAISearch as BaseAISearch
  };

  export {
    APIEndpoints as APIEndpoints,
    BaseAPIEndpoints as BaseAPIEndpoints
  };

  export {
    Categories as Categories,
    BaseCategories as BaseCategories
  };

  export {
    Changelog as Changelog,
    BaseChangelog as BaseChangelog
  };

  export {
    Examples as Examples,
    BaseExamples as BaseExamples
  };

  export {
    Feedback as Feedback,
    BaseFeedback as BaseFeedback
  };

  export {
    Project as Project,
    BaseProject as BaseProject
  };

  export {
    SDKs as SDKs,
    BaseSDKs as BaseSDKs
  };

  export {
    Search as Search,
    BaseSearch as BaseSearch
  };

  export {
    SearchClick as SearchClick,
    BaseSearchClick as BaseSearchClick
  };

  export {
    V2 as V2,
    BaseV2 as BaseV2
  };
}
