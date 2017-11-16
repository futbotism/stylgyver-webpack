import { Property } from '../models';

export function getPropertyFromLine(line: string): Property {
  const regex = /(\w*?)\s?\:\s?(\w*[\[\]]*)/;
  const lineMatch = regex.exec(line);

  // HACK until the regex support @outputs
  if (line.includes('@Output')) {
    return new Property('OUTPUT_NAME', 'OUTPUT_TYPE', 'Output');
  }

  if (lineMatch) {
    const decorator = findDecorator(line);
    return new Property(lineMatch[1], lineMatch[2], decorator);
  }
}

export function findDecorator(line: string) {
  if (line.includes('@Input')) return 'Input';
  if (line.includes('@HostBinding')) return 'HostBinding';
  if (line.includes('@ContentChild')) return 'ContentChild';
  if (line.includes('@ContentChildren')) return 'ContentChildren';
}
