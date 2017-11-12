import { FileScan, MenuItem, FolderMeta } from '../classes';
import { SourceOption } from '../models';
import { ModelMetaGenerator } from '../meta-generators';
export declare class FolderScan {
    sourceOption: SourceOption;
    activeFileParse: FileScan;
    menu: MenuItem[];
    meta: any;
    constructor(sourceOption: SourceOption);
    performScan(): FolderMeta;
    shouldIgnore(file: string): any;
    instantiateFileByType(file: string): ModelMetaGenerator;
}
