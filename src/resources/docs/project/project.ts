// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as QuickstartAPI from './quickstart';
import { Quickstart } from './quickstart';

export class Project extends APIResource {
  quickstart: QuickstartAPI.Quickstart = new QuickstartAPI.Quickstart(this._client);
}

Project.Quickstart = Quickstart;

export declare namespace Project {
  export {
    Quickstart as Quickstart
  };
}
