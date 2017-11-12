import { FileScan, MenuItem, FolderMeta } from './classes';
import { Source } from './models';
import { ComponentMetaGenerator } from './meta-generators';
export declare class FolderScan {
    source: Source;
    activeFileParse: FileScan;
    menu: MenuItem[];
    meta: {};
    constructor(source: Source);
    performScan(): FolderMeta;
    shouldIgnore(folderOrFile: string): string | true;
    instantiateFileByType(folderOrFile: string, folderOrFileName: string): ComponentMetaGenerator;
    buildFilePath(fileName: string, isFolder: boolean): string;
}
