import { ServiceMeta } from '../meta/service-meta';
import { BaseFile } from '../base-file';

export class ServiceFile extends BaseFile {

  constructor(path: string, sourceFile: any) {
    super(path, sourceFile);
  }

  buildFileMeta() {
    return new ServiceMeta({
      id: this.id,
      title: this.title,
      properties: null,
    });
  }
}
