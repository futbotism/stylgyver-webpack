import { BaseMeta } from '../base-meta';

export class ComponentMeta extends BaseMeta {
  examples: string[];

  constructor(common, examples) {
    super(common);
    this.examples = examples;
  }
}
