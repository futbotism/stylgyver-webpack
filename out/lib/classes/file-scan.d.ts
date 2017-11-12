import { MenuItem } from './menu-item';
export declare class FileScan {
    private path;
    private type;
    comments: any;
    examples: any;
    description: string;
    title: string;
    id: string;
    lines: string[];
    file: any;
    getInputFromLines: boolean;
    getOutputFromLines: boolean;
    constructor(path: string);
    getDefaults(): void;
    getMenuItem(): MenuItem;
    parseComments(): void;
    useLeadOrDescription(comment: any): any;
    buildFileMeta(): void;
}
