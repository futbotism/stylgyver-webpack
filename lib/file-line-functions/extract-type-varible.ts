import { TypedVariable } from '../models';

export function extractTypedVariable(line: string): TypedVariable {
  const regex = /(\w*?)\s?\:\s?(\w*[\[\]]*)/;
  const lineMatch = regex.exec(line);


  if (lineMatch) {
    return {
      name: lineMatch[1],
      type: lineMatch[2],
    };
  }
}
