// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as PagesAPI from './pages';
import { BasePages, Pages } from './pages';

export class BaseV2 extends APIResource {
  static override readonly _key: readonly ['docs', 'v2'] = Object.freeze(['docs', 'v2'] as const);
}
export class V2 extends BaseV2 {
  pages: PagesAPI.Pages = new PagesAPI.Pages(this._client);
}

V2.Pages = Pages;
V2.BasePages = BasePages;

export declare namespace V2 {
  export { Pages as Pages, BasePages as BasePages };
}
