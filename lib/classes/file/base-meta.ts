import { Property, Health } from '../../models';
import { CommonMetaProperties } from './common-meta';

export class BaseMeta implements CommonMetaProperties {
  id: string;
  title: string;
  description: string;
  properties: Property[];
  health: Health;

  constructor(common: CommonMetaProperties) {
    this.id = common.id;
    this.title = common.title;
    this.properties = common.properties;
    this.description = common.description;
    this.health = common.health;
  }
}
