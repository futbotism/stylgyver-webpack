import { getPropertyFromLine, getExamplesFromComments } from '../../../functions';
import { Property } from '../../../models/index';
import { BaseFile } from '../base-file';
import { ComponentMeta } from '../meta/component-meta';

export class ComponentFile extends BaseFile {
  examples: string[] = [];

  constructor(path: string, sourceFile: any) {
    super(path, sourceFile);
    this.parseLines();
  }

  parseLines() {
    this.common.properties = this.lines.map(line => getPropertyFromLine(line)).filter(e => e && e.decorator);
    this.examples = getExamplesFromComments(this.comments);
    this.common.health.missingExample = this.examples.length === 0;
  }

  buildFileMeta() {
    return new ComponentMeta(this.common, this.examples);
  }
}
