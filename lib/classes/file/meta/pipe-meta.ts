import { BaseMeta } from '../base-meta';

export class PipeMeta extends BaseMeta {
  examples: string[];

  constructor(common, examples) {
    super(common);
    this.examples = examples;
    this.health.missingExample = this.examples.length === 0;
  }
}
