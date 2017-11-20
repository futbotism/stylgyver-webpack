import * as glob from 'glob';

import { BaseFile, FolderMeta, MenuItem } from '../classes';
import { parseType, SourceOption } from '../models';
import { ComponentFile, DirectiveFile, ModelFile, PipeFile, ServiceFile } from './file';

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

    // const ast = new tsSimpleAst();
    // ast.addSourceFiles('**/*.ts');

    const globPath = `${this.sourceOption.path}/**/*.${this.sourceOption.parseType}.ts`;
    const files = glob.sync(globPath, undefined);

    files.forEach((filePath, index) => {
      if (!this.shouldIgnore(filePath)) {

        const sourceFile = undefined;// ast.getSourceFile(filePath);

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
      this.meta[this.activeFile.common.id] = this.activeFile.buildFileMeta();
    }
  }

  shouldIgnore(filePath: string) {
    const isModule = filePath.includes('module.ts');
    const isIndex = filePath.includes('index.ts');
    const shouldIgnore = this.sourceOption.folderToIgnore && this.sourceOption.folderToIgnore.some(f => filePath.includes(f));

    return isModule || isIndex || shouldIgnore;
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
        // process.exit(1);
        throw `parse type ${this.sourceOption.parseType} was not recognized`;
    }

  }
}
