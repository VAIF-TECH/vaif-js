// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ApplyAPI from './apply';
import { Apply, BaseApply } from './apply';
import * as PreviewAPI from './preview';
import { BasePreview, Preview } from './preview';
import * as RollbackAPI from './rollback';
import { BaseRollback, Rollback } from './rollback';

export class BaseInstall extends APIResource {
  static override readonly _key: readonly ['templates', 'install'] = Object.freeze([
    'templates',
    'install',
  ] as const);
}
export class Install extends BaseInstall {
  apply: ApplyAPI.Apply = new ApplyAPI.Apply(this._client);
  preview: PreviewAPI.Preview = new PreviewAPI.Preview(this._client);
  rollback: RollbackAPI.Rollback = new RollbackAPI.Rollback(this._client);
}

Install.Apply = Apply;
Install.BaseApply = BaseApply;
Install.Preview = Preview;
Install.BasePreview = BasePreview;
Install.Rollback = Rollback;
Install.BaseRollback = BaseRollback;

export declare namespace Install {
  export { Apply as Apply, BaseApply as BaseApply };

  export { Preview as Preview, BasePreview as BasePreview };

  export { Rollback as Rollback, BaseRollback as BaseRollback };
}
