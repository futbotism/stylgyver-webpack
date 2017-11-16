import { BaseFile } from '../base-file';
import { PipeMeta } from '../meta/pipe-meta';

export class PipeFile extends BaseFile {

  constructor(path: string, sourceFile: any) {
    super(path, sourceFile);
  }

  buildFileMeta() {
    return new PipeMeta(this.common);
  }
}
