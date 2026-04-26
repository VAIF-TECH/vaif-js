// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Vaif } from '../client';

export abstract class APIResource {
  protected _client: Vaif;

  constructor(client: Vaif) {
    this._client = client;
  }
}
