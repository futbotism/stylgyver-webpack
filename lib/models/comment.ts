export interface Comment {
  // type: string;
  name: string;
  examples: Example[];
  subheads: string[];
  description: string;
  param: string[];
  api: string;
  params: Param[];
  comment: InnerComment;
  context: Context;
  heading: Heading;
  lead: string;
}

export interface Example {
  lang: string;
  code: string;
  block: string;
}

export interface Param {
  type: string;
  name: string;
  description: string;
}

export interface InnerComment {
  begin: number;
  end: number;
  code: string;
  content: string;
  codeStart: number;
}

export interface Context {
  begin: number;
  type: string;
  class: string;
  name: string;
  params: string[];
  string: string;
  original: string;
}

export interface Heading {
  level: number;
  text: string;
  prefix: string;
}
