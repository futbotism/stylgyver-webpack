import { BaseFile } from '../base-file';
import { PipeMeta } from '../meta/pipe-meta';
export declare class PipeFile extends BaseFile {
    examples: string[];
    constructor(path: string, sourceFile: any);
    buildFileMeta(): PipeMeta;
}
