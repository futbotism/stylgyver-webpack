import { camelCase } from 'lodash';
import * as comments from 'parse-comments';

import { Property } from '../../models';
import { MenuItem } from '../menu-item';

export class BaseFile {
  private filePath: string;
  private sourceFile: any;

  public title: string;
  public id: string;
  public description: string;
  public properties: Property[];
  comments: any[];
  lines: string[];


  constructor(filePath: string, sourceFile) {

    this.filePath = filePath;
    this.sourceFile = sourceFile;
    this.lines = require('fs').readFileSync(this.filePath, 'utf-8').split('\n').filter(Boolean);
    this.comments = (comments(require('fs').readFileSync(this.filePath, 'utf-8')));
    this.getDefaults();
  }

  getDefaults() {
    const regex = /[\w-]+\./;
    this.title = regex.exec(this.filePath)[0].replace('.', '');
    this.id = camelCase(this.title);
    this.comments.map((comment) => {
      this.description += comment.lead;
    });
  }

  getMenuItem(): MenuItem {
    return new MenuItem(this.title, this.id);
  }

  buildFileMeta() { }
}
