// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ChatAPI from './chat';
import { Chat, ChatCreateParams } from './chat';

export class Editor extends APIResource {
  chat: ChatAPI.Chat = new ChatAPI.Chat(this._client);
}

Editor.Chat = Chat;

export declare namespace Editor {
  export {
    Chat as Chat,
    type ChatCreateParams as ChatCreateParams
  };
}
