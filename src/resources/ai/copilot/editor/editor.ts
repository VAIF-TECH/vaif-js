// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ChatAPI from './chat';
import { BaseChat, Chat, ChatCreateParams } from './chat';

export class BaseEditor extends APIResource {
  static override readonly _key: readonly ['ai', 'copilot', 'editor'] = Object.freeze(['ai', 'copilot', 'editor'] as const)

}
export class Editor extends BaseEditor {
  chat: ChatAPI.Chat = new ChatAPI.Chat(this._client);
}

Editor.Chat = Chat;
Editor.BaseChat = BaseChat;

export declare namespace Editor {
  export {
    Chat as Chat,
    BaseChat as BaseChat,
    type ChatCreateParams as ChatCreateParams
  };
}
