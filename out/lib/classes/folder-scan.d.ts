import { BaseFile, MenuItem, FolderMeta } from '../classes';
import { SourceOption } from '../models';
import { ServiceFile } from './file';
export declare class FolderScan {
    sourceOption: SourceOption;
    activeFile: BaseFile;
    menu: MenuItem[];
    meta: any;
    constructor(sourceOption: SourceOption);
    performScan(): FolderMeta;
    appendMeta(): void;
    shouldIgnore(filePath: string): any;
    instantiateFileByType(filePath: any, sourceFile: any): ServiceFile;
}
