import { TypedVariable } from '../models';
import { FileScan } from '../classes';
import { extractTypedVariable } from '../file-line-functions';

export class ComponentMetaGenerator extends FileScan {
  inputList: TypedVariable[] = [];
  outputList: TypedVariable[] = [];
  viewChildList: TypedVariable[] = [];
  viewChildrenList: TypedVariable[] = [];
  contentChildList: TypedVariable[] = [];
  contentChildrenList: TypedVariable[] = [];

  constructor(path: string) {
    super(path);
    this.parseLines();
  }

  parseLines() {
    this.lines.forEach((line) => {
      if (line.includes('@Input')) {
        const p = extractTypedVariable(line);
        if (p) this.inputList.push(p);
      }
      if (line.includes('@Output')) {
        const p = extractTypedVariable(line);
        if (p) this.outputList.push(p);
      }
      if (line.includes('@ViewChild(')) {
        const p = extractTypedVariable(line);
        if (p) this.viewChildList.push(p);
      }
      if (line.includes('@ViewChildren(')) {
        const p = extractTypedVariable(line);
        if (p) this.viewChildrenList.push(p);
      }
      if (line.includes('@ContentChild(')) {
        const p = extractTypedVariable(line);
        if (p) this.contentChildList.push(p);
      }
      if (line.includes('@ContentChildren(')) {
        const p = extractTypedVariable(line);
        if (p) this.contentChildrenList.push(p);
      }
    });
  }

  buildFileMeta() {

    return {
      id: this.id,
      title: this.title,
      description: this.description,
      examples: this.examples,
      inputList: this.inputList,
      outputList: this.outputList,
      viewChildList: this.viewChildList,
      viewChildrenList: this.viewChildrenList,
      contentChildList: this.contentChildList,
      contentChildrenList: this.contentChildrenList,
    };
  }
}
