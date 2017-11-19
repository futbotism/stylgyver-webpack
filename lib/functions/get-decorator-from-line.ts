export function getDecoratorFromLine(line: string) {
  const regex = /(@[\w\-]+)/;
  const lineMatch = line.match(regex);
  if (lineMatch) return lineMatch[0].replace('@', '');
}
