export interface Options {
  outputPath: string;
  sources: Source[];
}

export interface Source {
  name: string;
  parseType: parseType;
  path: string;
  folderToIgnore: string[];
  tagsToSelect: string[];
}

export type parseType = 'component' | 'directive' | 'service' | 'pipe' | 'model';

export const parseType = {
  component: 'component' as parseType,
  directive: 'directive' as parseType,
  service: 'service' as parseType,
  pipe: 'pipe' as parseType,
  model: 'model' as parseType,
};

