import { SourceOption, DefaultOptions } from './lib/models';
import { FolderScan } from './lib/classes';
import { isEqual } from 'lodash';

let prevStyleguide: any = undefined;

class StyleGyverPlugin {
  options: DefaultOptions;
  styleguide = {};

  constructor(options: DefaultOptions) {
    this.options = new DefaultOptions(options); // Todo add a check to ensure all correct options are defined and set
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

    if (!isEqual(this.styleguide, prevStyleguide)) {
      require('fs').writeFile(
        this.options.outputPath,
        JSON.stringify(this.styleguide, null, 2),
        'utf-8',
        // tslint:disable-next-line:no-console
        () => {
          prevStyleguide = Object.assign({}, this.styleguide);
          console.info('The styleguide has been generated 🎨');
        });
    }
  }
}

export = StyleGyverPlugin;
