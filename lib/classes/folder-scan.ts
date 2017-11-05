import { FileScan, MenuItem, FolderMeta } from '../classes';
import { Source, parseType } from '../models';
import * as fs from 'fs';
import {
  ComponentMetaGenerator,
  // directiveMetaGenerator,
  // serviceMetaGenerator,
  // pipeMetaGenerator,
  // modelMetaGenerator,
} from '../meta-generators';

export class FolderScan {
  source: Source;
  activeFileParse: FileScan; // the file that is being currently parsed
  menu: MenuItem[] = [];
  meta: {} = {};

  constructor(source: Source) {
    this.source = source;
  }

  performScan() {
    const foldersAndFiles = fs.readdirSync(this.source.path);

    foldersAndFiles.forEach((folderOrFileName, index) => {

      if (!this.shouldIgnore(folderOrFileName)) {
        const isFolder = false;
        const fullPath = this.buildFilePath(folderOrFileName, isFolder);
        this.activeFileParse = this.instantiateFileByType(fullPath, folderOrFileName);
        this.menu.push(this.activeFileParse.getMenuItem());
        this.meta[this.activeFileParse.id] = this.activeFileParse.buildFileMeta();
      }

    });

    const meta = new FolderMeta(this.menu, this.meta);
    return meta;
  }

  shouldIgnore(folderOrFile: string) {
    const isModule = folderOrFile.includes('module.ts');
    const isIndex = folderOrFile.includes('index.ts');
    const isIgnore = this.source.folderToIgnore.find(folderOrFileToIgnore => folderOrFileToIgnore === folderOrFile);

    return isModule || isIndex || isIgnore;
  }

  instantiateFileByType(folderOrFile: string, folderOrFileName: string) {

    switch (this.source.parseType) {
      case parseType.component:
        return new ComponentMetaGenerator(folderOrFile, folderOrFileName);

      case parseType.directive:
        // directiveMetaGenerator(folderOrFile);
        break;

      case parseType.service:
        // serviceMetaGenerator(folderOrFile);
        break;

      case parseType.pipe:
        // pipeMetaGenerator(folderOrFile);
        break;

      case parseType.model:
        // modelMetaGenerator(folderOrFile);
        break;

      default:
        process.exit(1);
        throw `parse type ${this.source.parseType} was not recognized`;
    }

  }

  buildFilePath(fileName: string, isFolder: boolean) {
    if (isFolder) {
      return `${this.source.path}/${fileName}.${this.source.parseType}.ts`;
    } else {
      return `${this.source.path}/${fileName}/${fileName}.${this.source.parseType}.ts`;
    }
  }
}
