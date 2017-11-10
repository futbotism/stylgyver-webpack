import { MenuItem } from './menu-item';
import { camelCase, kebabCase } from 'lodash';
const comments = require('parse-comments');

export class FileScan {
  private path: string;
  private type: any;

  public comments: any;
  public examples: any;
  public lead: string;
  public title: string;
  public id: string;
  public lines: string[];
  public file: any;

  // Line parse switches
  public getInputFromLines = false;
  public getOutputFromLines = false;

  constructor(path: string, folderOrFileName: string) {
    this.path = path;
    this.id = camelCase(folderOrFileName);
    this.title = folderOrFileName.split('-').join(' ');
    this.lines = require('fs').readFileSync(path, 'utf-8').split('\n').filter(Boolean);
    this.comments = (comments(require('fs').readFileSync(path, 'utf-8')));

    this.parseComments();
  }

  getMenuItem(): MenuItem {
    return new MenuItem(this.title, this.id);
  }

  parseComments() {
    this.comments.forEach((comment) => {
      this.lead = comment.lead;
      this.examples = comment.examples;
    });
  }

  buildFileMeta() { }
}
