import { FileScan } from '../classes';

export class ServiceMetaGenerator extends FileScan {

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
