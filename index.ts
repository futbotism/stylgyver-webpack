import { Options, SourceOption } from './lib/models';
import { FolderScan } from './lib/classes';

class StyleGyverPlugin {

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
    this.options.sourceOptions.map((sourceOption: SourceOption) => {
      const folderScan = new FolderScan(sourceOption);
      this.styleguide[sourceOption.name] = folderScan.performScan();
    });

    require('fs').writeFile(
      this.options.outputPath,
      JSON.stringify(this.styleguide, null, 2),
      'utf-8',
      // tslint:disable-next-line:no-console
      () => console.info('The styleguide has been generated 🎨'));
  }
}

export = StyleGyverPlugin;
