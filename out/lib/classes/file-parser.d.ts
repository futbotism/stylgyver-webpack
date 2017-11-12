import { MenuItem } from './menu-item';
export declare class FileScan {
    private path;
    private type;
    title: string;
    id: string;
    lines: string[];
    file: any;
    constructor(path: string, folderOrFileName: string);
    getMenuItem(): MenuItem;
    buildFileMeta(): void;
}
