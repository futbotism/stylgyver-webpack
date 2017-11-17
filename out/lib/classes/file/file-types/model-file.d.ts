import { BaseFile } from '../base-file';
import { ModelMeta } from '../meta/model-meta';
export declare class ModelFile extends BaseFile {
    constructor(path: string, sourceFile: any);
    parseLines(): void;
    buildFileMeta(): ModelMeta;
}
