// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AIAnswerAPI from './ai-answer';
import { AIAnswer, AIAnswerCreateParams } from './ai-answer';
import * as AISearchAPI from './ai-search';
import { AISearch } from './ai-search';
import * as APIEndpointsAPI from './api-endpoints';
import { APIEndpoints } from './api-endpoints';
import * as CategoriesAPI from './categories';
import { Categories } from './categories';
import * as ChangelogAPI from './changelog';
import { Changelog } from './changelog';
import * as ExamplesAPI from './examples';
import { Examples } from './examples';
import * as FeedbackAPI from './feedback';
import { Feedback } from './feedback';
import * as SearchAPI from './search';
import { Search } from './search';
import * as SearchClickAPI from './search-click';
import { SearchClick } from './search-click';
import * as ProjectAPI from './project/project';
import { Project } from './project/project';
import * as SDKsAPI from './sdks/sdks';
import { SDKs } from './sdks/sdks';
import * as V2API from './v2/v2';
import { V2 } from './v2/v2';

export class Docs extends APIResource {
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
Docs.AISearch = AISearch;
Docs.APIEndpoints = APIEndpoints;
Docs.Categories = Categories;
Docs.Changelog = Changelog;
Docs.Examples = Examples;
Docs.Feedback = Feedback;
Docs.Project = Project;
Docs.SDKs = SDKs;
Docs.Search = Search;
Docs.SearchClick = SearchClick;
Docs.V2 = V2;

export declare namespace Docs {
  export {
    AIAnswer as AIAnswer,
    type AIAnswerCreateParams as AIAnswerCreateParams
  };

  export {
    AISearch as AISearch
  };

  export {
    APIEndpoints as APIEndpoints
  };

  export {
    Categories as Categories
  };

  export {
    Changelog as Changelog
  };

  export {
    Examples as Examples
  };

  export {
    Feedback as Feedback
  };

  export {
    Project as Project
  };

  export {
    SDKs as SDKs
  };

  export {
    Search as Search
  };

  export {
    SearchClick as SearchClick
  };

  export {
    V2 as V2
  };
}
