// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { VaifStudio } from '../client';

export abstract class APIResource {
  protected _client: VaifStudio;

  constructor(client: VaifStudio) {
    this._client = client;
  }
}
