// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as DownloadAPI from './download';
import { BaseDownload, Download } from './download';
import * as DownloadURLAPI from './download-url';
import {
  BaseDownloadURL,
  DownloadURL,
  DownloadURLCreateParams,
  DownloadURLCreateResponse,
} from './download-url';
import * as UploadAPI from './upload';
import { BaseUpload, Upload } from './upload';
import * as UploadBase64API from './upload-base64';
import {
  BaseUploadBase64,
  UploadBase64,
  UploadBase64CreateParams,
  UploadBase64CreateResponse,
} from './upload-base64';
import * as UploadFromURLAPI from './upload-from-url';
import { BaseUploadFromURL, UploadFromURL } from './upload-from-url';
import * as UploadURLAPI from './upload-url';
import { BaseUploadURL, UploadURL, UploadURLCreateParams, UploadURLCreateResponse } from './upload-url';
import * as BucketsAPI from './buckets/buckets';
import { BaseBuckets, BucketCreateParams, BucketCreateResponse, Buckets } from './buckets/buckets';
import * as FilesAPI from './files/files';
import { BaseFiles, Files } from './files/files';
import * as MultipartAPI from './multipart/multipart';
import { BaseMultipart, Multipart } from './multipart/multipart';

export class BaseStorage extends APIResource {
  static override readonly _key: readonly ['storage'] = Object.freeze(['storage'] as const);
}
export class Storage extends BaseStorage {
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
Storage.BaseBuckets = BaseBuckets;
Storage.Download = Download;
Storage.BaseDownload = BaseDownload;
Storage.DownloadURL = DownloadURL;
Storage.BaseDownloadURL = BaseDownloadURL;
Storage.Files = Files;
Storage.BaseFiles = BaseFiles;
Storage.Multipart = Multipart;
Storage.BaseMultipart = BaseMultipart;
Storage.Upload = Upload;
Storage.BaseUpload = BaseUpload;
Storage.UploadBase64 = UploadBase64;
Storage.BaseUploadBase64 = BaseUploadBase64;
Storage.UploadFromURL = UploadFromURL;
Storage.BaseUploadFromURL = BaseUploadFromURL;
Storage.UploadURL = UploadURL;
Storage.BaseUploadURL = BaseUploadURL;

export declare namespace Storage {
  export {
    Buckets as Buckets,
    BaseBuckets as BaseBuckets,
    type BucketCreateResponse as BucketCreateResponse,
    type BucketCreateParams as BucketCreateParams,
  };

  export { Download as Download, BaseDownload as BaseDownload };

  export {
    DownloadURL as DownloadURL,
    BaseDownloadURL as BaseDownloadURL,
    type DownloadURLCreateResponse as DownloadURLCreateResponse,
    type DownloadURLCreateParams as DownloadURLCreateParams,
  };

  export { Files as Files, BaseFiles as BaseFiles };

  export { Multipart as Multipart, BaseMultipart as BaseMultipart };

  export { Upload as Upload, BaseUpload as BaseUpload };

  export {
    UploadBase64 as UploadBase64,
    BaseUploadBase64 as BaseUploadBase64,
    type UploadBase64CreateResponse as UploadBase64CreateResponse,
    type UploadBase64CreateParams as UploadBase64CreateParams,
  };

  export { UploadFromURL as UploadFromURL, BaseUploadFromURL as BaseUploadFromURL };

  export {
    UploadURL as UploadURL,
    BaseUploadURL as BaseUploadURL,
    type UploadURLCreateResponse as UploadURLCreateResponse,
    type UploadURLCreateParams as UploadURLCreateParams,
  };
}
