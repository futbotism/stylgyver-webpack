import { ModelMeta } from '../meta/model-meta';
import { BaseFile } from '../base-file';
export declare class ModelFile extends BaseFile {
    constructor(path: string, sourceFile: any);
    buildFileMeta(): ModelMeta;
}
