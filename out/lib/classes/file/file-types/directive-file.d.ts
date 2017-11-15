import { DirectiveMeta } from '../meta/directive-meta';
import { BaseFile } from '../base-file';
export declare class DirectiveFile extends BaseFile {
    constructor(path: string, sourceFile: any);
    parseLines(): void;
    buildFileMeta(): DirectiveMeta;
}
