import { ComponentMeta } from '../meta/component-meta';
import { BaseFile } from '../base-file';
export declare class ComponentFile extends BaseFile {
    constructor(path: string, sourceFile: any);
    parseLines(): void;
    buildFileMeta(): ComponentMeta;
}
