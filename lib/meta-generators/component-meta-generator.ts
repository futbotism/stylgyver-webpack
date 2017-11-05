import { NgInput, NgOutput } from '../models';
import { FileScan } from '../classes';

export class ComponentMetaGenerator extends FileScan {
  inputs: NgInput[];
  outputs: NgOutput[];

  constructor(path: string, folderOrFileName: string) {
    super(path, folderOrFileName);
  }

  buildFileMeta() {
    this.inputs = [{ name: 'test', type: 'string' }];
    this.outputs = [{ name: 'testChange', type: 'string' }];

    return {
      id: this.id,
      title: this.title,
      inputs: this.inputs,
      outputs: this.outputs,
    };
  }
}
