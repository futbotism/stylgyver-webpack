import { Property } from '../../models';

export class BaseMeta {
  id: string;
  title: string;
  description: string;
  properties: Property[];

  constructor(baseOptions) {
    this.id = baseOptions.id;
    this.title = baseOptions.title;
    this.properties = baseOptions.properties;
    this.description = baseOptions.description;
  }
}
