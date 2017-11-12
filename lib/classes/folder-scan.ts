import { FileScan, MenuItem, FolderMeta } from '../classes';
import { SourceOption, parseType } from '../models';
import * as fs from 'fs';
import * as glob from 'glob';
import {
  ComponentMetaGenerator,
  DirectiveMetaGenerator,
  ServiceMetaGenerator,
  PipeMetaGenerator,
  ModelMetaGenerator,
} from '../meta-generators';

export class FolderScan {
  sourceOption: SourceOption;
  activeFileParse: FileScan; // the file that is being currently parsed
  menu: MenuItem[] = [];
  meta: any;

  constructor(sourceOption: SourceOption) {
    this.sourceOption = sourceOption;

    if (this.sourceOption.addMetaToArray) {
      this.meta = [];
    } else {
      this.meta = {};
    }
  }

  performScan() {
    const files = glob.sync(`${this.sourceOption.path}/**/*.${this.sourceOption.parseType}.ts`, undefined);

    files.forEach((file, index) => {
      if (!this.shouldIgnore(file)) {
        this.activeFileParse = this.instantiateFileByType(file);
        this.menu.push(this.activeFileParse.getMenuItem());

        if (this.sourceOption.addMetaToArray) {
          this.meta.push(this.activeFileParse.buildFileMeta());
        } else {
          this.meta[this.activeFileParse.id] = this.activeFileParse.buildFileMeta();
        }
      }
    });

    return new FolderMeta(this.menu, this.meta);
  }

  shouldIgnore(file: string) {
    const isModule = file.includes('module.ts');
    const isIndex = file.includes('index.ts');

    let isIgnore;
    if (this.sourceOption.folderToIgnore) {
      isIgnore = this.sourceOption.folderToIgnore.find(fileToIgnore => fileToIgnore === file);
    }

    return isModule || isIndex || isIgnore;
  }

  instantiateFileByType(file: string) {

    switch (this.sourceOption.parseType) {
      case parseType.component:
        return new ComponentMetaGenerator(file);

      case parseType.directive:
        return new DirectiveMetaGenerator(file);

      case parseType.service:
        return new ServiceMetaGenerator(file);

      case parseType.pipe:
        return new PipeMetaGenerator(file);

      case parseType.model:
        return new ModelMetaGenerator(file);

      default:
        process.exit(1);
        throw `parse type ${this.sourceOption.parseType} was not recognized`;
    }

  }
}
