import { TypedVariable } from '../../models';

export class BaseMeta {
  id: string;
  title: string;
  properties: TypedVariable[];

  constructor(baseOptions) {
    this.id = baseOptions.id;
    this.title = baseOptions.title;
    this.properties = baseOptions.properties;
    console.log(this);
  }
}
