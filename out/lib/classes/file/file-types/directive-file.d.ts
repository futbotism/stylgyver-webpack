import { BaseFile } from '../base-file';
import { DirectiveMeta } from '../meta/directive-meta';
export declare class DirectiveFile extends BaseFile {
    constructor(path: string, sourceFile: any);
    parseLines(): void;
    buildFileMeta(): DirectiveMeta;
}
