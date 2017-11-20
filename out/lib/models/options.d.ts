export interface defaultOptions {
    outputPath: string;
    sourceOptions: SourceOption[];
}
export interface SourceOption {
    name: string;
    parseType: parseType;
    path: string;
    folderToIgnore: string[];
    tagsToSelect: string[];
    addMetaToArray: boolean;
}
export declare type parseType = 'component' | 'directive' | 'service' | 'pipe' | 'model';
export declare const parseType: {
    component: parseType;
    directive: parseType;
    service: parseType;
    pipe: parseType;
    model: parseType;
};
export declare class DefaultOptions implements defaultOptions {
    outputPath: string;
    sourceOptions: SourceOption[];
    constructor(options: defaultOptions);
}
