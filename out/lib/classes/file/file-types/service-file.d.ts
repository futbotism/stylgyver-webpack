import { BaseFile } from '../base-file';
import { ServiceMeta } from '../meta/service-meta';
export declare class ServiceFile extends BaseFile {
    constructor(path: string, sourceFile: any);
    buildFileMeta(): ServiceMeta;
}
