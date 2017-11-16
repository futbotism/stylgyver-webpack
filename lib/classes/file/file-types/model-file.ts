import { getPropertyFromLine } from '../../../functions';
import { BaseFile } from '../base-file';
import { ModelMeta } from '../meta/model-meta';

export class ModelFile extends BaseFile {
  

  constructor(path: string, sourceFile: any) {
    super(path, sourceFile);
    this.parseLines();
  }

  parseLines() {
    this.properties = this.lines.map(line => getPropertyFromLine(line)).filter(e => e);
  }

  buildFileMeta() {
    return new ModelMeta({
      id: this.id,
      title: this.title,
      properties: this.properties,
    });
  }
}
