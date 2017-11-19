import { Property } from '../../../models';
import { getExamplesFromComments, getPropertyFromLine } from '../../../functions';
import { BaseFile } from '../base-file';
import { DirectiveMeta } from '../meta/directive-meta';

export class DirectiveFile extends BaseFile {
  examples: string[] = [];

  constructor(path: string, sourceFile: any) {
    super(path, sourceFile);
    this.parseLines();
  }

  parseLines() {
    this.common.properties = this.lines.map(line => getPropertyFromLine(line)).filter(e => e);
    this.examples = getExamplesFromComments(this.comments);
    this.common.health.missingExample = this.examples.length === 0;
  }

  buildFileMeta() {
    return new DirectiveMeta(this.common, this.examples);
  }
}
