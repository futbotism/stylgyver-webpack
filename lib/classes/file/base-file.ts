import { readFileSync } from 'fs';
import { MenuItem } from '../menu-item';
import { camelCase, kebabCase } from 'lodash';
const comments = require('parse-comments');
import tsSimpleAst from 'ts-simple-ast';

export class BaseFile {
  private filePath: string;
  private sourceFile: any;

  public title: string;
  public id: string;

  constructor(filePath: string, sourceFile) {
    this.filePath = filePath;
    this.sourceFile = sourceFile;
    this.getDefaults();
  }

  getDefaults() {
    const regex = /[\w-]+\./;
    this.title = regex.exec(this.filePath)[0].replace('.', '');
    this.id = camelCase(this.title);
  }

  getMenuItem(): MenuItem {
    return new MenuItem(this.title, this.id);
  }

  // parseComments() {
  //   this.comments.forEach((comment) => {
  //     this.examples = comment.examples;
  //     this.description = this.useLeadOrDescription(comment);
  //   });
  // }

  // useLeadOrDescription(comment) {
  //   return comment.lead === '' ? comment.description : comment.lead;
  // }

  buildFileMeta() { }
}
