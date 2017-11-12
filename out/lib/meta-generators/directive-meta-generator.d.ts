import { TypedVariable } from '../models';
import { FileScan } from '../classes';
export declare class DirectiveMetaGenerator extends FileScan {
    inputList: TypedVariable[];
    outputList: TypedVariable[];
    viewChildList: TypedVariable[];
    viewChildrenList: TypedVariable[];
    contentChildList: TypedVariable[];
    contentChildrenList: TypedVariable[];
    constructor(path: string);
    parseLines(): void;
    buildFileMeta(): {
        id: string;
        title: string;
        description: string;
        examples: any;
        inputList: TypedVariable[];
        outputList: TypedVariable[];
        viewChildList: TypedVariable[];
        viewChildrenList: TypedVariable[];
        contentChildList: TypedVariable[];
        contentChildrenList: TypedVariable[];
    };
}
