import { BaseFile } from '../base-file';
import { DirectiveMeta } from '../meta/directive-meta';

export class DirectiveFile extends BaseFile {

  constructor(path: string, sourceFile: any) {
    super(path, sourceFile);
    this.parseLines();
  }

  parseLines() {

  }

  buildFileMeta() {
    return new DirectiveMeta(this.common);
  }
}
