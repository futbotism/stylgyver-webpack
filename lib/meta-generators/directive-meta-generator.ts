import { FileScan } from '../classes';

export class DirectiveMetaGenerator extends FileScan {

  constructor(path: string, folderOrFileName: string) {
    super(path, folderOrFileName);
  }
}
