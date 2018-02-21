import { SourceOption, DefaultOptions } from './lib/models';
import { FolderScan } from './lib/classes';
import { isEqual, differenceWith } from 'lodash';
import * as fs from 'fs';

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

    let t;
    try {
      t = JSON.parse(fs.readFileSync(this.options.outputPath, 'utf8'));
    } catch {
      t = {};
    }

    if (JSON.stringify(this.styleguide) !== JSON.stringify(t)) {
      fs.writeFile(this.options.outputPath, JSON.stringify(this.styleguide, null, 2), 'utf-8', () => {
        // tslint:disable-next-line:no-console
        console.info('The styleguide has been generated 🎨');
      });
    }
  }
}

export = StyleGyverPlugin;
