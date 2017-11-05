import { MenuItem } from './menu-item';
import { camelCase, kebabCase } from 'lodash';

export class FileScan {
  private path: string;
  private type: any;
  
  public title: string;
  public id: string;
  public lines: string[];
  public file: any;

  constructor(path: string, folderOrFileName: string) {
    this.path = path;
    this.id = camelCase(folderOrFileName);
    this.title = folderOrFileName.split('-').join(' ');
    this.lines = require('fs').readFileSync(path, 'utf-8').split('\n').filter(Boolean);
  }

  getMenuItem(): MenuItem {
    return new MenuItem(this.title, this.id);
  }

  buildFileMeta() {}
}
