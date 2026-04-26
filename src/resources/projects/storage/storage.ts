// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as SettingsAPI from './settings';
import { SettingUpdateParams, SettingUpdateResponse, Settings } from './settings';

export class Storage extends APIResource {
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);
}

Storage.Settings = Settings;

export declare namespace Storage {
  export {
    Settings as Settings,
    type SettingUpdateResponse as SettingUpdateResponse,
    type SettingUpdateParams as SettingUpdateParams,
  };
}
