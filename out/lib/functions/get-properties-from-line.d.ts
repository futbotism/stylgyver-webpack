import { Property } from '../models';
export declare function getPropertyFromLine(line: string): Property;
export declare function findDecorator(line: string): "Input" | "Output" | "HostBinding" | "ContentChild" | "ContentChildren";
