import { BaseFile, MenuItem, FolderMeta } from '../classes';
import { SourceOption, parseType } from '../models';
import * as fs from 'fs';
import * as glob from 'glob';
import {
  ComponentFile,
  DirectiveFile,
  ServiceFile,
  PipeFile,
  ModelFile,
} from './file';
import tsSimpleAst from 'ts-simple-ast';

export class FolderScan {
  sourceOption: SourceOption;
  activeFile: BaseFile; // the file that is being currently parsed
  menu: MenuItem[] = [];
  meta: any;

  constructor(sourceOption: SourceOption) {
    this.sourceOption = sourceOption;
    this.meta = this.sourceOption.addMetaToArray ? [] : {};
  }

  performScan() {

    const ast = new tsSimpleAst();
    ast.addSourceFiles('**/*.ts');

    const globPath = `${this.sourceOption.path}/**/*.${this.sourceOption.parseType}.ts`;
    const files = glob.sync(globPath, undefined);
    
    files.forEach((filePath, index) => {
      if (!this.shouldIgnore(filePath)) {
        
        const sourceFile = ast.getSourceFile(filePath);
        // const interfaces = sourceFile.getInterfaces();        
        // console.log(filePath);
        // console.log(sourceFile);

        this.activeFile = this.instantiateFileByType(filePath, sourceFile);
        this.menu.push(this.activeFile.getMenuItem());
        this.appendMeta();


      }
    });

    return new FolderMeta(this.menu, this.meta);
  }

  appendMeta() {
    if (this.sourceOption.addMetaToArray) {
      this.meta.push(this.activeFile.buildFileMeta());
    } else {
      this.meta[this.activeFile.id] = this.activeFile.buildFileMeta();
    }
  }

  shouldIgnore(filePath: string) {
    const isModule = filePath.includes('module.ts');
    const isIndex = filePath.includes('index.ts');

    let isIgnore;
    if (this.sourceOption.folderToIgnore) {
      isIgnore = this.sourceOption.folderToIgnore.find(filePathToIgnore => filePathToIgnore === filePath);
    }

    return isModule || isIndex || isIgnore;
  }

  instantiateFileByType(filePath, sourceFile) {

    switch (this.sourceOption.parseType) {
      case parseType.component:
        return new ComponentFile(filePath, sourceFile);

      case parseType.directive:
        return new DirectiveFile(filePath, sourceFile);

      case parseType.service:
        return new ServiceFile(filePath, sourceFile);

      case parseType.pipe:
        return new PipeFile(filePath, sourceFile);

      case parseType.model:
        return new ModelFile(filePath, sourceFile);

      default:
        process.exit(1);
        throw `parse type ${this.sourceOption.parseType} was not recognized`;
    }

  }
}
