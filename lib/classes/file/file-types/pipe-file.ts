import { PipeMeta } from '../meta/pipe-meta';
import { BaseFile } from '../base-file';

export class PipeFile extends BaseFile {

  constructor(path: string, sourceFile: any) {
    super(path, sourceFile);
  }

  buildFileMeta() {
    return new PipeMeta({
      id: this.id,
      title: this.title,
      properties: null,
    });
  }
}
