import { BaseFile } from '../base-file';
import { PipeMeta } from '../meta/pipe-meta';
import { getCodeFromComments } from '../../../functions';

export class PipeFile extends BaseFile {
  examples: string[] = [];

  constructor(path: string, sourceFile: any) {
    super(path, sourceFile);
    this.examples = getCodeFromComments(this.comments);
  }

  buildFileMeta() {
    return new PipeMeta(this.common, this.examples);
  }
}
