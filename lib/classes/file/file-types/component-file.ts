import { getPropertyFromLine } from '../../../functions';
import { BaseFile } from '../base-file';
import { ComponentMeta } from '../meta/component-meta';
import { Property } from '../../../models/index';

export class ComponentFile extends BaseFile {
  examples: string[];

  constructor(path: string, sourceFile: any) {
    super(path, sourceFile);
    this.parseLines();
  }

  parseLines() {
    this.properties = this.lines
      .map(line => getPropertyFromLine(line))
      .filter((property: Property) => { return property && property.decorator; });
    this.examples = this.comments.map(comment => comment.examples.map(example => example.code));
  }

  buildFileMeta() {
    return new ComponentMeta({
      id: this.id,
      title: this.title,
      properties: this.properties,
      description: this.description,
    }, this.examples);
  }
}
