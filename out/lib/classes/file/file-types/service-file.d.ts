import { ServiceMeta } from '../meta/service-meta';
import { BaseFile } from '../base-file';
export declare class ServiceFile extends BaseFile {
    constructor(path: string, sourceFile: any);
    buildFileMeta(): ServiceMeta;
}
