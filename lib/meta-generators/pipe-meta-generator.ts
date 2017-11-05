import { FileScan } from '../classes';

export class PipeMetaGenerator extends FileScan {

  constructor(path: string, folderOrFileName: string) {
    super(path, folderOrFileName);
  }
}
