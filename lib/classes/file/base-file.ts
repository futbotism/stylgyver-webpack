import { camelCase } from 'lodash';
import * as comments from 'parse-comments';

import { Property } from '../../models/';
import { MenuItem } from '../menu-item';
import { CommonMetaProperties } from './common-meta';

export class BaseFile {
  private filePath: string;
  private sourceFile: any;
  public comments: any[];
  public lines: string[];
  public common: CommonMetaProperties;

  constructor(filePath: string, sourceFile) {
    this.filePath = filePath;
    this.sourceFile = sourceFile;
    this.lines = require('fs').readFileSync(this.filePath, 'utf-8').split('\n').filter(Boolean);
    this.comments = (comments(require('fs').readFileSync(this.filePath, 'utf-8')));
    this.getDefaults();
  }

  getDefaults() {
    const regex = /[\w-]+\./; // TODO: move to constant folder
    const description: string = this.comments[0].lead;
    const title: string = regex.exec(this.filePath)[0].replace('.', '');
    const properties: Property[] = undefined;
    const id: string = camelCase(title);
    
    this.common = {
      description,
      title,
      properties,
      id,
    };
  }

  getMenuItem(): MenuItem {
    return new MenuItem(this.common.title, this.common.id);
  }

  buildFileMeta() { }
}
