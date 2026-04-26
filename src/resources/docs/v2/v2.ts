// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as PagesAPI from './pages';
import { Pages } from './pages';

export class V2 extends APIResource {
  pages: PagesAPI.Pages = new PagesAPI.Pages(this._client);
}

V2.Pages = Pages;

export declare namespace V2 {
  export { Pages as Pages };
}
