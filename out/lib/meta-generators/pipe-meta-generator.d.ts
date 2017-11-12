import { FileScan } from '../classes';
export declare class PipeMetaGenerator extends FileScan {
    constructor(path: string);
    buildFileMeta(): {
        id: string;
        title: string;
        description: string;
        examples: any;
    };
}
