import { Comment } from '../models/';

export function getExamplesFromComments(comments: Comment[]): string[] {

  const examples: string[] = [];
  comments.forEach((comment) => {
    examples.push(...comment.examples.map(e => e.code));
  });

  return examples;
}
