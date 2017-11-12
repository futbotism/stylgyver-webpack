import { FileScan } from '../classes';
export declare class ServiceMetaGenerator extends FileScan {
    constructor(path: string);
    buildFileMeta(): {
        id: string;
        title: string;
        description: string;
        examples: any;
    };
}
