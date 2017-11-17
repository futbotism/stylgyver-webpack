import { BaseMeta } from '../base-meta';

export class DirectiveMeta extends BaseMeta {
  examples: string[];

  constructor(common, examples) {
    super(common);
    this.examples = examples;
  }
}
