import { Options, Source } from './lib/models';
import { FolderScan } from './lib/classes';

class StyleGuidelerPlugin {

  options: Options;
  styleguide = {};

  constructor(options: Options) {
    this.options = options; // Todo add a check to ensure all correct options are defined and set
  }

  apply(compiler) {
    compiler.plugin('done', () => {
      this.buildStyleguide();
    });
  }

  buildStyleguide() {
    this.options.sources.map((source: Source) => {
      const folderScan = new FolderScan(source);
      this.styleguide[source.name] = folderScan.performScan();
    });

    require('fs').writeFile(
      this.options.outputPath,
      JSON.stringify(this.styleguide, null, 2),
      'utf-8',
      () => console.log('The styleguide has been generated 🎨'));
  }
}

export = StyleGuidelerPlugin;
