import { BaseFile } from '../base-file';
import { ComponentMeta } from '../meta/component-meta';
export declare class ComponentFile extends BaseFile {
    examples: string[];
    constructor(path: string, sourceFile: any);
    parseLines(): void;
    buildFileMeta(): ComponentMeta;
}
