// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CloseAPI from './close';
import { Close, CloseCloseParams } from './close';
import * as NextAPI from './next';
import { Next, NextNextParams } from './next';

export class Cursor extends APIResource {
  close: CloseAPI.Close = new CloseAPI.Close(this._client);
  next: NextAPI.Next = new NextAPI.Next(this._client);
}

Cursor.Close = Close;
Cursor.Next = Next;

export declare namespace Cursor {
  export {
    Close as Close,
    type CloseCloseParams as CloseCloseParams
  };

  export {
    Next as Next,
    type NextNextParams as NextNextParams
  };
}
