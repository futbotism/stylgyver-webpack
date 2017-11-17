import { Comment } from '../models/';

export function getCodeFromComments(comments: Comment[]): string[] {

  const examples: string[] = [];
  
  comments.forEach((comment) => {
    examples.push(...comment.examples.map(e => e.code));
  });

  console.log(examples);

  return examples;
}
