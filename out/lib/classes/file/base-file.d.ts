import { MenuItem } from '../menu-item';
import { CommonMetaProperties } from './common-meta';
export declare class BaseFile {
    private filePath;
    private sourceFile;
    comments: any[];
    lines: string[];
    common: CommonMetaProperties;
    constructor(filePath: string, sourceFile: any);
    getDefaults(): void;
    getDescription(comments: any): any;
    getMenuItem(): MenuItem;
    buildFileMeta(): void;
}
