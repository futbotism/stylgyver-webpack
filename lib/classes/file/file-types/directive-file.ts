import { DirectiveMeta } from '../meta/directive-meta';
import { BaseFile } from '../base-file';

export class DirectiveFile extends BaseFile {

  constructor(path: string, sourceFile: any) {
    super(path, sourceFile);
    this.parseLines();
  }

  parseLines() {

  }

  buildFileMeta() {

    return new DirectiveMeta({
      id: this.id,
      title: this.title,
      properties: null,
    });
  }
}
