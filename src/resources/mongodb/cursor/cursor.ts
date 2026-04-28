// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CloseAPI from './close';
import { BaseClose, Close, CloseCloseParams } from './close';
import * as NextAPI from './next';
import { BaseNext, Next, NextNextParams } from './next';

export class BaseCursor extends APIResource {
  static override readonly _key: readonly ['mongoDB', 'cursor'] = Object.freeze([
    'mongoDB',
    'cursor',
  ] as const);
}
export class Cursor extends BaseCursor {
  close: CloseAPI.Close = new CloseAPI.Close(this._client);
  next: NextAPI.Next = new NextAPI.Next(this._client);
}

Cursor.Close = Close;
Cursor.BaseClose = BaseClose;
Cursor.Next = Next;
Cursor.BaseNext = BaseNext;

export declare namespace Cursor {
  export { Close as Close, BaseClose as BaseClose, type CloseCloseParams as CloseCloseParams };

  export { Next as Next, BaseNext as BaseNext, type NextNextParams as NextNextParams };
}
