import { ComponentMeta } from '../meta/component-meta';
import { BaseFile } from '../base-file';

export class ComponentFile extends BaseFile {

  constructor(path: string, sourceFile: any) {
    super(path, sourceFile);
    this.parseLines();
  }

  parseLines() {
  }

  buildFileMeta() {
    return new ComponentMeta({
      id: this.id,
      title: this.title,
      properties: undefined,
    });
  }
}
