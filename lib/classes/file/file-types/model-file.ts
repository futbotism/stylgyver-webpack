import { getPropertyFromLine } from '../../../functions';
import { BaseFile } from '../base-file';
import { ModelMeta } from '../meta/model-meta';

export class ModelFile extends BaseFile {
  

  constructor(path: string, sourceFile: any) {
    super(path, sourceFile);
    this.parseLines();
  }

  parseLines() {
    this.common.properties = this.lines.map(line => getPropertyFromLine(line)).filter(e => e);
    this.common.health.missingProperties = this.common.properties.length === 0;
  }

  buildFileMeta() {
    return new ModelMeta(this.common);
  }
}
