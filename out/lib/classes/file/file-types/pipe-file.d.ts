import { PipeMeta } from '../meta/pipe-meta';
import { BaseFile } from '../base-file';
export declare class PipeFile extends BaseFile {
    constructor(path: string, sourceFile: any);
    buildFileMeta(): PipeMeta;
}
