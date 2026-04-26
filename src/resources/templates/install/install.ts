// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ApplyAPI from './apply';
import { Apply } from './apply';
import * as PreviewAPI from './preview';
import { Preview } from './preview';
import * as RollbackAPI from './rollback';
import { Rollback } from './rollback';

export class Install extends APIResource {
  apply: ApplyAPI.Apply = new ApplyAPI.Apply(this._client);
  preview: PreviewAPI.Preview = new PreviewAPI.Preview(this._client);
  rollback: RollbackAPI.Rollback = new RollbackAPI.Rollback(this._client);
}

Install.Apply = Apply;
Install.Preview = Preview;
Install.Rollback = Rollback;

export declare namespace Install {
  export {
    Apply as Apply
  };

  export {
    Preview as Preview
  };

  export {
    Rollback as Rollback
  };
}
