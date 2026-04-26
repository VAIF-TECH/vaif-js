// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as DownloadAPI from './download';
import { Download } from './download';
import * as DownloadURLAPI from './download-url';
import { DownloadURL, DownloadURLCreateParams, DownloadURLCreateResponse } from './download-url';
import * as UploadAPI from './upload';
import { Upload } from './upload';
import * as UploadBase64API from './upload-base64';
import { UploadBase64, UploadBase64CreateParams, UploadBase64CreateResponse } from './upload-base64';
import * as UploadFromURLAPI from './upload-from-url';
import { UploadFromURL } from './upload-from-url';
import * as UploadURLAPI from './upload-url';
import { UploadURL, UploadURLCreateParams, UploadURLCreateResponse } from './upload-url';
import * as BucketsAPI from './buckets/buckets';
import { BucketCreateParams, BucketCreateResponse, Buckets } from './buckets/buckets';
import * as FilesAPI from './files/files';
import { Files } from './files/files';
import * as MultipartAPI from './multipart/multipart';
import { Multipart } from './multipart/multipart';

export class Storage extends APIResource {
  buckets: BucketsAPI.Buckets = new BucketsAPI.Buckets(this._client);
  download: DownloadAPI.Download = new DownloadAPI.Download(this._client);
  downloadURL: DownloadURLAPI.DownloadURL = new DownloadURLAPI.DownloadURL(this._client);
  files: FilesAPI.Files = new FilesAPI.Files(this._client);
  multipart: MultipartAPI.Multipart = new MultipartAPI.Multipart(this._client);
  upload: UploadAPI.Upload = new UploadAPI.Upload(this._client);
  uploadBase64: UploadBase64API.UploadBase64 = new UploadBase64API.UploadBase64(this._client);
  uploadFromURL: UploadFromURLAPI.UploadFromURL = new UploadFromURLAPI.UploadFromURL(this._client);
  uploadURL: UploadURLAPI.UploadURL = new UploadURLAPI.UploadURL(this._client);
}

Storage.Buckets = Buckets;
Storage.Download = Download;
Storage.DownloadURL = DownloadURL;
Storage.Files = Files;
Storage.Multipart = Multipart;
Storage.Upload = Upload;
Storage.UploadBase64 = UploadBase64;
Storage.UploadFromURL = UploadFromURL;
Storage.UploadURL = UploadURL;

export declare namespace Storage {
  export {
    Buckets as Buckets,
    type BucketCreateResponse as BucketCreateResponse,
    type BucketCreateParams as BucketCreateParams
  };

  export {
    Download as Download
  };

  export {
    DownloadURL as DownloadURL,
    type DownloadURLCreateResponse as DownloadURLCreateResponse,
    type DownloadURLCreateParams as DownloadURLCreateParams
  };

  export {
    Files as Files
  };

  export {
    Multipart as Multipart
  };

  export {
    Upload as Upload
  };

  export {
    UploadBase64 as UploadBase64,
    type UploadBase64CreateResponse as UploadBase64CreateResponse,
    type UploadBase64CreateParams as UploadBase64CreateParams
  };

  export {
    UploadFromURL as UploadFromURL
  };

  export {
    UploadURL as UploadURL,
    type UploadURLCreateResponse as UploadURLCreateResponse,
    type UploadURLCreateParams as UploadURLCreateParams
  };
}
