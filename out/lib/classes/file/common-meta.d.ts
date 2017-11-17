import { Property, Health } from '../../models/';
export interface CommonMetaProperties {
    id: string;
    title: string;
    properties: Property[];
    description: string;
    health: Health;
}
