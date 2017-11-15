import * as fs from 'fs';
import { ModelMeta } from '../meta/model-meta';
import { BaseFile } from '../base-file';
import tsSimpleAst from 'ts-simple-ast';

export class ModelFile extends BaseFile {
  

  constructor(path: string, sourceFile: any) {
    super(path, sourceFile);
  }

  buildFileMeta() {
    return new ModelMeta({
      id: this.id,
      title: this.title,
      properties: undefined,
    });
  }
}
