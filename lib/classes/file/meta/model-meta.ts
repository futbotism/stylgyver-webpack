import { BaseMeta } from '../base-meta';

export class ModelMeta extends BaseMeta {

  constructor(common) {
    super(common);
    this.health.missingProperties = this.properties.length === 0;
  }
}
