import { MenuItem } from '../menu-item';
export declare class BaseFile {
    private filePath;
    private sourceFile;
    title: string;
    id: string;
    constructor(filePath: string, sourceFile: any);
    getDefaults(): void;
    getMenuItem(): MenuItem;
    buildFileMeta(): void;
}
