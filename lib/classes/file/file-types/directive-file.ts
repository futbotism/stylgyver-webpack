import { Property } from '../../../models/Property';
import { getPropertyFromLine, getCodeFromComments } from '../../../functions';
import { BaseFile } from '../base-file';
import { DirectiveMeta } from '../meta/directive-meta';

export class DirectiveFile extends BaseFile {
  examples: string[] = [];

  constructor(path: string, sourceFile: any) {
    super(path, sourceFile);
    this.parseLines();
  }

  parseLines() {
    this.common.properties = this.lines
      .map(line => getPropertyFromLine(line))
      .filter((property: Property) => { return property && property.decorator; });

    this.examples = getCodeFromComments(this.comments);
  }

  buildFileMeta() {
    return new DirectiveMeta(this.common, this.examples);
  }
}
