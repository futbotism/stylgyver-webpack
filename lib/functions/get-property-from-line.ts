import { Property } from '../models';
import { getDecoratorFromLine } from './index';

export function getPropertyFromLine(line: string): Property {
  const regex = /(\w*?)\s?\:\s?(\w*[\[\]]*)/;
  const lineMatch = regex.exec(line);

  // HACK until the regex support @outputs
  if (line.includes('@Output')) {
    return new Property('OUTPUT_NAME', 'OUTPUT_TYPE', 'Output');
  }


  if (lineMatch) {
    const decorator = getDecoratorFromLine(line);
    const a = new Property(lineMatch[1], lineMatch[2], decorator);
    return a;
  }
}
