export interface defaultOptions {
  outputPath: string;
  sourceOptions: SourceOption[];
}

export interface SourceOption {
  name: string;
  parseType: parseType;
  path: string;
  folderToIgnore: string[];
  tagsToSelect: string[];
  addMetaToArray: boolean;
}

export type parseType = 'component' | 'directive' | 'service' | 'pipe' | 'model';

export const parseType = {
  component: 'component' as parseType,
  directive: 'directive' as parseType,
  service: 'service' as parseType,
  pipe: 'pipe' as parseType,
  model: 'model' as parseType,
};

export class DefaultOptions implements defaultOptions {
  outputPath: string;
  sourceOptions: SourceOption[];

  constructor(options: defaultOptions) {
    if (typeof options.outputPath === 'undefined') {
      throw 'options.outputPath is not defined';
    }

    this.outputPath = options.outputPath;
    this.sourceOptions = options.sourceOptions;

  }
}
