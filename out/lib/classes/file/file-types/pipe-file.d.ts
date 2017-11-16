import { BaseFile } from '../base-file';
import { PipeMeta } from '../meta/pipe-meta';
export declare class PipeFile extends BaseFile {
    constructor(path: string, sourceFile: any);
    buildFileMeta(): PipeMeta;
}
