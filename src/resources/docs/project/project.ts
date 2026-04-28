// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as QuickstartAPI from './quickstart';
import { BaseQuickstart, Quickstart } from './quickstart';

export class BaseProject extends APIResource {
  static override readonly _key: readonly ['docs', 'project'] = Object.freeze(['docs', 'project'] as const);
}
export class Project extends BaseProject {
  quickstart: QuickstartAPI.Quickstart = new QuickstartAPI.Quickstart(this._client);
}

Project.Quickstart = Quickstart;
Project.BaseQuickstart = BaseQuickstart;

export declare namespace Project {
  export { Quickstart as Quickstart, BaseQuickstart as BaseQuickstart };
}
