import { Property } from '../../models/Property';

export interface CommonMetaProperties {
  id: string;
  title: string;
  properties: Property[];
  description: string;
}
