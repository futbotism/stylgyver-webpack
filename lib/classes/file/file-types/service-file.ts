import { BaseFile } from '../base-file';
import { ServiceMeta } from '../meta/service-meta';

export class ServiceFile extends BaseFile {

  constructor(path: string, sourceFile: any) {
    super(path, sourceFile);
  }

  buildFileMeta() {
    return new ServiceMeta(this.common);
  }
}
