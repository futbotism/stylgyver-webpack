import { BaseMeta } from '../base-meta';

export class ComponentMeta extends BaseMeta {
  examples: string[];

  constructor(baseOptions, examples) {
    super(baseOptions);
    this.examples = examples;
  }
}
