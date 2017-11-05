import { FileScan } from '../classes';

export class ServiceMetaGenerator extends FileScan {

  constructor(path: string, folderOrFileName: string) {
    super(path, folderOrFileName);
  }
}
