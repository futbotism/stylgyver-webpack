import { MenuItem } from './menu-item';
import { camelCase, kebabCase } from 'lodash';
const comments = require('parse-comments');

export class FileScan {
  private path: string;
  private type: any;

  public comments: any;
  public examples: any;
  public description: string;
  public title: string;
  public id: string;
  public lines: string[];
  public file: any;

  // Line parse switches
  public getInputFromLines = false;
  public getOutputFromLines = false;

  constructor(path: string) {
    this.path = path;
    this.getDefaults();
    this.parseComments();
  }

  getDefaults() {
    const regex = /[\w-]+\./;
    this.title = regex.exec(this.path)[0].replace('.', '');
    this.id = camelCase(this.title);
    this.lines = require('fs').readFileSync(this.path, 'utf-8').split('\n').filter(Boolean);
    this.comments = (comments(require('fs').readFileSync(this.path, 'utf-8')));
  }

  getMenuItem(): MenuItem {
    return new MenuItem(this.title, this.id);
  }

  parseComments() {
    this.comments.forEach((comment) => {
      this.examples = comment.examples;
      this.description = this.useLeadOrDescription(comment);
    });
  }

  useLeadOrDescription(comment) {
    return comment.lead === '' ? comment.description : comment.lead;
  }

  buildFileMeta() { }
}
