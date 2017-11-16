import { Property } from '../../models';
import { CommonMetaProperties } from './common-meta';
export declare class BaseMeta implements CommonMetaProperties {
    id: string;
    title: string;
    description: string;
    properties: Property[];
    constructor(common: CommonMetaProperties);
}
