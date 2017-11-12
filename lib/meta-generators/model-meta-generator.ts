import { FileScan } from '../classes';

export class ModelMetaGenerator extends FileScan {

  constructor(path: string) {
    super(path);
  }

  buildFileMeta() {

    return {
      id: this.id,
      title: this.title,
      description: this.description,
      examples: this.examples,
    };
  }
}
