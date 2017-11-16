import { Property } from '../../models';
import { MenuItem } from '../menu-item';
export declare class BaseFile {
    private filePath;
    private sourceFile;
    title: string;
    id: string;
    description: string;
    properties: Property[];
    comments: any[];
    lines: string[];
    constructor(filePath: string, sourceFile: any);
    getDefaults(): void;
    getMenuItem(): MenuItem;
    buildFileMeta(): void;
}
