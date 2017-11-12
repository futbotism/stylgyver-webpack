import { FileScan } from '../classes';

export class PipeMetaGenerator extends FileScan {

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
