import { Property } from '../../models';
import { CommonMetaProperties } from './common-meta';

export class BaseMeta implements CommonMetaProperties {
  id: string;
  title: string;
  description: string;
  properties: Property[];

  constructor(common: CommonMetaProperties) {
    this.id = common.id;
    this.title = common.title;
    this.properties = common.properties;
    this.description = common.description;
  }
}
