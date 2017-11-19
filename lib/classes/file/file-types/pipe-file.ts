import { BaseFile } from '../base-file';
import { PipeMeta } from '../meta/pipe-meta';
import { getExamplesFromComments } from '../../../functions';

export class PipeFile extends BaseFile {
  examples: string[] = [];

  constructor(path: string, sourceFile: any) {
    super(path, sourceFile);
    this.examples = getExamplesFromComments(this.comments);
    this.common.health.missingExample = this.examples.length === 0;
  }

  buildFileMeta() {
    return new PipeMeta(this.common, this.examples);
  }
}
